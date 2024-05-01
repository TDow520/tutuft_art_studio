"use client";

import React from "react";
import Image from "next/image";

export default function PicLib() {
    return (
        <div className="h-full w-full border ">
            <h1>Gallery</h1>
            <p>Gallery page content goes here...</p>
            {/* If the screen is a phone or phone_land then display images as three images in a row */}
            <section className="h-full hidden phone:flex phone_land:flex  phone:justify-between w-full border">
                <div className="flex flex-col items-center w-1/3">
                    <Image src="/IMG_0021.jpg" width={1000} height={1000} />
                    <h3>image title</h3>
                </div>
                <div className="flex flex-col items-center w-1/3">
                    <Image src="/rug_tuft.jpeg" width={1000} height={1000} />
                    <h3>image title</h3>
                </div>
                <div className="flex flex-col items-center w-1/3">
                    <Image src="/IMG_0023.jpg" width={1000} height={1000} />
                    <h3>image title</h3>
                </div>
            </section>
            {/* If the screen is a  tablet or laptop display 5 images in a row */}
            <section className="h-full hidden tablet:flex laptop:flex flew-wrap tablet:justify-between w-full border">
                <div className="flex flex-col items-center w-1/5">
                    <Image src="/IMG_0021.jpg" width={1000} height={1000} />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5">
                    <Image src="/IMG_0022.jpg" width={1000} height={1000} />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5">
                    <Image src="/IMG_0023.jpg" width={1000} height={1000} />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5">
                    <Image src="/IMG_0022.jpg" width={1000} height={1000} />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5">
                    <Image src="/IMG_0023.jpg" width={1000} height={1000} />
                    <h3>image title</h3>
                </div>
            </section>
            {/* if the screen is a desktop display 6 images in a row  */}
            <section className="h-full hidden desktop:flex flex-wrap gap-2 desktop:justify-around w-full border">
                <div className="flex flex-col items-center w-1/5 p-4 border mt-[5%]">
                    <Image src="/IMG_0021.jpg" width={1000} height={1000} />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5 p-4 border mt-[5%]">
                    <Image src="/IMG_0022.jpg" width={1000} height={1000} />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5 p-4 border mt-[5%]">
                    <Image src="/IMG_0023.jpg" width={1000} height={1000} />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5 p-4 border mt-[5%]">
                    <Image src="/IMG_0022.jpg" width={1000} height={1000} />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5 p-4 border mt-[5%]">
                    <Image src="/IMG_0023.jpg" width={1000} height={1000} />
                    <h3>image title</h3>
                </div>

                <div className="flex flex-col items-center w-1/5 p-4 border mt-[5%]">
                    <Image src="/IMG_0023.jpg" width={1000} height={1000} />
                    <h3>image title</h3>
                </div>
            </section>
        </div>
    );
}
