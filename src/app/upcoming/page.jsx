"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Calendar from "./calendar/page";

const Upcoming = () => {
    // Get current date
    const date = new Date();
    const [currentMonthIndex, setCurrentMonthIndex] = useState(date.getMonth());
    const [currentYear, setCurrentYear] = useState(date.getFullYear());

    // Handler for moving to previous month
    const handlePrevMonth = () => {
        const newMonthIndex = currentMonthIndex === 0 ? 11 : currentMonthIndex - 1;
        const newYear = currentMonthIndex === 0 ? currentYear - 1 : currentYear;
        setCurrentMonthIndex(newMonthIndex);
        setCurrentYear(newYear);
    };

    // Handler for moving to next month
    const handleNextMonth = () => {
        const newMonthIndex = currentMonthIndex === 11 ? 0 : currentMonthIndex + 1;
        const newYear = currentMonthIndex === 11 ? currentYear + 1 : currentYear;
        setCurrentMonthIndex(newMonthIndex);
        setCurrentYear(newYear);
    };

        // setCurrentMonthIndex((nextMonth) =>
        //     nextMonth === 11 ? 0 : nextMonth + 1
        // );
        // if (currentMonthIndex === 11) {
        //     setCurrentYear((nextYear) => nextYear + 1);
        // }

    // Get number of days in the month
    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    // Get the first day of the month
    const firstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    // Get the last day of the month
    const lastDayOfMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDay();
    };

    // Function to generate array of days for the current month
    const generateDaysArray = (month, year) => {
        const days = getDaysInMonth(month, year);
        const firstDay = firstDayOfMonth(month, year);
        const lastDay = lastDayOfMonth(month, year);
        let daysArray = [];

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            daysArray.push("");
        }

        // Add the days of the month
        for (let i = 1; i <= days; i++) {
            daysArray.push(i);
        }

        // Add empty cells for days after the last day of the month to complete the last week
        for (let i = 0; i < 6 - lastDay; i++) {
            daysArray.push("");
        }

        return daysArray;
    };

    // Generate days array for the current month
    const monthDays = generateDaysArray(currentMonthIndex, currentYear);

    // display days of the month in 7 days per row
    const displayDays = () => {
        let days = [];
        let week = [];
        // adds the images for the event that are being held that day
        monthDays.forEach((day, index) => {
            if (index % 7 === 0 && index !== 0) {
                days.push(week);
                week = [];
            }
            week.push(day);
        });
        days.push(week);
        return days;
    };

    return (
        <div className="items-center w-[80%]">
            <div className="flex flex-col  w-full">
                {/* Calendar display */}
                <div className="flex border border-violet-700 w-full phone:h-[20.5%] tablet:h-[18.5%] laptop:h-[15%]">
                    <Image
                        src="/heart_tree.jpeg"
                        alt=""
                        layout="responsive"
                        width={100}
                        height={100}
                    />
                </div>
                <Calendar
                    currentMonthIndex={currentMonthIndex}
                    currentYear={currentYear}
                    handlePrevMonth={handlePrevMonth}
                    handleNextMonth={handleNextMonth}
                    displayDays={displayDays}
                />
            </div>
        </div>
    );
};

export default Upcoming;
