"use client";

// Inside your Cart component
import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
    const { items, removeFromCart } = useCart();
    console.log(items);

    // this is a sum function to get the total for all the items in the cart
    const sum = items.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="w-[75%] h-[100%]">
            <div className="flex flex-row border border-red-800 w-full justify-evenly">
                {/* List items in the cart */}
                {items.map((item) => (
                    <div
                        className="flex flex-col border border-yellow-200 justify-evenly w-[15%]"
                        key={item.id}
                    >
                        <p className="mb-2">Date: {item.date}</p>
                        <p className="mb-2">{item.title}</p>
                        <p className="mb-2">Price: ${item.price}</p>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-gray-300 text-green-600 rounded-md "
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <section> TOTAL: ${sum}</section>
        </div>
    );
};

export default Cart;