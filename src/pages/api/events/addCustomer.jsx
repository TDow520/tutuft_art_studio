import supabase from "@/app/supabaseClient";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { fName, lName, email, phone } = req.body;

        try {
            const { data, error } = await supabase
                .from("customer")
                .insert([
                    { f_name: fName, l_name: lName, email, number: phone }
                ]);

            if (error) {
                console.error("Error inserting customer:", error);
                return res
                    .status(500)
                    .json({ success: false, error: error.message });
            }

            console.log("Customer added successfully:", data);
            return res.status(200).json({ success: true, data });
        } catch (error) {
            console.error("Unexpected error:", error);
            return res
                .status(500)
                .json({ success: false, error: "Internal Server Error" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        console.log(`Method ${req.method} Not Allowed`);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
