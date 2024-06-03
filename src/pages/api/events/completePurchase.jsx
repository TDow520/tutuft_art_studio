import { Client, Environment } from "square";
import sendReceipt from "./sendReceipt"; // Import the sendReceipt function
import supabase from "@/app/supabaseClient";

const client = new Client({
    environment: 'sandbox', // or Environment.Production
    accessToken: process.env.SQ_ACCESS_TOKEN
});

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { amount, email, fName, lName, nonce, cartItems } =
            req.body;
        const customer_name = `${fName} ${lName}`;

        try {
            const paymentsApi = client.paymentsApi;

            // Create a payment request
            const response = await paymentsApi.createPayment({
                sourceId: nonce,
                amountMoney: {
                    amount: amount * 100, // convert to cents
                    currency: "USD"
                },
                idempotencyKey: new Date().toISOString() // unique key to prevent duplicate payments
            });

            if (response.errors) {
                return res.status(400).json({ error: response.errors });
            }

            // Successful payment
            const receipt = response.result;

            // Save the order to the database
            const { data, error } = await supabase
                .from("receipts")
                .insert([
                    {
                        email,
                        customer_name,
                        receipt: JSON.stringify(receipt),
                        cart_items: JSON.stringify(cartItems),
                        total: amount
                    }
                ]);

            if (error) {
                return res.status(500).json({ error: error.message });
            }

            // Send email to the customer
            await sendReceipt(
                {
                    name: customer_name,
                    email,
                    message: `Thank you for your purchase! Here is your receipt: ${JSON.stringify(
                        receipt
                    )}`
                },
                res
            );

            res.status(200).json({ success: true, receipt });
        } catch (error) {
            console.error("Error processing payment:", error);
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
