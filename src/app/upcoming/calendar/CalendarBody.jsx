"use client";

import React, { useState, useEffect } from "react";
import Day from "./CalendarDays";

const CalendarBody = ({ currentMonthIndex, currentYear, displayDays = () => [] }) => {
    const [daysOfWeek, setDaysOfWeek] = useState([]);
    const [shortDays, setShortDays] = useState([]);

    // Full version of days
    useEffect(() => {
        fetch("/daysOfWeek.json")
            .then(response => response.json())
            .then(data => {
                const days = data.map(item => Object.values(item)[0]);
                setDaysOfWeek(days);
                console.log("daysOfWeek", days); // Logs right after setting state
            });
    }, []); // Empty dependency array means this runs only on component mount

    // Short version of days
    useEffect(() => {
        fetch("/shortDays.json")
            .then(response => response.json())
            .then(data => {
                const days = data.map(item => Object.values(item)[0]);
                setShortDays(days);
                console.log("shortDays", days); // Logs right after setting state
            });
    }, []); // Same here, runs only on component mount

    return (
        <>
            <div className="days-of-week flex flex-row w-full">
                {daysOfWeek.map((day, index) => (
                    <React.Fragment key={day}>
                        <div className="mx-2 py-2 w-[26%] bg-gold-300 text-black text-center font-bold md:block">
                            {day}
                        </div>
                        <div className="mx-2 py-2 w-[25%] bg-gold-300 text-black text-center font-bold laptop:hidden">
                            {shortDays[index]}
                        </div>
                    </React.Fragment>
                ))}
            </div>
            {displayDays().map((week, weekIndex) => (
                <div key={weekIndex} className="week flex flex-row w-full font-semibold">
                    {week.map((day, dayIndex) => (
                        <Day key={`${weekIndex}-${dayIndex}`} date={`${currentYear}-${currentMonthIndex + 1}-${day}`} day={day} />
                    ))}
                </div>
            ))}
        </>
    );
};

export default CalendarBody;
