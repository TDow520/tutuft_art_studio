"use client";

import React, { useState } from "react";
import SquarePayment from "./squarePayment";

export default function UserModal({ isOpen, onClose, handlePayment, total }) {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [step, setStep] = useState(1);

    const handleSquarePayment = async (token) => {
        try {
            handlePayment({ fName, lName, email, phone, nonce: token });
        } catch (error) {
            console.error("Error processing payment:", error.message);
        }
    };

    const handleSubmit = async () => {
        try {
            console.log("Submitting form with:", {fName, lName, email, phone}); // Debugging
            const response = await fetch("/api/events/addCustomer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fName, lName, email, phone })
            });

            const result = await response.json();
            // console.log("Result:", result);

            if (!response.ok) {
                throw new Error(result.error || "Something went wrong");
            }

            console.log("User added successfully:", result.data);
            setStep(2); //move to the payment modal

        } catch (error) {
            console.error("Error adding user:", error.message);
        }
    };

    const handleCancel = () => {
        setFName("");
        setLName("");
        setEmail("");
        setPhone("");
        setStep(1); // bak to the Information modal and close the modal
        onClose();
    };

    if (!isOpen) return null;
    
    const isFormValid = () => {
        return (
            fName.trim() !== "" &&
            lName.trim() !== "" &&
            email.trim() !== "" &&
            phone.trim() !== ""
        );
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                {step === 1 && (
                    <>
                        <h2 className="mb-[5%]">Enter Your Information</h2>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={fName}
                            onChange={(e) => setFName(e.target.value)}
                            className="mb-2 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lName}
                            onChange={(e) => setLName(e.target.value)}
                            className="mb-2 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mb-2 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="mb-2 p-2 border border-gray-300 rounded-md w-full"
                        />

                        <button
                            onClick={handleSubmit}
                            className={`bg-green-500 text-white px-4 py-2 rounded-md`}
                            disabled={!isFormValid()}
                        >
                            Submit
                        </button>
                        <button
                            onClick={handleCancel}
                            className="bg-red-500 text-white px-4 py-2 rounded-md"
                        >
                            Cancel
                        </button>
                    </>
                )}

                {step === 2 && (
                    <div className="text-emerald-700 flex flex-col z-[10]">
                        <p
                            onClick={handleCancel}
                            className="cursor-pointer relative w-[11%] text-red-700 font-extrabold text-[105%] ml-[95%] rounded-[40px] -mt-[5%]"
                        > X</p>
                        <h2 className="mb-[5%]">Enter Payment Information</h2>
                        <div className="flex justify-center mb-[5%]">
                            ${total.toFixed(2)}
                        </div>
                        <SquarePayment handleSQPayment={handleSquarePayment} />
                        {/* <button
                            onClick={handleCancel}
                            className="bg-red-500 text-white px-4 py-2 rounded-md mt-[5%]"
                        >
                            Cancel
                        </button> */}
                    </div>
                )}
            </div>
        </div>
    );
}
