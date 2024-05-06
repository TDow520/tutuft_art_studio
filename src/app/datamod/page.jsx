'use client';

import React, { useState, useEffect } from "react";

export default function EventMod() { 
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/events") // Ensure this matches your actual API endpoint
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

    // dispaly the events
    return (
        <div className="w-full">
            <h1>Events</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="flex flex-wrap w-full border gradient-text">
                    {events.map((event) => (
                        <li
                            key={event.event_id}
                            className="flex flex-wrap w-full m-1 border border-double font-bold"
                        >
                            <p className="w-1/6">{event.event_id}</p>
                            <p className="w-1/6">{event.title}</p>
                            <p className="w-1/6">Date: {event.date}</p>
                            {/* convert event time from 18:00:00 to 6:00 pm */}

                            <p className="w-1/6">Time: {event.time}</p>
                            <p className="w-1/6">
                                Slots available: {event.slot}
                            </p>
                            <p className="w-1/6">Price: ${event.price}</p>
                            <div className="flex flex-row w-full my-4">
                                Description:
                                <p className="ml-3 text-left">{event.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};