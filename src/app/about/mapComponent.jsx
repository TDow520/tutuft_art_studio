import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import dynamic from "next/dynamic";

const DynamicMapContainer = dynamic(
    () => import("react-leaflet").then((mod) => mod.MapContainer),
    {
        ssr: false // This ensures that the component is only rendered on the client side
    }
);

const customIcon = new L.Icon({
    iconUrl: "/neon_heart.",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
});

const MapComponent = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Render nothing on the server side
    }



    return (
        <DynamicMapContainer
            center={[32.331528, -86.243504]}
            zoom={18}
            style={{ height: "30vh", width: "100%" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[32.331528, -86.243504]}>
                <Popup>
                    TUTUFT, LLC <br /> Home for your art designs.
                </Popup>
            </Marker>
        </DynamicMapContainer>
    );
};

export default MapComponent;
