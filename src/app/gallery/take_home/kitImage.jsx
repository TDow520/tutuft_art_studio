"use client";

import React, { useState } from "react";
import Image from "next/image";
import GalleryModal from "../galleryPopUp";

const KitImage = ({ kit }) => {
    const [selectedKit, setSelectedKit] = useState(null);
    const [popUpVisible, setPopUpVisible] = useState(false);

    // New function to handle image clicks
    const showModal = () => {
        setSelectedKit(kit);
        setPopUpVisible(true);
    };

    return (
        <div className="flex flex-col items-center mt-[5%] text-sm">
            <Image
                src={kit.pic}
                alt={kit.title}
                width={150}
                height={150}
                onClick={showModal}
                className="hover:drop-shadow-2xl rounded-md cursor-pointer"
            />
            <p className="underline phone:hidden phone_land:hidden">
                {kit.title}
            </p>
            <p className="underline phone:hidden phone_land:hidden">
                ${kit.price}
            </p>
            {selectedKit && (
                <GalleryModal
                    kit={selectedKit}
                    visible={popUpVisible}
                    onClose={() => setPopUpVisible(false)}
                />
            )}
        </div>
    );
};

export default KitImage;
