import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicMapContainer = dynamic(
    () => import("react-leaflet").then((mod) => mod.MapContainer),
    {
        ssr: false // This ensures that the component is only rendered on the client side
    }
);

const MapComponent = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Render nothing on the server side
    }

    // Conditionally import leaflet and its components only on the client side
    const L = require("leaflet");
    const { TileLayer, Marker, Popup } = require("react-leaflet");

    const customIcon = new L.Icon({
        iconUrl: "/neon_heart.jpg", // Adjust the icon URL as per your file structure
        iconSize: [50, 50],
        iconAnchor: [25, 25]
    });

    return (
        <DynamicMapContainer
            center={[32.331528, -86.243504]}
            zoom={18}
            style={{ height: "30vh", width: "100%" }}
            className="z-5"
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[32.331528, -86.243504]} icon={customIcon}>
                <Popup>
                    TUTUFT, LLC <br /> Home for your art designs.
                </Popup>
            </Marker>
        </DynamicMapContainer>
    );
};

export default MapComponent;
