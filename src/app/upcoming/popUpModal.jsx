"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const EventModal = ({ event, visible, onClose }) => {
    const [popUpVisible, setPopUpVisible] = useState(visible);

    useEffect(() => {
        setPopUpVisible(visible);
    }, [visible]);

    const closeModal = () => {
        setPopUpVisible(false);
        onClose();
    };

    // function to display event images by the event title
    const displayEventImg = (event) => {
        if (event.title === "Rug Tufting") {
            return("/rug_tuft.jpeg");
        } else if (event.title === "Paint 'n' Sip") {
            return("/paint-n-sip.jpeg");
        };
        
    };

    // Assuming displayEventImg function exists elsewhere in your code
    // Make sure to define or import it if you need to display event images

    if (popUpVisible) {
        return (
            <div className="fixed top-0 left-0 w-full h-full flex bg-opacity-1 items-center justify-center overflow-y-auto ">
                <div className="flex flex-col items-center bg-emerald-200 p-2 w-[55%] h-[55%] overflow-y-auto rounded-xl text-yellow-700 font-bold text-xl text-center">
                    {/* Assuming displayEventImg is correctly implemented */}
                    {/* {displayEventImg(event.date)} */}
                    <h2>{event.title}</h2>
                    <Image src={displayEventImg(event)} alt={event.title} width={300} height={50} />
                    <h3>Time: 6:00pm - 8:00pm</h3>
                    <br />
                    <p>Cost: $25</p>
                    <p>Supplies: Provided</p>
                    <p>Age: 18+</p>
                    <p>Available Slots: 10/{event.slots}</p>
                    <button
                        className="rounded-md bg-blue-500 w-[50%] text-white"
                        onClick={closeModal}
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }
    return null;
};

export default EventModal;
