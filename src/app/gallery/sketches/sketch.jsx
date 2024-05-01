"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "../../cart/CartContext";
import SketchImg from "./sketchImg";
import EventModal from "../../upcoming/popUpModal";

const Sketch = () => {
    const { items, addToCart, removeFromCart } = useCart();
    const [sketchs, setSketchs] = useState([]);

    useEffect(() => {
        fetch("/kits.json")
            .then((response) => response.json())
            .then((data) => setSketchs(data));
    }, []);

    return (
        <div className="">
            <section className="flex flex-wrap justify-evenly border">
                {sketchs.map((sketch, index) => (
                    <div className="w-1/5 flex-none p-2 border" key={index}>
                        <SketchImg sketch={sketch} index={index} />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Sketch;
