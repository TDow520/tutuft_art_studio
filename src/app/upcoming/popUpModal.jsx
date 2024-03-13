import React from "react";
import Image from "next/image";

// fill out the popup modal with data from the event information
const eventModal = ({ event, visible, onClose }) => {
    console.log(`event: ${event.title}`);
    if (visible) {
        // get the event that is being clicked on

        return (
            <div className="fixed top-0 left-0 w-full h-full flex bg-opacity-1 items-center justify-center overflow-y-auto ">
                <div className="bg-emerald-200 p-2 w-[55%] h-[55%] overflow-y-auto rounded-xl text-yellow-700 font-bold text-xl text-center">
                    {event && (
                        <div className="flex flex-col items-center mt-[5%] cursor-pointer">
                            <Image
                                src={event.imageSrc}
                                alt=""
                                width={150}
                                height={150}
                                onClick={() => showModal(event)}
                                className=" hover:drop-shadow-2xl rounded-md"
                            />
                            <p className="underline">{event.title}</p>
                        </div>
                    )}
                    <h3>Time: 6:00pm - 8:00pm</h3>
                    {/* <p>
                            Location: 3447 Mcgehee Rd Suite N <br></br>
                            MONTGOMERY, Alabama 36111
                        </p> */}
                    <br />
                    <p>Cost: $25</p>
                    <p>Supplies: Provided</p>
                    <p>Age: 18+</p>
                    <p>Available Slots: 10/{event.slots}</p>
                    <button
                        className="rounded-md bg-blue-500 w-[50%] text-white"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    };
    return null;
};


export default eventModal;