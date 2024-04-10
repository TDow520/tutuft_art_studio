import React from "react";
import EventImage from "./EventImg";

const Day = ({ date, day}) => {
    // Mock events data
    const events = [
        {
            id: 1,
            date: "2024-2-2",
            title: "Rug Tufting",
            slots: 20,
            price: 45
        },
        {
            id: 2,
            date: "2024-2-9",
            title: "Paint 'n' Sip",
            slots: 20,
            price: 25
        },
        {
            id: 3,
            date: "2024-2-16",
            title: "Rug Tufting",
            slots: 20,
            price: 45
        },
        {
            id: 4,
            date: "2024-2-14",
            title: "Rug Tufting",
            slots: 20,
            price: 45
        },
        {
            id: 5,
            date: "2024-3-14",
            title: "Paint 'n' Sip",
            slots: 20,
            price: 25
        },
        {
            id: 6,
            date: "2024-4-2",
            title: "Rug Tufting",
            slots: 20,
            price: 45
        },
        {
            id: 7,
            date: "2024-4-9",
            title: "Paint 'n' Sip",
            slots: 25,
            price: 25
        },
        {
            id: 8,
            date: "2024-4-16",
            title: "Rug Tufting",
            slots: 15,
            price: 45
        },
        {
            id: 9,
            date: "2024-5-14",
            title: "Rug Tufting",
            slots: 20,
            price: 45
        },
        {
            id: 10,
            date: "2024-3-14",
            title: "Paint 'n' Sip",
            slots: 12,
            price: 25
        }
    ];

    // Filter events for the current day
    const eventsForDay = events.filter((event) => event.date === date);

    return (
        <div className="day border border-double border-purple-700  pb-[5%] w-[14.29%] bg-green-300 text-white ">
            <div
                // If the view is in phone view then only use the abbrv version of the days
                
                className="day-number bg-gray-200 w-[100%] text-left "
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
