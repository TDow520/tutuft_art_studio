import React from "react";
import { PaymentForm, CreditCard, ApplePay, GooglePay } from "react-square-web-payments-sdk";


const SquarePayment = ({ handleSQPayment }) => {
    const appID = process.env.NEXT_PUBLIC_SQ_APP_ID;
    const locationID = process.env.NEXT_PUBLIC_SQ_LOCATION_ID;

    return (
        <PaymentForm
            applicationId={appID}
            locationId={locationID}
            cardTokenizeResponseReceived={ async( token, verifiedBuyer ) => {
                console.log("Card tokenized:", token.token);
                console.log("Verified buyer:", verifiedBuyer);
                handleSQPayment(token.token);
                console.log("Payment completed successfully");
            }}
        >
            <CreditCard />
            {/* <ApplePay />
            <GooglePay /> */}
        </PaymentForm>
    )
}

export default SquarePayment;