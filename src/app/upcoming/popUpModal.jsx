"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "../cart/CartContext";

const EventModal = ({ event, visible, onClose }) => {
    const [popUpVisible, setPopUpVisible] = useState(visible);

    useEffect(() => {
        setPopUpVisible(visible);
    }, [visible]);

    // Destructure the addToCart function from useCart
    const { addToCart } = useCart();

    const closeModal = () => {
        setPopUpVisible(false);
        onClose();
    };

    const backdropClick = (e) => {
        // Check if the click is on the backdrop itself and not on the modal
        if (e.target.id === "backdrop") {
            closeModal();
        }
    };

    // Directly define the function to add to cart
    const handleAddToCart = () => {
        console.log(event);
        addToCart(event);
        // closeModal(); // Optionally close the modal upon adding to cart
        console.log("Event added to cart");
    };

    // function to display event images by the event title
    const displayEventImg = (event) => {
        if (event.title === "Rug Tufting") {
            return "/rug_tuft.jpeg";
        } else if (event.title === "Paint 'n' Sip") {
            return "/paint-n-sip.jpeg";
        }
    };

    if (popUpVisible) {
        return (
            <div
                id="backdrop"
                className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center overflow-y-auto"
                onClick={backdropClick}
            >
                <div className="flex flex-col items-center bg-emerald-200 p-2 w-[55%] h-[65%] overflow-y-auto rounded-xl text-yellow-700 font-bold text-xl text-center">
                    <h1 className=" flex flex-col text-[175%] my-[2%]">
                        {event.title}
                    </h1>
                    <Image
                        src={displayEventImg(event)}
                        alt={event.title}
                        width={200}
                        height={50}
                    />
                    <h3>Time: 6:00pm - 8:00pm</h3>
                    <br />
                    <p>Cost: $25</p>
                    <p>Supplies: Provided</p>
                    <p>Age: 18+</p>
                    <p className="flex">
                        <div className="flex mr-2">
                            Available Slots: 10/{event.slots}{" "}
                        </div>
                        <button onClick={handleAddToCart}>
                            <Image
                                src="/plus_sign.png"
                                width={25}
                                height={25}
                                alt="Book Event"
                            />
                        </button>
                    </p>
                    <button
                        className="rounded-md bg-blue-500 w-[50%] text-white"
                        onClick={closeModal}
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }
    return null;
};

export default EventModal;