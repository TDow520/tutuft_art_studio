"use client"

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const [slideShow, setSlideShow] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // a useEffect to handl ethe resizing of the carousel when in mobile version
    useEffect(() => {
        const updateSlideShow = () => {
            setSlideShow(window.innerWidth < 1000 ? 1 : 3);
        };
        updateSlideShow();
        window.addEventListener("resize", updateSlideShow);

        return () => window.removeEventListener("resize", updateSlideShow);
    });

    const imgs = [
        {
            src: "/rug_tuft2.jpeg",
            alt: "First slide",
            width: 1000,
            height: 500
        },
        {
            src: "/neon_heart.jpg",
            alt: "Second slide",
            width: 700,
            height: 1200
        },
        {
            src: "/paint-n-sip.jpeg",
            alt: "Third slide",
            width: 600,
            height: 500
        },
        {
            src: "/rug_tuft.jpeg",
            alt: "Fourth slide",
            width: 1000,
            height: 500
        },
        {
            src: "/IMG_0021.jpg",
            alt: "Fifth slide",
            width: 1000,
            height: 1000
        },
        {
            src: "/IMG_0022.jpg",
            alt: "Sixth slide",
            width: 1000,
            height: 1000
        },
        {
            src: "/IMG_0023.jpg",
            alt: "Seventh slide",
            width: 1000,
            height: 1000
        },
        {
            src: "/IMG_0026.jpg",
            alt: "Eighth slide",
            width: 1000,
            height: 1000
        },
        {
            src: "/IMG_0027.jpg",
            alt: "Ninth slide",
            width: 1000,
            height: 1000
        },
        {
            src: "/perfumes.jpeg",
            alt: "Tenth slide",
            width: 1000,
            height: 1000
        },
        {
            src: "/candles.jpeg",
            alt: "Eleventh slide",
            width: 1000,
            height: 1000
        }
    ];

    const carouselImg = () => {
        return imgs.map((image, index) => {
            return <div key={index} className="flex flex-col items-center justify-center px-1">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                />
                <div>
                </div>
            </div>
        })
    };

    return (
        <div className="phone:w-[85%] w-[75%] laptop:block desktop:block bg-slate-400 bg-opacity-10">
            <Slider
                autoplay
                autoplaySpeed={3000}
                dots
                infinite
                speed={500}
                slidesToShow={slideShow}
                slidesToScroll={1}

            >
                {carouselImg()}
                
            </Slider>
        </div>
    );
};

export default Carousel;
