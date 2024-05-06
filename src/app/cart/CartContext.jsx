"use client";

// CartContext.js
import React, { createContext,useContext, useState, useEffect } from "react";

// Creating a context for cart operations to be accessible across components
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // State to track the items in the cart
    const [cartItems, setCartItems] = useState([]);


    //modify the slots of teh event in the database when the event is added/removed to the cart or the quantity is changed
    useEffect(() => {
        cartItems.forEach(item => {
            fetch("/api/events", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: item.id, event_slot: item.availableSlots }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Updated slots in the database:", data);
                })
                .catch((error) => {
                    console.error("Error updating slots:", error);
                });
        });
    }, [cartItems]);


    // Function to add an event to the cart
const addToCart = (event) => {
    setCartItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
            (item) => item.event_id === event.event_id
        );
        if (existingItemIndex >= 0) {
            // If the item already exists in the cart, increase its quantity
            const updatedItems = [...prevItems];

            updatedItems[existingItemIndex] = {
                ...updatedItems[existingItemIndex],
                quantity: updatedItems[existingItemIndex].quantity + 1,
                availableSlots: Math.max(
                    0,
                    updatedItems[existingItemIndex].availableSlots - 1
                )
            };
            return updatedItems;
        } else {
            // If the item does not exist, add it to the cart with quantity initialized to 1
            return [
                ...prevItems,
                {
                    ...event,
                    quantity: 1,
                    availableSlots: event.slot - 1
                }
            ];
        }
    });
};

    // Function to remove an event from the cart
    const removeFromCart = (event) => {
        setCartItems((prevItems) => {
            // Locate the item in the cart
            const existingItem = prevItems.find((item) => item.id === event.event_id);
            if (existingItem.quantity === 1) {

                // If only one item left, remove it entirely from the cart
                return prevItems.filter((item) => item.id !== event.event_id);
            } else {

                // If more than one, decrease the quantity and increase available slots
                return prevItems.map((item) =>
                    item.id === event.event_id ? { ...item, quantity: item.quantity - 1, availableSlots: item.slot + 1 }
                    : item
                );
            }
        });
        console.log(event.slot);
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
