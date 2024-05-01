"use client";

import React, { useState } from "react";
import Image from "next/image";
// import EventModal from "../popUpModal";


const SketchImg = ({ sketch }) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const [popUpVisible, setPopUpVisible] = useState(false);

    // New function to handle image clicks
    const showModal = () => {
        setPopUpVisible(true);
    };


    return (
        <div className="flex flex-col items-center mt-[5%] text-sm">
            <Image
                src={sketch.pic}
                alt={sketch.title}
                width={150}
                height={150}
                onClick={showModal}
                className="hover:drop-shadow-2xl rounded-md cursor-pointer"
            />
            <p className="underline phone:hidden phone_land:hidden">
                {sketch.title}
            </p>
        </div>
    );
}

export default SketchImg;