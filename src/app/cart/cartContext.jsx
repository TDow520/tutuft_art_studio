"use client";

// CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (event) => {
        setCartItems((prevItems) => [...prevItems, event]);
    };

    const removeFromCart = (eventId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== eventId)
        );
    };

    const value = {
        items: cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
