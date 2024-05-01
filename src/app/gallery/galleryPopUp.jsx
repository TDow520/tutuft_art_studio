"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "../cart/CartContext";

const GalleryModal = ({ kit, visible, onClose }) => {
    const [popUpVisible, setPopUpVisible] = useState(visible);
    const [addedToCart, setAddedToCart] = useState(false);

    useEffect(() => {
        setPopUpVisible(visible);
    }, [visible]);

    // This will revert the added to cart message to the kit details
    useEffect(() => {
        // Check if added to cart is true
        if (addedToCart) {
            // Set a timeout to revert the added to cart message to the kit details
            setTimeout(() => {
                setAddedToCart(false);
            }, 3000); // 1000 milliseconds = 1 second
        }
    });

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
        console.log(kit);
        addToCart(kit); // Add the kit to the cart

        setAddedToCart(true); // Set added to cart to true

        // subtract one from the available
        kit.available = kit.available - 1;
        console.log("kit added to cart");
    };



    if (popUpVisible) {
        return (
            <div
                id="backdrop"
                className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center overflow-y-auto z-[500]"
                onClick={backdropClick}
            >
                <div className="flex flex-col items-center bg-emerald-600/90 p-2 phone:w-[75%] phone_land:w-[75%] w-[42.5%] h-[55%] overflow-y-auto rounded-xl text-gold-600 font-bold text-center">
                    {/*Condidtaionally render the added to cart message*/}
                    {addedToCart ? (
                        <React.Fragment>
                            {/* Reduce the text size shown on larger screens, hidden on smaller */}
                            <div className="flex flex-col my-auto  items-center phone:hidden phone_land:hidden tablet:hidden text-[150%]">
                                <Image
                                    src={kit.pic}
                                    alt={kit.title}
                                    width={200}
                                    height={50}
                                    className="align-middle"
                                />
                                <p className=" my-4">{kit.title}</p>

                                <p>has been added to Cart</p>
                            </div>
                            {/* Reduce the text size shown on larger screens, hidden on smaller  */}
                            <div className="flex flex-col my-auto items-center laptop:hidden desktop:hidden border">
                                <Image
                                    src={kit.pic}
                                    alt={kit.title}
                                    width={200}
                                    height={50}
                                    className="align-middle"
                                />
                                <p className=" my-4">{kit.title}</p>

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
                            <div className=" flex flex-col phone:text-[100%] phone_land:text-[115%] text-[175%] items-center my-[5%] py-[5%]">
                                <h1 className="my-4">{kit.title}</h1>
                                <Image
                                    src={kit.pic}
                                    alt={kit.title}
                                    width={200}
                                    height={50}
                                    className="align-middle"
                                />

                                <br />
                                <p className="flex mb-2">
                                    Cost: ${kit.price}
                                </p>
                            </div>
                            <section className="flex flex-row justify-center">
                                <button
                                    onClick={handleAddToCart}
                                    className="text-black text-[150%] bg-slate-200 rounded-md hover:bg-slate-300 hover:drop-shadow-2xl w-[25%] justify-center tablet:hidden laptop:hidden desktop:hidden"
                                >
                                    +
                                </button>
                                <button
                                    className="phone:hidden  phone_land:hidden justify-center mt-4 bg-emerald-50 text-emerald-700 p-2 rounded-md w-[150px] flex hover:bg-slate-300 hover:drop-shadow-2xl"
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </button>
                            </section>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    return null;
};

export default GalleryModal;
