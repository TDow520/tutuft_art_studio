"use client";

// Inside your Cart component
import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
    const { items, removeFromCart } = useCart();

    return (
        <div>
            {/* List items in the cart */}
            {items.map((item) => (
                <div key={item.id}>
                    {item.name} {/* Adjust according to your event object */}
                    <button onClick={() => removeFromCart(item.id)}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};
