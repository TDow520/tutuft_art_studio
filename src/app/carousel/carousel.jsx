"use client"

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="border border-dashed border-red-600 w-[75%] hidden laptop:block desktop:block">
            <Slider
                autoplay
                autoplaySpeed={3000}
                dots
                infinite
                speed={500}
                slidesToShow={3}
                slidesToScroll={1}
            >
                <div className="flex flex-col items-center justify-center border border-dotted border-blue-800">
                    <Image
                        src="/rug_tuft2.jpeg"
                        alt="First slide"
                        width={1000}
                        height={500}
                    />
                    <div>
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border border-dotted border-blue-800">
                    <Image
                        src="/neon_heart.jpg"
                        alt="Second slide"
                        width={700}
                        height={1200}
                    />
                    <div>
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border border-dotted border-blue-800">
                    <Image
                        src="/paint-n-sip.jpeg"
                        alt="Third slide"
                        width={600}
                        height={500}
                    />
                    <div>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border border-dotted border-blue-800">
                    <Image
                        src="/rug_tuft.jpeg"
                        alt="Fourth slide"
                        width={1000}
                        height={500}
                    />
                    <div>
                        <h3>Fourth slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border border-dotted border-blue-800">
                    <Image
                        src="/IMG_0021.jpg"
                        alt="Fifth slide"
                        width={1000}
                        height={1000}
                    />
                    <div>
                        <h3>Fifth slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border border-dotted border-blue-800">
                    <Image
                        src="/IMG_0022.jpg"
                        alt="Sixth slide"
                        width={1000}
                        height={1000}
                    />
                    <div>
                        <h3>Sixth slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border border-dotted border-blue-800">
                    <Image
                        src="/IMG_0023.jpg"
                        alt="Seventh slide"
                        width={1000}
                        height={1000}
                    />
                    <div>
                        <h3>Seventh slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border border-dotted border-blue-800">
                    <Image
                        src="/IMG_0026.jpg"
                        alt="Eighth slide"
                        width={1000}
                        height={1000}
                    />
                    <div>
                        <h3>Eighth slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border border-dotted border-blue-800">
                    <Image
                        src="/IMG_0027.jpg"
                        alt="Ninth slide"
                        width={1000}
                        height={1000}
                    />
                    <div>
                        <h3>Ninth slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
