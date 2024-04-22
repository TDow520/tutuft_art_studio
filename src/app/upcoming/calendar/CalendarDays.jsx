import React from "react";
import EventImage from "./EventImg";

const Day = ({ date, day}) => {
    // Mock events data
    const events = [
        {
            id: 1,
            date: "2024-5-2",
            title: "Rug Tufting",
            slots: 20,
            available: 10,
            price: 45,
            time: "6:15 - 8:00 PM"
        },
        {
            id: 2,
            date: "2024-5-9",
            title: "Paint 'n' Sip",
            slots: 20,
            available: 10,
            price: 25,
            time: "6:00 - 8:00 PM"
        },
        {
            id: 3,
            date: "2024-5-16",
            title: "Rug Tufting",
            slots: 20,
            available: 10,
            price: 45,
            time: "6:15 - 8:00 PM"
        },
        {
            id: 4,
            date: "2024-5-14",
            title: "Rug Tufting",
            slots: 20,
            available: 10,
            price: 45,
            time: "6:15 - 8:00 PM"
        },
        {
            id: 5,
            date: "2024-3-14",
            title: "Paint 'n' Sip",
            slots: 20,
            available: 10,
            price: 25
        },
        {
            id: 6,
            date: "2024-4-2",
            title: "Rug Tufting",
            slots: 20,
            available: 10,
            price: 45,
            time: "6:15 - 8:00 PM"
        },
        {
            id: 7,
            date: "2024-4-9",
            title: "Paint 'n' Sip",
            slots: 25,
            available: 10,
            price: 25,
            time: "6:00 - 8:00 PM"
        },
        {
            id: 8,
            date: "2024-4-16",
            title: "Rug Tufting",
            slots: 15,
            available: 10,
            price: 45,
            time: "6:15 - 8:00 PM"
        },
        {
            id: 9,
            date: "2024-5-14",
            title: "Paint 'n' Sip",
            slots: 20,
            available: 10,
            price: 45,
            time: "6:15 - 8:00 PM"
        },
        {
            id: 10,
            date: "2024-3-14",
            title: "Paint 'n' Sip",
            slots: 12,
            available: 10,
            price: 25,
            time: "6:00 - 8:00 PM"
        }
    ];

    // Filter events for the current day
    const eventsForDay = events.filter((event) => event.date === date);

    return (
        <div className="day border border-double border-violet-800  pb-[5%] w-[14.29%] bg-emerald-400 text-slate-200 ">
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
}

export default Day;
