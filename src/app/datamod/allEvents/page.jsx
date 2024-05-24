"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

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
        <div className="text-container">
            <h1 className="bg-black rounded-[5px] text-5xl">Events</h1>
            <ul className="flex flex-wrap w-full border">
                {events.map((event) => (
                    <li
                        key={event.event_id}
                        className="flex flex-wrap w-full m-1 border border-double font-bold"
                    >
                        <p className="w-[14.2857%] phone:w-[25%]">
                            {event.event_id}
                        </p>
                        <p className="w-[14.2857%] phone:w-[25%]">
                            {event.pic.name}
                        </p>
                        <p className="w-[14.2857%] phone:w-[25%]">
                            Date: {event.date}
                        </p>
                        <p className="w-[14.2857%] phone:w-[25%]">
                            Time: {convertTime(event.start)} -{" "}
                            {convertTime(event.end)}
                        </p>
                        <p className="w-[14.2857%] phone:w-[25%]">
                            Available: {event.available}
                        </p>
                        <p className="w-[14.2857%] phone:w-[25%]">
                            Slots: {event.slot}
                        </p>
                        <p className="w-[14.2857%] phone:w-[25%]">
                            Price: ${event.price}
                        </p>
                        <div className="flex flex-wrap w-full my-4 justify-center">
                            Description:
                            <p className="ml-3 text-left w-[50%]">
                                {event.description}
                            </p>
                            <Image
                                src={event.pic.url}
                                alt={event.pic.name}
                                width={175}
                                height={175}
                            />
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
            <form action="/submit" method="get" className="text-black">
                <section className="my-7 border w-[75%] phone:w-[90%] mx-auto bg-slate-500/50">
                    <p className="text-white font-bold text-xl">Add a new event</p>
                    <div className="flex flex-wrap phone:flex-col justify-center">
                          <div className="flex m-7 gap-x-5">
                            <label htmlFor="eventTitle"> Title:</label>
                            <input
                                type="text"
                                id="eventTitle"
                                name="eventTitle"
                            />
                        </div>

                        <div className="flex m-7 gap-x-5">
                            <label htmlFor="eventDate"> Date:</label>
                            <input
                                type="date"
                                id="eventDate"
                                name="eventDate"
                            />
                        </div>

                        <div className="flex m-7 gap-x-5">
                            <label htmlFor="eventTime"> Time:</label>
                            <input
                                type="time"
                                id="eventTime"
                                name="eventTime"
                            />
                        </div>

                        <div className="flex m-7 gap-x-5">
                            <label htmlFor="eventAvailable">Available:</label>
                            <input
                                type="number"
                                id="eventAvailable"
                                name="eventAvailable"
                                className="w-[25%]"
                            />
                        </div>

                        <div className="flex m-7 gap-x-5">
                            <label htmlFor="eventSlots"> Slots:</label>
                            <input
                                type="number"
                                id="eventSlots"
                                name="eventSlots"
                                className="w-[25%]"
                            />
                        </div>

                        <div className="flex m-7 gap-x-5">
                            <label htmlFor="eventPrice"> Price:</label>
                            <input
                                type="number"
                                step="0.01"
                                min="0"
                                placeholder="0.00"
                                id="eventPrice"
                                name="eventPrice"
                                className="w-[25%]"
                            />
                        </div>

                        <div className="flex m-7 phone:m-5 gap-x-5">
                            <label htmlFor="eventImage"> Image:</label>
                            <input
                                type="file"
                                id="eventImage"
                                name="eventImage"
                                accept="image/jpeg, image/png, image/jpg"
                            />
                        </div>

                        <div className="flex m-4 gap-x-5 w-[75%] h-[10vh] ">
                            <label htmlFor="eventDescription">Description:</label>
                            <input
                                type="text"
                                id="eventDescription"
                                name="eventDescription"
                                className="w-full h-[100%]"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-10 mb-5 rounded-[5px] bg-slate-300/70 w-[25%]"
                    >
                        Submit
                    </button>
                </section>
            </form>
        </div>
    );
}
