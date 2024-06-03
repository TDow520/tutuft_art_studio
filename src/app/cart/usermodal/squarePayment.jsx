import React from "react";
import { PaymentForm, CreditCard, ApplePay, GooglePay } from "react-square-web-payments-sdk";


const SquarePayment = ({ handleSquarePayment }) => {
    return (
        <PaymentForm
            applicationId={process.env.SQ_APP_ID}
            locationId={process.env.SQ_LOCATION_ID}
            cardTokenizeResponseReceived={ async( token, verifiedBuyer ) => {
                console.log("Card tokenized:", token);
                handleSquarePayment(token);
                console.log("Verified buyer:", verifiedBuyer);
            }}
        >
            <CreditCard />
            <ApplePay />
            <GooglePay />
        </PaymentForm>
    )
}

export default SquarePayment;