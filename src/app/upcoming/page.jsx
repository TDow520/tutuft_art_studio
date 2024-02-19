"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    const date = new Date();
    // Initialize currentMonth with the index of the current month (date.getMonth())
    // it will also display the current year
    const [currentMonthIndex, setCurrentMonthIndex] = useState(date.getMonth());
    const [currentYear, setCurrentYear] = useState(date.getFullYear());

    let year = date.getFullYear();

    const handlePrevMonth = () => {
        setCurrentMonthIndex((prevMonth) =>
            prevMonth === 0 ? 11 : prevMonth - 1
        );
        if (currentMonthIndex === 0) {
            setCurrentYear((prevYear) => prevYear - 1);
        }
    };

    const handleNextMonth = () => {
        setCurrentMonthIndex((prevMonth) =>
            prevMonth === 11 ? 0 : prevMonth + 1
        );
        if (currentMonthIndex === 11) {
            setCurrentYear((prevYear) => prevYear + 1);
        }
    };

    useEffect(() => {
        // Use currentMonthIndex to access the month name from the months array
        setCurrentMonth(`${months[currentMonthIndex]} ${currentYear}`);
    }, [currentMonthIndex, currentYear]);

    // Initialize currentMonth state with the name of the current month
    const [currentMonth, setCurrentMonth] = useState(
        `${months[currentMonthIndex]} ${currentYear}`
    );

    // a function to get teh days for each month
    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    // Get the first day of the month
    function firstDayOfMonth(month, year) {
        return new Date(month, year, 1).getDay();
    }

    // Get the last day of the month
    function lastDayOfMonth(month, year) {
        return new Date(year, month + 1, 0).getDay ();
    }

    // Add empty cells for days before the first day of the month taht are greyed out
    const generateDaysArray = (month, year) => {
        const days = getDaysInMonth(month, year);
        const firstDay = firstDayOfMonth(month, year);
        const lastDay = lastDayOfMonth(month, year);
        const daysArray = [];

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
    // An array to hold the days of the week
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const daysArray = generateDaysArray(currentMonthIndex, currentYear);

    //loop through the days of the month and group them into 7 days per row
    const dayRows = [];
    for (let i = 0; i < daysArray.length; i += 7) {
        dayRows.push(daysArray.slice(i, i + 7));
    }

    return (
        <div className="flex border border-black tablet:h-[86.25vh] desktop:h-[91vh]">
            {/* <div className="flex flex-col border border-violet-700 phone:h-[15vh] tablet:h-[25vh]">
                <Image
                    src="/heart_tree.jpeg"
                    alt=""
                    layout="responsive"
                    width={100}
                    height={100}
                />
            </div> */}
            <div className="flex flex-col border border-double border-blue-800 mx-auto phone:h-[81vh] tablet:h-[75vh] h-[95vh]">
                <div className="flex border border-dashed border-white bg-red-500 justify-between ">
                    <button
                        onClick={handlePrevMonth}
                        className=" border border-dashed border-red-700 mr-[2%]"
                    >
                        Prev Month <br /> &lt;&lt;
                    </button>

                    <div className="text-center my-auto font-bold w-[25vw] text-2xl">
                        {currentMonth}
                    </div>

                    <button
                        onClick={handleNextMonth}
                        className="border border-dashed border-red-700 ml-[2%]"
                    >
                        Next Month <br /> &gt;&gt;
                    </button>
                </div>
                <div>
                    <div className="flex border border-dashed border-white w-[100%] justify-evenly">
                        {daysOfWeek.map((day, index) => (
                            <div
                                key={index}
                                className="border border-double phone:p-[1.5vw] tablet:px-[5vw] laptop:p-[3vw] border-gray-500 "
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                    {dayRows.map((row, index) => (
                        <div
                            key={index}
                            className="flex border border-dashed border-white w-[100%] h-[12vh]"
                        >
                            {row.map((day, index) => (
                                <div
                                    key={index}
                                    className="border border-double phone:w-[12vw] w-[13.5vw] border-white bg-blue-200 text-white hover:drop-shadow-2xl hover:bg-slate-200"
                                >
                                    <div className="border border-red-500 bg-slate-500 ">
                                        {/* this will show the date as a label header */}
                                        {day !== null ? day : ""}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}