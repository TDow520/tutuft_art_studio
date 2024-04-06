"use client";

import React, { useState } from "react";
import Image from "next/image";
import EventModal from "../popUpModal";

const EventImage = ({ date, events }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [popUpVisible, setPopUpVisible] = useState(false);

    // New function to handle image clicks
    const showModal = (event) => {
        setSelectedEvent(event);
        setPopUpVisible(true);
    };

    const displayEventImg = () => {
        const images = [];
        const filteredEvents = events.filter((event) => event.date === date);

        filteredEvents.forEach((event, index) => {
            if (event.date === date) {
                switch (event.title) {
                    case "Rug Tufting":
                        images.push(
                            <div
                                key={`${date}-${index}`}
                                className="event-image-item flex flex-col items-center mt-[5%]"
                            >
                                <Image
                                    src="/rug_tuft.jpeg"
                                    alt="Rug Tufting"
                                    width={150}
                                    height={150}
                                    onClick={() => showModal(event)}
                                    className="hover:drop-shadow-2xl rounded-md"
                                />
                                <p className="underline">Rug Tufting</p>
                            </div>
                        );
                        break;
                    case "Paint 'n' Sip":
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
                                <p className="underline">
                                    Paint &apos;n&apos; Sip
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
