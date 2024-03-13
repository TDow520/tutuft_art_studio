import React from "react";
import Image from "next/image";

function EventImage({ date, events, showModal }) {
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
                                <p className="underline">Paint 'n' Sip</p>
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

    return <div className="event-images">{displayEventImg()}</div>;
}

export default EventImage;
