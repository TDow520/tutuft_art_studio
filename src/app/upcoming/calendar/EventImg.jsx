"use client";

import React, { useState } from "react";
import Image from "next/image";
import EventModal from "../popUpModal";

const EventImage = ({ date, events }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [popUpVisible, setPopUpVisible] = useState(false);

    // New function to handle image clicks
    const showModal = (event) => {
        console.log("Event clicked:", event);
        setSelectedEvent(event);
        setPopUpVisible(true);
    };

    // console.log("Evnets:",events);
    const displayEventImg = () => {
        const images = [];
        const filteredEvents = events.filter((event) => {
            // console.log("event.date", event.date)
            // console.log("date", date)
            return event.date === date
        });
        // console.log("filteredEvents", filteredEvents)

        
        filteredEvents.forEach((event, index) => {
            if (event.date === date) {
                // console.log("event title", event.pic.name);
                switch (event.pic.name) {
                    case "Rug Tufting":
                        images.push(
                            <div
                                key={`${date}-${index}`}
                                className="event-image-item flex flex-col items-center mt-[5%] text-sm"
                            >
                                <Image
                                    src={event.pic.url}
                                    alt="Rug Tufting"
                                    width={150}
                                    height={150}
                                    onClick={() => showModal(event)}
                                    className="hover:drop-shadow-2xl rounded-md"
                                />
                                <p className="underline phone:hidden phone_land:hidden">
                                    Rug Tufting
                                </p>
                            </div>
                        );
                        break;
                    case "Paint-n-Sip":
                        images.push(
                            <div
                                key={`${date}-${index}`}
                                className="event-image-item flex flex-col items-center mt-[5%]"
                            >
                                <Image
                                    src="/paint-n-sip.jpeg"
                                    alt="Paint 'n' Sip"
                                    width={150}
                                    height={150}
                                    onClick={() => showModal(event)}
                                    className="hover:drop-shadow-2xl rounded-md cursor-pointer"
                                />
                                <p className="underline phone:hidden phone_land:hidden">
                                    Paint &apos;n&apos; Sip
                                </p>
                            </div>
                        );
                        break;
                    case "Candle Making":
                        images.push(
                            <div
                                key={`${date}-${index}`}
                                className="event-image-item flex flex-col items-center mt-[5%]"
                            >
                                <Image
                                    src="/candles.jpeg"
                                    alt="Candle Making"
                                    width={150}
                                    height={150}
                                    onClick={() => showModal(event)}
                                    className="hover:drop-shadow-2xl rounded-md cursor-pointer"
                                />
                                <p className="underline phone:hidden phone_land:hidden">
                                    Candle Making
                                </p>
                            </div>
                        );
                        break;
                    case "Perfume Making":
                        images.push(
                            <div
                                key={`${date}-${index}`}
                                className="event-image-item flex flex-col items-center mt-[5%]"
                            >
                                <Image
                                    src="/perfumes.jpeg"
                                    alt="Perfume Making"
                                    width={150}
                                    height={150}
                                    onClick={() => showModal(event)}
                                    className="hover:drop-shadow-2xl rounded-md cursor-pointer"
                                />
                                <p className="underline phone:hidden phone_land:hidden">
                                    Perfume Making
                                </p>
                            </div>
                        );
                        break;
                    default:
                        return null;
                }
            }
        });
        return images;
    };

    return (
        <div className="event-images">
            {displayEventImg()}
            {selectedEvent && (
                <EventModal
                    event={selectedEvent}
                    visible={popUpVisible}
                    onClose={() => setPopUpVisible(false)}
                />
            )}
        </div>
    );
};

export default EventImage;
