"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "../../cart/CartContext";
import KitImage from "./kitImage";
import EventModal from "../../upcoming/popUpModal";

const TakeHomeKit = () => {
    const { items, addToCart, removeFromCart } = useCart();
    const [kits, setKits] = useState([]);

    useEffect(() => {
        fetch("/kits.json")
            .then((response) => response.json())
            .then((data) => setKits(data));
    }, []);

    return (
        <div className="">
            <section className="flex flex-wrap justify-evenly border">
                {kits.map((kit, index) => (
                    <div className="w-1/5 flex-none p-2 border" key={index}>
                        <KitImage kit={kit} index={index} />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default TakeHomeKit;
