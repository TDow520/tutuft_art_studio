"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
    // Array of month names
    const months = [
        "January",
        "Febraury",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    // Get current date
    const date = new Date();
    const [currentMonthIndex, setCurrentMonthIndex] = useState(date.getMonth());
    const [currentYear, setCurrentYear] = useState(date.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(
        `${months[currentMonthIndex]} ${currentYear}`
    );

    // Handler for moving to previous month
    const handlePrevMonth = () => {
        setCurrentMonthIndex((prevMonth) =>
            prevMonth === 0 ? 11 : prevMonth - 1
        );
        if (currentMonthIndex === 0) {
            setCurrentYear((prevYear) => prevYear - 1);
        }
    };

    // Handler for moving to next month
    const handleNextMonth = () => {
        setCurrentMonthIndex((prevMonth) =>
            prevMonth === 11 ? 0 : prevMonth + 1
        );
        if (currentMonthIndex === 11) {
            setCurrentYear((prevYear) => prevYear + 1);
        }
    };

    // Update currentMonth state based on currentMonthIndex and currentYear
    useEffect(() => {
        setCurrentMonth(`${months[currentMonthIndex]} ${currentYear}`);
    }, [currentMonthIndex, currentYear]);

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

    // Array of days of the week
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // Generate days array for the current month
    const daysArray = generateDaysArray(currentMonthIndex, currentYear);

    // display days of the month in 7 days per row
    const displayDays = () => {
        let days = [];
        let week = [];
        daysArray.forEach((day, index) => {
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
        <div className="flex h-[89.36vh]">
            <div className="border border-double border-blue-800 mx-[12%] w-[75vw]">
                {/* Calendar display */}
                <div className="flex border border-violet-700 sm:w-[80vw] md:w-[100%] sm:h-[20.5vh] md:h-[27.5vh]">
                    <Image
                        src="/heart_tree.jpeg"
                        alt=""
                        layout="responsive"
                        width={100}
                        height={100}
                    />
                </div>
                <table>
                    <tbody className="flex flex-col justify-center items-center">
                        {/* Month navigation */}
                        <tr className="flex justify-evenly border border-dashed border-white">
                            <td className="bg-black text-white md:pt-[1.5vh] md:pl-[.65vw] md:w-[25%]">
                                <button
                                    onClick={handlePrevMonth}
                                    className="flex w-[100%] border border-dashed border-red-700 md:text-[4vh] sm:text-sm"
                                >
                                    Prev Month &lt;&lt;
                                </button>
                            </td>
                            {/* Display current month */}
                            <td className="bg-red-600 border border-black sm:h-[17vh] md:text-[10vh] sm:text-sm  text-center pt-[5vh] font-bold w-[50%]">
                                {currentMonth}
                            </td>
                            <td className=" bg-black text-white md:pt-[1.5vh] md:pl-[.65vw] md:w-[025%]">
                                <button
                                    onClick={handleNextMonth}
                                    className="flex w-[100%] border border-dashed border-red-700 md:text-[4vh] sm:text-sm"
                                >
                                    Next Month &gt;&gt;
                                </button>
                            </td>
                        </tr>
                        {/* Days of the week */}
                        <tr className="flex flex-row w-[100%] border border-dashed border-green-400">
                            {daysOfWeek.map((day, index) => (
                                <th
                                    className="border border-double border-purple-700 py-[2%] w-[14.29%] bg-black text-white"
                                    key={index}
                                >
                                    {day}
                                </th>
                            ))}
                        </tr>
                        {/* Days of the month make each row only to have 7 days*/}
                        {/* loop through the days of the month displaying 7 days in one row until the end of the month with  */}
                        {displayDays().map((week, index) => (
                            <tr
                                key={index}
                                className="flex flex-row w-[100%] h-[] border border-dashed border-green-400"
                            >
                                {week.map((day, index) => (
                                    <td
                                        key={index}
                                        className="border border-double border-purple-700 py-[2%] w-[14.29%] bg-black text-white"
                                    >
                                        {day}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
