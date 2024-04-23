    "use client";

    // Inside your Cart component
    import React from "react";
    import { useCart } from "./CartContext"; // Importing useCart custom hook from the CartContext

    const Cart = () => {
        // Accessing items and removeFromCart function from the cart context
        const { items, addToCart, removeFromCart } = useCart();

        // Calculate the subtotal by multiplying each item's price by its quantity and summing the results
        const subtotal = items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
        const tax = subtotal * 0.08; // Calculating tax as 8% of the subtotal
        const total = subtotal + tax; // Total amount including tax

        return (
            <div className="flex flex-col items-center my-4 text-yellow-500 bg-opacity-40 w-full">
                <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                {items.length > 0 ? (
                    <div className="p-4 w-full h-[50%]">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-row bg-white w-full shadow-md p-4 mb-4 rounded-lg "
                            >
                                <section className="flex flex-row justify-start w-[50%]">
                                    <h3 className="flex text-xl font-semibold justify-left my-auto mx-[2%] w-[45%]">
                                        {item.title}
                                    </h3>
                                    <img
                                        src={item.pic}
                                        alt={item.title}
                                        className="flex w-[25%]"
                                    />
                                </section>

                                <section className="flex flex-col w-[50%] my-auto border">
                                    <p className="p-[2%]">Date: {item.date}</p>
                                    <p className="p-[2%]">
                                        Price: ${item.price.toFixed(2)}
                                    </p>
                                    <p className="flex flex-row justify-center text-green-600 p-[2%]">
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="flex bg-slate-400 w-[10%] justify-center"
                                        >
                                            +
                                        </button>
                                        <p className="flex bg-white w-[5%] justify-center">
                                            {item.quantity}
                                        </p>

                                        <button
                                            onClick={() => removeFromCart(item)}
                                            className="flex w-[10%] bg-slate-400 justify-center"
                                        >
                                            -
                                        </button>
                                    </p>
                                </section>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-[250%] bg-slate-400 bg-opacity-30 w-full">
                        Your cart is empty
                    </p>
                )}
                <div className="flex flex-col items-center w-full bg-slate-400 bg-opacity-30">
                    <table className="w-[75%] text-center">
                        <tbody className="flex flex-col">
                            <tr className="flex justify-between">
                                <td className="p-4">Subtotal</td>
                                <td className="p-4">${subtotal.toFixed(2)}</td>
                            </tr>
                            <tr className="flex justify-between">
                                <td className="p-4">Tax</td>
                                <td className="p-4">${tax.toFixed(2)}</td>
                            </tr>
                            <tr className="flex justify-between">
                                <td className="p-4">Total</td>
                                <td className="p-4">${total.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="bg-emerald-500 text-yellow-400 rounded-md px-4 py-2 mt-4 mb-4 tablet:w-[20%] laptop:w-[20%] desktop:w-[20%] phone:text-lg phone:w-[75%] phone_land:text-lg phone_land:w-[75%]">
                        Checkout
                    </button>
                </div>
            </div>
        );
    };

    export default Cart;
