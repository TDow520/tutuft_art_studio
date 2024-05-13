import React, { useState, useEffect } from "react";
import EventImage from "./EventImg";
import { format, isValid, parseISO } from "date-fns";

const Day = ({ date, day }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("/api/events/", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        
            .then((response) => response.json())
            .then((data) => {
                // console.log("Data fetched from API:", data);
                setEvents(data);
            })

            .catch((error) => {
                console.error("Error fetching events:", error);

            });
    }, []); // Empty dependency array means this effect runs once after the initial render
    
    // console.log("Events:", events);

    // Function to format the date
    function formatDate(dateString) {
        if (!dateString || dateString.split('-').length < 1) {
            console.log("Received an incomplete date: ", dateString);
            return null;
        }
        const [year, month, day] = dateString.split('-');

        //pad the month and day with 0 if they are less than 10
        const formattedMonth = month.length === 1 ? `0${month}` : month;
        const formattedDay = day.length === 1 ? `0${day}` : day;

        const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;

        const parseDate = parseISO(formattedDate);
        if (!isValid(parseDate)) { 
            console.log("Parsed an Invalid date: ", dateString);
            return null;
        }

        return format(parseDate, "yyyy-MM-dd");
    }

    // Filter the events for the current day
    const eventsForDay = events.filter((event) => {
        console.log("Event date:", event.date);
        console.log("Formatted date:", formatDate(date));
        // typeof data  for should be a string
        if (typeof event.date === "string") {
            console.log("Event date is a string");
        }
        if (typeof formatDate(date) === "string") {
            console.log("Formatted date is a string");
        }

        return event.date === formatDate(date);
    });
    // console.log("Events:", events);
    // console.log("Events for day:", eventsForDay);
    // console.log("Day:", day);
    

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
