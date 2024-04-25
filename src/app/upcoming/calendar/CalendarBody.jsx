import React, { useState, useEffect} from "react";
import Day from "./CalendarDays";

const CalendarBody = ({currentMonthIndex, currentYear, displayDays = () => []}) => {
    const [daysOfWeek, setDaysOfWeek] = useState([]);

    // Full version of days
    useEffect(() => {
        fetch("/daysOfWeek.json")
            .then((response) => response.json())
            .then((data) => {
                const days = data.map(item => Object.values(item)[0]);
                setDaysOfWeek(days);
            });
            console.log("daysOfWeek", daysOfWeek);
    }, []);

    // Short version of days
    const [shortDays, setShortDays] = useState([]);

    useEffect(() => {
        fetch("/shortDays.json")
            .then((response) => response.json())
            .then((data) => {
                const days = data.map((item) => Object.values(item)[0]);
                setShortDays(days);
            }); 
            console.log("shortDays", shortDays);
    }, []);


    return (
        <>
            <div className="days-of-week flex flex-row w-full">
                {daysOfWeek.map((day, index) => (
                    <React.Fragment key={day}>
                        {/* Full day name shown on larger screens, hidden on smaller */}
                        <div className="mx-2 py-2 w-[26%] bg-gold-300 text-black text-center font-bold phone_land:hidden phone:hidden tablet:hidden md:block">
                            {day}
                        </div>
                        {/* Short day name shown on smaller screens */}
                        <div className="phone:mx-[1%] mx-2 py-2 w-[25%] bg-gold-300 text-black text-center font-bold laptop:hidden desktop:hidden">
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
