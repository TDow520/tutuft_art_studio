'use client';

import React, { useState, useEffect } from "react";
import EventMod from "./allEvents/page";
import GalleryMod from "./galleryPics/page";

export default function DataChange() {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Function to decide what to display based on the selection from the dropdown
    const handleSelect = (e) => {
        const selection = e.target.textContent;
        console.log(selection);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSelectedComponent(selection);
        }, 500); // Simulate a loading delay
    };

    // Toggle the dropdown menu to show/hide
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Display the selected component
    const renderSelectedComponent = () => {
        if (loading) {
            return <p>Loading...</p>;
        }

        switch (selectedComponent) {
            case "Events":
                return <EventMod />;
            case "Gallery":
                return <GalleryMod />;
            default:
                return <p>Please select an option from the menu.</p>;
        }
    };

    return (
        <div className="w-full">
            <div className="bg-slate-700/60 flex flex-col items-center rounded-md">
                <button onClick={toggleDropdown}>Menu</button>
                {isOpen && (
                    <div className="flex flex-row w-[50%] my-3 gap-3 text-black justify-evenly">
                        <button className="flex w-[15%] justify-center bg-white rounded-md" onClick={handleSelect}>Events</button>
                        <button className="flex w-[15%] justify-center bg-white rounded-md" onClick={handleSelect}>Gallery</button>
                    </div>
                )}
            </div>
            <div className="mt-5">
                {renderSelectedComponent()}
            </div>
        </div>
    );
}
