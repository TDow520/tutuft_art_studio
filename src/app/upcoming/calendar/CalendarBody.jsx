import React from "react";
import Day from "./CalendarDays";

function CalendarBody({ currentMonthIndex, currentYear, displayDays, showModal }) {
    // Array of days of the week
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return (
        <>
            <div className="days-of-week flex flex-row w-[100%]">
                {daysOfWeek.map((day) => (
                    <div
                        className="border border-double border-purple-700 py-[2%] w-[14.29%] bg-yellow-200 text-black text-center font-bold"
                        key={day}
                    >
                        {day}
                    </div>
                ))}
            </div>

            {displayDays().map((week, weekIndex) => (
                <div
                    key={weekIndex}
                    className="week flex flex-row w-[100%] font-semibold"
                >
                    {week.map((day, dayIndex) => (
                        <Day
                            key={dayIndex}
                            date={`${currentYear}-${currentMonthIndex + 1}-${day}`}
                            day={day}
                            showModal={showModal}
                        />
                    ))}
                </div>
            ))}
        </>
    );
}

export default CalendarBody;
