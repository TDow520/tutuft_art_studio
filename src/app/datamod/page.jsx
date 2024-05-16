'use client';

import React, { useState, useEffect } from "react";

export default function EventMod() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    // convert event.start and end to 12 hour format
    const convertTime = (time) => {
        // Check if the time is in 24 hour format
        if (time.length === 8) {
            // Split the time into hours and minutes and seconds
            const [hours, minutes, seconds] = time.split(":");
            // Check if the hours is greater than 12
            if (parseInt(hours) > 12) {
                // Subtract 12 from the hours
                return `${parseInt(hours) - 12}:${minutes} PM`;
            }
            // Check if the hours is equal to 0
            if (parseInt(hours) === 0) {
                // Add 12 to the hours
                return `12:${minutes} AM`;
            }
            // Return the time in 12 hour format
            return `${hours}:${minutes} AM`;
        }
        // Return the time in 12 hour format
        return time;
    };
    // this turns time backf rom 8:00 pm to 24 hour format with seconds to be loaded back into the database
    const revertTime = (start, end, amOrPM) => {
        // get the data from the form
        // split the time into hours and minutes
        let startTime = start.split(":");
        let endTime = end.split(":");
        // check if the time is in 12 hour format
        if (amOrPM === "PM") {
            // add 12 to the hours
            startTime[0] = parseInt(startTime[0]) + 12;
            endTime[0] = parseInt(endTime[0]) + 12;
        }
        // return the time in 24 hour format
        return `${startTime[0]}:${startTime[1]}:00 - ${endTime[0]}:${endTime[1]}:00`;
    };
        

    useEffect(() => {
        fetch("/api/events")
            .then((response) => response.json())
            .then((data) => {
                console.log("Data fetched from API:", data);
                setEvents(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching events:", error);
                setLoading(false);
            });
    }, []);

 // Display the events
    return (
        <div className="w-full">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="text-container">
                    <h1 className="bg-black rounded-[5px] text-5xl">Events</h1>
                    <ul className="flex flex-wrap w-full border">
                        {events.map((event) => (
                            <li
                                key={event.event_id}
                                className="flex flex-wrap w-full m-1 border border-double font-bold"
                            >
                                <p className="w-[14.2857%]">{event.event_id}</p>
                                <p className="w-[14.2857%]">{event.pic.name}</p>
                                <p className="w-[14.2857%]">
                                    Date: {event.date}
                                </p>
                                <p className="w-[14.2857%]">
                                    Time: {convertTime(event.start)} -{" "}
                                    {convertTime(event.end)}
                                </p>
                                <p className="w-[14.2857%]">
                                    Available: {event.available}
                                </p>
                                <p className="w-[14.2857%]">
                                    Slots: {event.slot}
                                </p>
                                <p className="w-[14.2857%]">
                                    Price: ${event.price}
                                </p>
                                <div className="flex flex-row w-full my-4">
                                    Description:
                                    <p className="ml-3 text-left">
                                        {event.description}
                                    </p>
                                </div>
                                <div className="w-full mb-3">
                                    <button className="gradient_bg rounded-[5px] mx-5">
                                        Update
                                    </button>
                                    <button className="gradient_bg rounded-[5px] mx-5">
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <form
                        action="/submit"
                        method="get"
                        className="text-black"
                    >
                        <section className="my-7 border w-[75%] mx-auto bg-slate-500/50">
                            <p>Add a new event</p>
                            <div className="flex flex-wrap justify-center">
                                <div className="flex m-7 gap-x-5">
                                    <label htmlFor="inputField"> Title:</label>
                                    <input
                                        type="text"
                                        id="inputField"
                                        name="inputField"
                                    />
                                </div>

                                <div className="flex m-7 gap-x-5">
                                    <label htmlFor="inputField"> Date:</label>
                                    <input
                                        type="date"
                                        id="inputField"
                                        name="inputField"
                                    />
                                </div>

                                <div className="flex m-7 gap-x-5">
                                    <label htmlFor="inputField"> Time:</label>
                                    <input
                                        type="time"
                                        id="inputField"
                                        name="inputField"
                                    />
                                </div>

                                <div className="flex m-7 gap-x-5">
                                    <label htmlFor="inputField">

                                        Available:
                                    </label>
                                    <input
                                        type="number"
                                        id="inputField"
                                        name="inputField"
                                    />
                                </div>

                                <div className="flex m-7 gap-x-5">
                                    <label htmlFor="inputField"> Slots:</label>
                                    <input
                                        type="number"
                                        id="inputField"
                                        name="inputField"
                                    />
                                </div>

                                <div className="flex m-7 gap-x-5">
                                    <label htmlFor="inputField"> Price:</label>
                                    <input
                                        type="number"
                                        id="inputField"
                                        name="inputField"
                                    />
                                </div>

                                <div className="flex m-7 gap-x-5">
                                    <label htmlFor="inputField"> Image:</label>
                                    <input
                                        type="file"
                                        id="inputField"
                                        name="inputField"
                                    />
                                </div>

                                <div className="flex m-4 gap-x-5 w-[75%] h-[10vh] ">
                                    <label htmlFor="inputField">
                                        Description:
                                    </label>
                                    <input
                                        type="text"
                                        id="inputField"
                                            name="inputField"
                                        className="w-full h-[100%]"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="mt-10 mb-5 rounded-[5px] bg-slate-300/70 w-[25%]">
                                Submit
                            </button>
                        </section>
                    </form>
                </div>
            )}
        </div>
    );
};