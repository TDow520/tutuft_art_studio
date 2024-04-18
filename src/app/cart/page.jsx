"use client";

// Inside your Cart component
import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
    const { items, removeFromCart } = useCart();
    console.log(items);

    // this is a sum function to get the total for all the items in the cart
    const sum = items.reduce((acc, item) => acc + item.price, 0);
    let tax = sum * .08;
    let total = sum + tax;
    let count = 0;

    return (
        <div className="w-[75%] h-[100%]">
            <div className="flex flex-row border border-red-800 w-full justify-evenly">
                {/* List items in the cart */}
                {items.map((item) => (
                    <div
                        className="flex flex-col border border-yellow-200 justify-evenly w-[15%]"
                        key={item.id}
                    >
                        {/* only put three items in a row then start a new row */}

                        <p className="mb-2">Date: {item.date}</p>
                        <p className="mb-2">{item.title}</p>
                        <p className="mb-2">Price: ${item.price}</p>

                        {/* if the event is the same name and date  key is the same then update the quantity */}
                        {item.title === item.title &&
                        item.date === item.date ? (
                            ((count = count + 1),
                            (<p className="mb-2">Quantity: {count}</p>))
                        ) : (
                            <p className="mb-2">Quantity: {count}</p>
                        )}
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-gray-300 text-green-600 rounded-md "
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            {/* make a table for the amounts and the taxes and the grand total. */}
            <table className="flex flex-col border border-red-500 items-center">
                <tbody>
                    <tr className="flex w-full justify-between">
                        <td>Subtotal:</td>
                        <td>${sum.toFixed(2)}</td>
                    </tr>
                    <tr className="flex w-full justify-between">
                        <td>Tax:</td>
                        <td>${tax.toFixed(2)}</td>
                    </tr>
                    <tr className="flex w-full justify-between">
                        <td>Total:</td>
                        <td>${total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>
                            <button className="bg-green-300 text-white rounded-md w-full">
                                Checkout
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cart;