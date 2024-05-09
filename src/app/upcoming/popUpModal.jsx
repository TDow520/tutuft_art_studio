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
        // console.log(event);
        addToCart(event); // Add the event to the cart

        setAddedToCart(true); // Set added to cart to true
        console.log("Event added to cart");
    };
    // console.log("time length", event.start.length);

    // convert event.start and end to 12 hour format
    const convertTime = (time) => {
        // Check if the time is in 24 hour format
        if (time.length === 8) {
            // Split the time into hours and minutes and seconds
            const [hours, minutes, seconds] = time.split(":");
            // Check if the hours is greater than 12
            if (parseInt(hours) > 12) {
                // Subtract 12 from the hours
                return `${parseInt(hours) - 12}:${minutes} PM`;
            }
            // Check if the hours is equal to 0
            if (parseInt(hours) === 0) {
                // Add 12 to the hours
                return `12:${minutes} AM`;
            }
            // Return the time in 12 hour format
            return `${hours}:${minutes} AM`;
        }
        // Return the time in 12 hour format
        return time;
    };


    if (popUpVisible) {
        return (
            <div
                id="backdrop"
                className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center overflow-y-auto z-[500]"
                onClick={backdropClick}
            >
                <div className="flex flex-col items-center bg-emerald-600 p-2 phone:w-[75%] phone_land:w-[75%] w-[45%] h-[65%] overflow-y-auto rounded-xl text-gold-600 font-bold text-center">
                    {/*Condidtaionally render the added to cart message*/}
                    {addedToCart ? (
                        <React.Fragment>
                            {/* Reduce the text size shown on larger screens, hidden on smaller */}
                            <div className="flex flex-col my-auto items-center phone:hidden phone_land:hidden tablet:hidden text-[150%]">
                                <Image
                                    src={event.pic.url}
                                    alt={event.pic.name}
                                    width={200}
                                    height={50}
                                    className="align-middle"
                                />
                                <p className=" my-4">{event.pic.name}</p>
                                <p className="mb-4">
                                    on {event.date} from{" "}
                                    {convertTime(event.start)} to{" "}
                                    {convertTime(event.end)}
                                </p>
                                <p>has been added to Cart</p>
                            </div>
                            {/* Reduce the text size shown on larger screens, hidden on smaller  */}
                            <div className="flex flex-col my-auto items-center laptop:hidden desktop:hidden">
                                <Image
                                    src={event.pic.url}
                                    alt={event.pic.name}
                                    width={200}
                                    height={50}
                                    className="align-middle"
                                />
                                <p className=" my-4">{event.pic.name}</p>
                                <p className="mb-4">
                                    on {event.date} from{" "}
                                    {convertTime(event.start)} to{" "}
                                    {convertTime(event.end)}
                                </p>
                                <p>has been added to Cart</p>
                            </div>
                        </React.Fragment>
                    ) : (
                        <div className="w-full h-full overflow-scroll no-scrollbar">
                            <button
                                className="sticky mt-1 ml-[95%] phone:ml-[90%] text-black bg-slate-200 rounded-md hover:bg-slate-300 hover:drop-shadow-2xl w-[5%] phone:w-[10%] phone:rounded-[50%]"
                                onClick={closeModal}
                            >
                                x
                            </button>
                            <div className=" flex flex-col phone:text-[100%] phone_land:text-[115%] text-[175%] items-center ">
                                <h1 className="my-4">{event.pic.name}</h1>
                                <Image
                                    src={event.pic.url}
                                    alt={event.pic.name}
                                    width={200}
                                    height={50}
                                    className="align-middle"
                                />
                                <h3 className="mt-6 mb-4">
                                    Time: {convertTime(event.start)} -{" "}
                                    {convertTime(event.end)}
                                </h3>
                                <h2 className="py-[5%]">
                                    Description:
                                    <p className="underline">
                                        {event.description}
                                    </p>
                                </h2>
                                <p className="flex mb-2">
                                    Cost: ${event.price}
                                </p>
                                <p className="flex mb-2">Age: 18+</p>
                                <div className="flex flex-col mb-4">
                                    <div className="flex mr-2">
                                            Available Slots: {event.available}
                                            {console.log("event available", event.available)}
                                    </div>
                                </div>
                            </div>
                            <section className="flex flex-row justify-center">
                                {event.available > 0 && (
                                        <>
                                            <button
                                                onClick={handleAddToCart}
                                                className="text-black text-[150%] bg-slate-200 rounded-md hover:bg-slate-300 hover:drop-shadow-2xl w-[25%] justify-center tablet:hidden laptop:hidden desktop:hidden"
                                            >
                                                +
                                            </button>
                                            <button
                                                className="phone:hidden phone_land:hidden justify-center mt-4 bg-emerald-50 text-emerald-700 p-2 rounded-md w-[150px] flex hover:bg-slate-300 hover:drop-shadow-2xl"
                                                onClick={handleAddToCart}
                                            >
                                                Add to Cart
                                            </button>
                                        </>
                                    )}
                            </section>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    return null;
};

export default EventModal;