"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "../cart/CartContext";

const EventModal = ({ event, visible, onClose }) => {
    const [popUpVisible, setPopUpVisible] = useState(visible);
    const [addedToCart, setAddedToCart] = useState(false);

    useEffect(() => {
        setPopUpVisible(visible);
    }, [visible]);

    // This will revert the added to cart message to the event details
    useEffect(() => {
        // Check if added to cart is true
        if (addedToCart) {
            // Set a timeout to revert the added to cart message to the event details
            setTimeout(() => {
                setAddedToCart(false);
            }, 3000); // 1000 milliseconds = 1 second
        }
    
    })

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
        addToCart(event); // Add the event to the cart

        setAddedToCart(true); // Set added to cart to true

        // subtract one from the available
        event.available = event.available - 1;
        console.log("Event added to cart");
    };

    // function to display event images by the event title
    const displayEventImg = (event) => {
        if (event.title === "Rug Tufting") {
            return event.pic;
        } else if (event.title === "Paint 'n' Sip") {
            return event.pic;
        } else if (event.title === "Candle Making") {
            return event.pic;
        } else if (event.title === "Perfume Making") {
            return event.pic;
        }
    };

    if (popUpVisible) {
        return (
            <div
                id="backdrop"
                className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center overflow-y-auto z-[500]"
                onClick={backdropClick}
            >
                <div className="flex flex-col items-center bg-emerald-600 p-2 w-[55%] h-[65%] overflow-y-auto rounded-xl text-gold-600 font-bold text-xl text-center">
                    {/*Condidtaionally render the added to cart message*/}
                    {addedToCart ? (
                        <React.Fragment>
                            {/* Reduce the text size shown on larger screens, hidden on smaller */}
                            <div className="flex flex-col  py-[10%] items-center phone:hidden tablet:hidden laptop:text-[175%] dektop:text-[175%]">
                                <Image
                                    src={displayEventImg(event)}
                                    alt={event.title}
                                    width={200}
                                    height={50}
                                    className="align-middle"
                                />
                                <p className=" my-4">{event.title}</p>
                                <p className="mb-4">
                                    on {event.date} from {event.time}
                                </p>
                                <p>has been added to Cart</p>
                            </div>
                            {/* Reduce the text size shown on larger screens, hidden on smaller  */}
                            <div className="flex flex-col py-[10%] items-center laptop:hidden desktop:hidden">
                                <Image
                                    src={displayEventImg(event)}
                                    alt={event.title}
                                    width={200}
                                    height={50}
                                    className="align-middle"
                                />
                                <p className=" my-4">{event.title}</p>
                                <p className="mb-4">
                                    on {event.date} from {event.time}
                                </p>
                                <p>has been added to Cart</p>
                            </div>
                        </React.Fragment>
                    ) : (
                        <div className="w-full h-full">
                            <div className=" flex flex-col text-[175%] pt-[7%] items-center ">
                                <h1 className="my-4">{event.title}</h1>
                                <Image
                                    src={displayEventImg(event)}
                                    alt={event.title}
                                    width={200}
                                    height={50}
                                    className="align-middle"
                                />
                                <h3 className="mt-6 mb-4">
                                    Time: 6:00pm - 8:00pm
                                </h3>
                                <br />
                                <p className="flex mb-2">
                                    Cost: ${event.price}
                                </p>
                                <p className="flex mb-2">Age: 18+</p>
                                <p className="flex mb-4">
                                    <div className="flex mr-2">
                                        Available Slots: {event.available}/
                                        {event.slots}{" "}
                                    </div>
                                    <button onClick={handleAddToCart}>
                                        <Image
                                            src="/plus_sign.png"
                                            width={30}
                                            height={30}
                                            alt="Book Event"
                                        />
                                    </button>
                                </p>
                            </div>
                            <button
                                className="mt-4 bg-emerald-50 text-emerald-700 p-2 rounded-md w-[150px]"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    return null;
};

export default EventModal;