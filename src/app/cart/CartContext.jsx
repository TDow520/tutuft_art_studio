"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Creating a context to handle cart functionalities across components.
export const CartContext = createContext();

// Provider component that manages cart state and provides it to child components.
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart from local storage on component mount
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        console.log("Loading cart from local storage:", storedCart);
        if (storedCart) {
            try {
                setCartItems(JSON.parse(storedCart));
            } catch (error) {
                console.error("Error parsing stored cart data:", error);
            }
        }
    }, []);

    // Save cart to local storage whenever it changes
    useEffect(() => {
        console.log("Saving cart to local storage:", cartItems);
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    // Function to update slots in the database, returns a promise.
    const updateSlots = (id, available) => {
        return new Promise((resolve, reject) => {
            if (available === null) {
                console.error(
                    "Attempted to update slots with invalid value:",
                    available
                );
                reject("Invalid available value");
                return;
            }

            // PATCH request to update the availability of slots.
            fetch("api/events/updateSlots", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, available })
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            "Failed to update slots: " + response.statusText
                        );
                    }
                    return response.json();
                })
                .then((data) => {
                    if (data.error) {
                        console.error("Error updating slots:", data.error);
                        reject(data.error);
                    } else {
                        console.log("Updated slots successfully:", data);
                        resolve(data);
                    }
                })
                .catch((error) => {
                    console.error("Error during update operation:", error);
                    reject(error);
                });
        });
    };

    // Function to add items to the cart.
    const addToCart = (event, onSuccessAdd) => {
        setCartItems((prevItems) => {
            // Check if the event already exists in the cart
            const existingItemIndex = prevItems.findIndex(
                (item) => item.event_id === event.event_id
            );

            if (existingItemIndex >= 0) {
                // If the item already exists in the cart, increase its quantity and decrease available slots.
                const updatedItems = [...prevItems];
                const existingItem = updatedItems[existingItemIndex];

                // Check if the item is available
                if (existingItem.available > 0) {
                    updatedItems[existingItemIndex] = {
                        ...existingItem,
                        quantity: existingItem.quantity + 1,
                        available: Math.max(0, existingItem.available - 1)
                    };
                    updateSlots(event.event_id, existingItem.available - 1)
                        .then(() => {
                            if (onSuccessAdd) {
                                onSuccessAdd(event.event_id);
                            }
                        })
                        .catch((error) =>
                            console.error("Update failed", error)
                        );
                }

                return updatedItems;
            } else {
                // If the item does not exist, add it to the cart with quantity initialized to 1
                const newItem = {
                    ...event,
                    quantity: 1,
                    available: event.available - 1
                };
                updateSlots(event.event_id, newItem.available)
                    .then(() => {
                        if (onSuccessAdd) {
                            onSuccessAdd(event.event_id);
                        }
                    })
                    .catch((error) => console.error("Update failed", error));

                return [...prevItems, newItem];
            }
        });
    };

    // Function to remove items from the cart.
    const removeFromCart = (event) => {
        setCartItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex(
                (item) => item.event_id === event.event_id
            );

            if (existingItemIndex === -1) {
                console.error("Item not found in cart.");
                return prevItems; // Early return if item is not found
            }

            const existingItem = prevItems[existingItemIndex];
            let updatedItems;

            if (existingItem.quantity === 1) {
                // Remove the item entirely from the cart if this is the last one
                updatedItems = prevItems.filter(
                    (item) => item.event_id !== existingItem.event_id
                );
            } else {
                // Decrease the quantity and increase available slots
                updatedItems = prevItems.map((item) =>
                    item.event_id === existingItem.event_id
                        ? {
                              ...item,
                              quantity: item.quantity - 1,
                              available: item.available + 1 // Ensure available slots are increased
                          }
                        : item
                );
            }

            // Always update the available slots in the database regardless of quantity
            const updatedAvailable = existingItem.available + 1;
            updateSlots(existingItem.event_id, updatedAvailable)
                .then(() => {
                    console.log(
                        "Database updated successfully with available slots:",
                        updatedAvailable
                    );
                })
                .catch((error) => {
                    console.error("Error updating database:", error);
                });

            return updatedItems;
        });
    };

    // Providing the context value which components can consume.
    const value = { items: cartItems, addToCart, removeFromCart };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

// Custom hook to access the cart context.
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
