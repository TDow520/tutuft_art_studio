"use client";

import React from "react";
import { useCart } from "./CartContext"; // Importing useCart custom hook from the CartContext
import Image from "next/image";

const Cart = () => {
    // Accessing the cart items and functions for manipulating the cart
    const { items, addToCart, removeFromCart } = useCart();

    // Calculate the subtotal by summing up the product of each item's price and quantity
    const subtotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const tax = subtotal * 0.08; // Calculating an 8% tax on the subtotal
    const total = subtotal + tax-tax; // Total cost including tax
    
    console.log(items)
    return (
        <div className="flex flex-col items-center my-4 text-yellow-200 bg-opacity-40 w-full">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {items.length > 0 ? (
                <div className="w-[95%]">
                    {/* Mobile/Tablet view */}
                    <div className="hidden phone:block phone_land:block tablet:block">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col bg-white bg-opacity-20 w-full shadow-lg p-4 mb-4 rounded-lg"
                            >
                                {/* Item title and image section */}
                                <section className="flex flex-col justify-between w-full">
                                    <h3 className="text-xl font-semibold mx-auto w-[90%]">
                                        {item.pic.name}
                                    </h3>
                                    <Image
                                        src={item.pic.url}
                                        alt={item.pic.name}
                                        height={1000}
                                        width={1000}
                                        className="w-[90%] mx-auto"
                                    />
                                </section>

                                {/* Item details and cart manipulation section */}
                                <section className="flex flex-col w-full my-auto">
                                    {/* only display the date if there is data in the field */}
                                    {item.date && (
                                        <p className="p-[2%]">
                                            Date: {item.date}
                                        </p>
                                    )}
                                    <p className="p-[2%]">
                                        Price: ${item.price.toFixed(2)}
                                    </p>
                                    <div className="flex justify-center text-green-600 p-[2%]">
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="bg-slate-400 w-[10vw] justify-center mr-2 rounded-sm"
                                        >
                                            +
                                        </button>
                                        <span className="bg-white w-[10vw] justify-center rounded-sm">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => removeFromCart(item)}
                                            className="bg-slate-400 w-[10vw] justify-center ml-2 rounded-sm"
                                        >
                                            -
                                        </button>
                                    </div>
                                </section>
                            </div>
                        ))}
                    </div>
                    {/* Desktop/Laptop view */}
                    <div className="laptop:block desktop:block hidden">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex bg-white bg-opacity-20 w-full shadow-lg p-4 mb-4 rounded-lg"
                            >
                                {/* Item title and image section */}
                                <section className="flex justify-start w-[50%]">
                                    <h3 className="text-xl font-semibold justify-left my-auto mx-[2%] w-[45%]">
                                        {item.pic.name}
                                    </h3>
                                    <Image
                                        src={item.pic.url}
                                        alt={item.pic.name}
                                        height={1000}
                                        width={1000}
                                        className="w-[25%] mx-auto"
                                    />
                                </section>

                                {/* Item details and cart manipulation section */}
                                <section className="flex flex-col w-[50%] my-auto">
                                    <p className="p-[2%]">Date: {item.date}</p>
                                    <p className="p-[2%]">
                                        Price: ${item.price.toFixed(2)}
                                    </p>
                                    <div className="flex justify-center text-green-600 p-[2%]">
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="bg-slate-400 w-[2vw] justify-center mr-2 rounded-sm"
                                        >
                                            +
                                        </button>
                                        <span className="bg-white w-[5%] justify-center rounded-sm">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => removeFromCart(item)}
                                            className="bg-slate-400 w-[2vw] justify-center ml-2 rounded-sm"
                                        >
                                            -
                                        </button>
                                    </div>
                                </section>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-[250%] bg-slate-400 bg-opacity-30 w-full">
                    Your cart is empty
                </p>
            )}
            <div className="flex flex-col items-center w-full bg-slate-400 bg-opacity-30 rounded-md">
                <table className="w-[75%] text-center text-[150%]">
                    <tbody className="flex flex-col">
                        <tr className="flex justify-between">
                            <td className="p-4">Subtotal</td>
                            <td className="p-4">${subtotal.toFixed(2)}</td>
                        </tr>
                        {/* <tr className="flex justify-between">
                            <td className="p-4">Tax</td>
                            <td className="p-4">${tax.toFixed(2)}</td>
                        </tr> */}
                        <tr className="flex justify-between">
                            <td className="p-4">Total</td>
                            <td className="p-4">${total.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="bg-emerald-500 text-yellow-400 rounded-md px-4 py-2 mt-4 mb-4 w-[20%] laptop:w-[20%] desktop:w-[20%] phone:w-[75%] phone_land:w-[75%] tablet:w-[75%]">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
