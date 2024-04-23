"use client";

// CartContext.js
import React, { createContext,useContext, useState } from "react";

// Creating a context for cart operations to be accessible across components
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // State to track the items in the cart
    const [cartItems, setCartItems] = useState([]);

    // Function to add an event to the cart
    const addToCart = (event) => {
        setCartItems((prevItems) => {
            // Check if the event is already in the cart
            const existingItem = prevItems.find((item) => item.id === event.id);
            if (existingItem) {
                // If existing, increase quantity and decrease available slots, ensuring slots don't drop below 0
                return prevItems.map((item) =>
                    item.id === event.id ? {...item, quantity: item.quantity + 1, availableSlots: Math.max( 0, event.available - 1 ) }
                    : item
                );
            } else {
                // If not existing, add new item with quantity initialized to 1 and reduce available slots from total slots
                return [
                    ...prevItems, { ...event, quantity: 1, availableSlots: event.available + 1 }
                ];
            }
        });
    };

    // Function to remove an event from the cart
    const removeFromCart = (event) => {
        setCartItems((prevItems) => {
            // Locate the item in the cart
            const existingItem = prevItems.find((item) => item.id === event.id);
            if (existingItem.quantity === 1) {
                // If only one item left, remove it entirely from the cart
                return prevItems.filter((item) => item.id !== event.id);
            } else {
                // If more than one, decrease the quantity and increase available slots
                return prevItems.map((item) =>
                    item.id === event.id ? { ...item, quantity: item.quantity - 1, availableSlots: item.availableSlots + 1 }
                    : item
                );
            }
        });
        console.log(event.available);
    };

    // Context value that will be passed to components that consume the CartContext
    const value = {
        items: cartItems,
        addToCart,
        removeFromCart
    };

    // Provider component that passes the cart context down to children components
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

// Hook to use the cart context easily
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
