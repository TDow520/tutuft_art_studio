"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
// import supabase from "@/app/supabaseClient";

export default function PicLib() {
    const [images, setImages] = useState([]);

    // fetch the images from the database storage 
    // const fethcImg = async () => { 
    //     const { data, error } = await supabase
    //         .storage
    //         .from('events-imgs')
    //         .list("/", {limit: 10, offset: 0, sortBy: {column: "name", order: "asc"}});
    //    if (error) {
    //        console.log(error);
    //    } else {
    //        setImages(data);
    //    }
    // }


    return (
        <div className="h-full w-full border ">
            <h1>Gallery</h1>
            <p>Gallery page content goes here...</p>
            {/* If the screen is a phone or phone_land then display images as three images in a row */}
            <section className="h-full hidden phone:flex phone_land:flex phone:justify-between w-full border">
                <div className="flex flex-col items-center w-1/3">
                    <Image
                        src="/IMG_0021.jpg"
                        alt="Describe what IMG_0021 shows"
                        width={1000}
                        height={1000}
                    />
                    <h3>image title</h3>
                </div>
                <div className="flex flex-col items-center w-1/3">
                    <Image
                        src="/rug_tuft.jpeg"
                        alt="Describe what rug_tuft shows"
                        width={1000}
                        height={1000}
                    />
                    <h3>image title</h3>
                </div>
                <div className="flex flex-col items-center w-1/3">
                    <Image
                        src="/IMG_0023.jpg"
                        alt="Describe what IMG_0023 shows"
                        width={1000}
                        height={1000}
                    />
                    <h3>image title</h3>
                </div>
            </section>
            {/* If the screen is a tablet or laptop display 5 images in a row */}
            <section className="h-full hidden tablet:flex laptop:flex flew-wrap tablet:justify-between w-full border">
                <div className="flex flex-col items-center w-1/5">
                    <Image
                        src="/IMG_0021.jpg"
                        alt="Describe what IMG_0021 shows"
                        width={1000}
                        height={1000}
                    />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5">
                    <Image
                        src="/IMG_0022.jpg"
                        alt="Describe what IMG_0022 shows"
                        width={1000}
                        height={1000}
                    />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5">
                    <Image
                        src="/IMG_0023.jpg"
                        alt="Describe what IMG_0023 shows"
                        width={1000}
                        height={1000}
                    />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5">
                    <Image
                        src="/IMG_0022.jpg"
                        alt="Duplicate of IMG_0022, describe if different"
                        width={1000}
                        height={1000}
                    />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5">
                    <Image
                        src="/IMG_0023.jpg"
                        alt="Duplicate of IMG_0023, describe if different"
                        width={1000}
                        height={1000}
                    />
                    <h3>image title</h3>
                </div>
            </section>
            {/* if the screen is a desktop display 6 images in a row  */}
            <section className="h-full hidden desktop:flex flex-wrap gap-2 desktop:justify-around w-full border">
                <div className="flex flex-col items-center w-1/5 p-4 border mt-[5%]">
                    <Image
                        src="/IMG_0021.jpg"
                        alt="Describe what IMG_0021 shows"
                        width={1000}
                        height={1000}
                    />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5 p-4 border mt-[5%]">
                    <Image
                        src="/IMG_0022.jpg"
                        alt="Describe what IMG_0022 shows"
                        width={1000}
                        height={1000}
                    />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5 p-4 border mt-[5%]">
                    <Image
                        src="/IMG_0023.jpg"
                        alt="Describe what IMG_0023 shows"
                        width={1000}
                        height={1000}
                    />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5 p-4 border mt-[5%]">
                    <Image
                        src="/IMG_0022.jpg"
                        alt="Duplicate of IMG_0022, describe if different"
                        width={1000}
                        height={1000}
                    />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5 p-4 border mt-[5%]">
                    <Image
                        src="/IMG_0023.jpg"
                        alt="Duplicate of IMG_0023, describe if different"
                        width={1000}
                        height={1000}
                    />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5 p-4 border mt-[5%]">
                    <Image
                        src="/IMG_0023.jpg"
                        alt="Third copy of IMG_0023, describe if different"
                        width={1000}
                        height={1000}
                    />
                    <h3>image title</h3>
                </div>
            </section>
        </div>
    );
}
