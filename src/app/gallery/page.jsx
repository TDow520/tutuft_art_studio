"use client"

import React from "react";
import { useState } from "react";
import PicLib from "./picLib/page";
import Sketch from "./sketches/sketch";
import TakeHomeKit from "./take_home/page";

const GalleryPage = () => {
    const [showPicLib, setShowPicLib] = useState(true);
    const [showSketch, setShowSketches] = useState(false);
    const [showTakeHome, setShowTakeHome] = useState(false);

    const togglePicLib = () => {
        setShowPicLib(true);
        setShowSketches(false);
        setShowTakeHome(false);
    };

    const toggleSketch = () => {
        setShowSketches(true);
        setShowPicLib(false);
        setShowTakeHome(false);
    };

    const toggleTakeHome = () => {
        setShowTakeHome(true);
        setShowPicLib(false);
        setShowSketches(false);
    };

    //  have tabs that are linked to the gallery image, sketches, and take home kits
    //  these tabs will change the content of the section to display the appropriate content
    return (
        <div className="w-full ">
            <div className="flex flex-row justify-right gap-3 mt-5  text-[150%]">
                <button
                    onClick={togglePicLib}
                    className="bg-slate-500/60 hover:rotate-[25deg] hover:-translate-y-3 rounded-tr-md rounded-tl-md p-1"
                >
                    Gallery
                </button>
                <button
                    onClick={toggleSketch}
                    className="bg-slate-500/60 hover:rotate-[25deg] hover:-translate-y-3 rounded-tr-md rounded-tl-md p-1"
                >
                    Sketches
                </button>
                <button
                    onClick={toggleTakeHome}
                    className="bg-slate-500/60 hover:rotate-[25deg] hover:-translate-y-6 rounded-tr-md rounded-tl-md p-1"
                >
                    Take Home Kits
                </button>
            </div>
            <div className="h-full w-full bg-slate-500/50 ">
                {/* immediately load the gallery images */}
                {showPicLib && <PicLib />}
                {/* load the sketches when the button is clicked */}
                {showSketch && <Sketch />}
                {/* load the take home kits */}
                {showTakeHome && <TakeHomeKit />}
            </div>
        </div>
    );
};

export default GalleryPage;