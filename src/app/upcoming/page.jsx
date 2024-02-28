"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
    // Array of month names
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

    // Get current date
    const date = new Date();
    const [currentMonthIndex, setCurrentMonthIndex] = useState(date.getMonth());
    const [currentYear, setCurrentYear] = useState(date.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(`${months[currentMonthIndex]} ${currentYear}`);
    const [popUpVisible, setPopUpVisible] = useState(false);


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
        setCurrentMonthIndex((nextMonth) =>
            nextMonth === 11 ? 0 : nextMonth + 1
        );
        if (currentMonthIndex === 11) {
            setCurrentYear((nextYear) => nextYear + 1);
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
        // adds the images for the event that are being held that day
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

    // a dictionary to hold the events for the month
    const events = [
        {
            date: "2024-2-2",
            event: "Rug Tufting"
        },
        {
            date: "2024-2-9",
            event: "Paint 'n' Sip"
        },
        {
            date: "2024-2-16",
            event: "Rug Tufting"
        },
        {
            date: "2024-2-14",
            event: "Rug Tufting"
        },
        {
            date: "2024-3-14",
            event: "Paint 'n' Sip"
        }
    ];

    // for each event on a certain date display the images associated with the event
    const dispalyEventImg = (date) => {
        // this holds all the images for the events on that day
        const images = [];

        events.forEach((event, index) => {
            // Modify the date format to ensure consistency with the events data yyyy-m-d
            // const formDate = `${currentYear}-${currentMonthIndex + 1}-${date}`;
            // console.log(date);
            // console.log(formDate);
            if (event.date === date) {
                switch (event.event) {
                    case "Rug Tufting":
                        images.push(
                            <div className="flex flex-col items-center mt-[5%]">
                                <Image
                                    key={`${date} - ${index}`}
                                    src="/rug_tuft.jpeg"
                                    alt=""
                                    width={150}
                                    height={150}
                                />
                                <p>Rug Tufting</p>
                            </div>
                        );
                        break;
                    case "Paint 'n' Sip":
                        images.push(
                            <div className="flex flex-col items-center mt-[5%]">
                                <Image
                                    key={`${date} - ${index}`}
                                    src="/paint-n-sip.jpeg"
                                    alt=""
                                    width={150}
                                    height={150}
                                />
                                <p className="underline">Paint 'n' Sip</p>
                            </div>
                        );
                        break;
                    default:
                        return null;
                        break;
                }
            }
        });
        // console.log(date);
        // console.log(images);
        return images;
    };

    // create a function that will show a pop up window once an image is clicked
    const showModal = () => {
        setPopUpVisible(true);
    };

    // create a function that will close the pop up window once the close button is clicked
    const closeModal = () => {
        setPopUpVisible(false);
    };



    return (
        <div className="flex">
            <div className="border border-double border-blue-800 mx-auto w-[75%] h-[75%]">
                {/* Calendar display */}
                <div className="flex border border-violet-700 sm:w-[80vw] md:w-[100%] sm:h-[20.5vh] md:h-[18.5vh]">
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
                            <td className="bg-black text-white md:pt-[1.5vh] md:pl-[.65vw] w-[12.5vw]">
                                <button
                                    onClick={handlePrevMonth}
                                    className="flex w-[100%] border border-dashed border-red-700 md:text-[4vh] sm:text-sm"
                                >
                                    Prev Month &lt;&lt;
                                </button>
                            </td>
                            {/* Display current month */}
                            <td className="bg-red-600 border border-black sm:h-[17vh] md:text-[10vh] sm:text-sm  text-center pt-[5vh] font-bold w-[50vw]">
                                {currentMonth}
                            </td>
                            <td className=" bg-black text-white md:pt-[1.5vh] md:pl-[.65vw] w-[12.5vw]">
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
                                <td
                                    className="border border-double border-purple-700 py-[2%] w-[14.29%] bg-yellow-500 text-white"
                                    key={index}
                                >
                                    {day}
                                </td>
                            ))}
                        </tr>
                        {/* Days of the month make each row only to have 7 days*/}
                        {/* loop through the days of the month displaying 7 days in one row until the end of the month with  */}
                        {displayDays().map((week, index) => (
                            <tr
                                key={index}
                                className="flex flex-row w-[100%]  border border-dashed border-green-400"
                            >
                                {week.map((day, index) => (
                                    <td
                                        //if the day is a saturady or sunday change the font color to red
                                        style={
                                            daysOfWeek[index] === "Sat" ||
                                            daysOfWeek[index] === "Sun"
                                                ? { color: "red" }
                                                : { color: "black" }
                                        }
                                        key={index}
                                        className="  border border-double border-purple-700  pb-[5%] w-[14.29%] bg-green-500 text-white "
                                    >
                                        {/* diplay the day and te image associated with the event for that date */}
                                        <div className="bg-gray-200 w-[100%]">
                                            {day}
                                        </div>
                                        {dispalyEventImg(`${currentYear}-${currentMonthIndex + 1}-${day}`)}
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