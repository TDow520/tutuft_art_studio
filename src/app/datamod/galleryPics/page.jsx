"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// this is a the form to insert a new pic into the gallery bucket in supabase
// This will also be a component that will be able to show the images in the gallery and allow the user to delete them
export default function GalleryMod() {
    
    // use useState to handle the images that will be displayed in the gallery
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);


    // fetch the images from the database table
    const fetchImages = async () => {
        try {
            const response = await fetch("/api/events/getPics");

            const data = await response.json();
            // console.log("Data:", data);
            setImages(data);
        } catch (err) {
            setError(err.message);
            console.error("Failed to fetch images:", err);
        }
    };;

    // useEffect to fetch the images from the database table
    useEffect(() => {
        fetchImages();
    }, []);

    // console.log("Images:", images);

    // when upload is clicked the image will be uplaoded to the bucket

    return (
        <div>
            <div className="bg-gray-600/30">
                {error && <div>Error: {error}</div>}
                {images.length === 0 ? (
                    <p>No images available.</p>
                ) : (
                    <div className="flex flew-wrap w-full p-5">
                        {images.map((image, index) => (
                            <div className="w-1/6 h-[250px]"  key={index}>
                                <div className="flex flex-col mx-2">
                                    <Image src={image.url} alt={image.name} className="h-[200px]"  width={200} height={200}/>
                                </div>
                                <button className="bg-slate-800/60 w-[80%] m-2 rounded-md">Delete</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <form className="mt-[10%] flex flex-col items-center" action="">
                <div className="flex flex-row mb-5">
                    <label className="flex my-auto" htmlFor="file">Choose a folder to store the image:</label>
                    <input className="flex mr-5" type="text" name="folder" id="folder" />
                    
                    <input className="flex my-auto" type="file" name="file" id="file" accept="image/png images/jpeg images/jpg" />
                </div>
                <button className="flex bg-gradient-radial w-[5%] justify-center rounded-[5px]" type="submit">Upload</button>
            </form>
        </div>
    );
};