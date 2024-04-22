import React from "react";
import Day from "./CalendarDays";

const CalendarBody = ({
    currentMonthIndex,
    currentYear,
    displayDays = () => []
}) => {
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

    // Short version of days
    const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <>
            <div className="days-of-week flex flex-row w-full border border-black">
                {daysOfWeek.map((day, index) => (
                    <React.Fragment key={day}>
                        {/* Full day name shown on larger screens, hidden on smaller */}
                        <div className="border border-double border-violet-700 py-2 w-[26%] bg-yellow-300 text-black text-center font-bold phone_land:hidden phone:hidden tablet:hidden md:block">
                            {day}
                        </div>
                        {/* Short day name shown on smaller screens */}
                        <div className="border border-double border-purple-700 py-2 w-[25%] bg-yellow-300 text-black text-center font-bold laptop:hidden desktop:hidden">
                            {shortDays[index]}
                        </div>
                    </React.Fragment>
                ))}
            </div>

            {displayDays().map((week, weekIndex) => (
                <div
                    key={weekIndex}
                    className="week flex flex-row w-full font-semibold"
                >
                    {week.map((day, dayIndex) => (
                        <Day
                            key={dayIndex}
                            date={`${currentYear}-${
                                currentMonthIndex + 1
                            }-${day}`}
                            day={day}
                        />
                    ))}
                </div>
            ))}
        </>
    );
};

export default CalendarBody;
