import React, { useState, useEffect } from "react";
import EventImage from "./EventImg";

const Day = ({ date, day }) => {
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        fetch("/events.json")
            .then(response => response.json())
            .then(data => setEvents(data));
    }, []); // Empty dependency array means this effect runs once after the initial render

    // Filter the events for the current day
    const eventsForDay = events.filter((event) => event.date === date);
    
    // put a red border around todays date


    return (
        <div className="day m-2 pb-[5%] w-[14.29%] bg-emerald-700 bg-opacity-50 text-slate-200 ">
            <div
                // If the view is in phone view then only use the abbrv version of the days

                className="day-number bg-slate-400 w-[100%] text-left "
                style={
                    day === "Saturday" || day === "Sunday"
                        ? { color: "red" }
                        : { color: "black" }
                }
            >
                {day}
            </div>
            <div className="events">
                {/* if the event  date is = to the current date month then display the evnt image */}
                {<EventImage date={date} events={eventsForDay} />}
            </div>
        </div>
    );
};

export default Day;
