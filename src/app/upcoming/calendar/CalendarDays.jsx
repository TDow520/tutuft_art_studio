import React, { useState, useEffect } from "react";
import EventImage from "./EventImg";

const Day = ({ date, day }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("/api/events") // Ensure this matches your actual API endpoint
            .then((response) => response.json())
            .then((data) => {
                // console.log("Data fetched from API:", data);
                setEvents(data);
            })

            .catch((error) => {
                console.error("Error fetching events:", error);

            });
    }, []); // Empty dependency array means this effect runs once after the initial render
    
    // console.log("Rendered date:", date);

    // Function to format the date
    function formatDate(dateString) {
        const date = new Date(dateString);
        let month = "" + (date.getMonth() + 1);
        let day = "" + date.getDate();
        const year = date.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("-");
    }
    // Filter the events for the current day
    const eventsForDay = events.filter((event) => {
        return event.date == formatDate(date);

    });

    // console.log("Events for day:", eventsForDay);

    return (
        <div className="day m-1 pb-[5%] w-[17.29%] bg-emerald-700 bg-opacity-50 text-slate-200 ">
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
                {<EventImage date={formatDate(date)} events={eventsForDay} />}
            </div>
        </div>
    );
};

export default Day;
