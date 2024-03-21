import React from "react";
import EventImage from "./EventImg";

const Day = ({ date, day}) => {
    // Mock events data
    const events = [
        {
            date: "2024-2-2",
            title: "Rug Tufting",
            slots: 20
        },
        {
            date: "2024-2-9",
            title: "Paint 'n' Sip",
            slots: 20
        },
        {
            date: "2024-2-16",
            title: "Rug Tufting",
            slots: 20
        },
        {
            date: "2024-2-14",
            title: "Rug Tufting",
            slots: 20
        },
        {
            date: "2024-3-14",
            title: "Paint 'n' Sip",
            slots: 20
        },
        {
            date: "2024-4-2",
            title: "Rug Tufting",
            slots: 20
        },
        {
            date: "2024-4-9",
            title: "Paint 'n' Sip",
            slots: 25
        },
        {
            date: "2024-4-16",
            title: "Rug Tufting",
            slots: 15
        },
        {
            date: "2024-5-14",
            title: "Rug Tufting",
            slots: 20
        },
        {
            date: "2024-3-14",
            title: "Paint 'n' Sip",
            slots: 12
        }
    ];

    // Filter events for the current day
    const eventsForDay = events.filter((event) => event.date === date);

    return (
        <div className="day border border-double border-purple-700  pb-[5%] w-[14.29%] bg-green-300 text-white ">
            <div
                className="day-number bg-gray-200 w-[100%] text-left "
                style={
                    day === "Sat" || day === "Sun"
                        ? { color: "red" }
                        : { color: "black" }
                }
            >
                {day}
            </div>
            <div className="events">
                {/* if the event  date is = to the current date month then display the evnt image */}
                {
                    <EventImage date={date} events={eventsForDay} />

                }
            </div>
        </div>
    );
}

export default Day;
