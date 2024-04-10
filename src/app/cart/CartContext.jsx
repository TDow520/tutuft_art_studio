"use client";

// CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export default function useCart() {
    return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (event) => {
        setCartItems((prevItems) => {
            const updatedItems = [...prevItems, event];
            console.log(updatedItems);
            return updatedItems;
        });
    };

    const removeFromCart = (eventId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.available !== eventId)
        );
        // add 1 to the available count
        item.available = item.available + 1;
    };

    const value = {
        items: cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider> // Context provider for cart functionality
    );
};
