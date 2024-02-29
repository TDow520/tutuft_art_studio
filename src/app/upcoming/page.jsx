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
    const [selectedEvent, setSelectedEvent] = useState(null);

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
            title: "Rug Tufting",
            slots: 20
        },
        {
            date: "2024-2-9",
            title: "Paint 'n' Sip",
            slots: 20
        },
        {
            date: "2024-2-16",
            title: "Rug Tufting",
            slots: 20
        },
        {
            date: "2024-2-14",
            title: "Rug Tufting",
            slots: 20
        },
        {
            date: "2024-3-14",
            title: "Paint 'n' Sip",
            slots: 20
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
                // console.log(event.title);
                switch (event.title) {
                    case "Rug Tufting":
                        images.push(
                            <div className="flex flex-col items-center mt-[5%] cursor-pointer">
                                <Image
                                    key={`${date} - ${index}`}
                                    src="/rug_tuft.jpeg"
                                    alt=""
                                    width={150}
                                    height={150}
                                    onClick={() => showModal(event)}
                                    className=" hover:drop-shadow-2xl rounded-md"
                                />
                                <p className="underline">Rug Tufting</p>
                            </div>
                        );
                        break;
                    case "Paint 'n' Sip":
                        images.push(
                            <div className="flex flex-col items-center mt-[5%] cursor-pointer">
                                <Image
                                    key={`${date} - ${index}`}
                                    src="/paint-n-sip.jpeg"
                                    alt=""
                                    width={150}
                                    height={150}
                                    onClick={() => showModal(event)}
                                    className=" hover:drop-shadow-2xl rounded-md"
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
    const showModal = (event) => {
        setSelectedEvent(event);
        // console.log("Clicked");
        // console.log(`THis is the event: ${event.title}`);
        setPopUpVisible(true);
        // console.log("clicked");
    };

    // create a function that will close the pop up window once the close button is clicked
    const closeModal = () => {
        setSelectedEvent(null);
        setPopUpVisible(false);
    };

    // fill out the popup modal with data from the event information
    const popUp = (event) => {
        // console.log(`event: ${event.title}`);
        if (popUpVisible) {
            // get the event that is being clicked on

            return (
                <div className="fixed top-0 left-0 w-full h-full flex bg-opacity-1 items-center justify-center overflow-y-auto">
                    <div className="bg-emerald-200 p-2 w-[75%] h-[45%] overflow-y-auto rounded-xl text-yellow-700 font-bold text-xl text-center">
                        {dispalyEventImg(event.date)}
                        <h3>Time: 6:00pm - 8:00pm</h3>
                        {/* <p>
                            Location: 3447 Mcgehee Rd Suite N <br></br>
                            MONTGOMERY, Alabama 36111
                        </p> */}
                        <br />
                        <p>Cost: $25</p>
                        <p>Supplies: Provided</p>
                        <p>Age: 18+</p>
                        <p>Available Slots: 10/{event.slots}</p>
                        <button
                            className="rounded-md bg-blue-500 w-[50%] text-white"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            );
        }
        return null;
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
                        <tr className="flex justify-evenly phone:text-md md:text-2xl">
                            <td className="bg-yellow-200 text-left text-black font-semibold pt-[1.5vh] md:pr-[.65vw] w-[12.2vw]">
                                <button
                                    onClick={handlePrevMonth}
                                    className="flex w-[100%]"
                                >
                                    &lt;&lt; Prev Month
                                </button>
                            </td>
                            {/* Display current month */}
                            <td className="bg-emerald-500 sm:h-[17vh] text-center pb-[2vh] pt-[2vh] font-bold w-[50vw]">
                                {currentMonth}
                            </td>
                            <td className="bg-yellow-200 text-right text-black font-semibold pt-[1.5vh] md:pr-[.65vw] w-[12.2vw]">
                                <button
                                    onClick={handleNextMonth}
                                    className="flex w-[100%] "
                                >
                                    Next Month &gt;&gt;
                                </button>
                            </td>
                        </tr>
                        {/* Days of the week */}
                        <tr className="flex flex-row w-[100%]">
                            {daysOfWeek.map((day, index) => (
                                <td
                                    className="border border-double border-purple-700 py-[2%] w-[14.29%] bg-yellow-200 text-black text-center font-bold"
                                    key={index}
                                >
                                    {day}
                                </td>
                            ))}
                        </tr>
                        {/* Days of the month make each row only to have 7 days*/}
                        {/* loop through the days of the month displaying 7 days in one row until the end of the month with  */}
                        {displayDays().map((week, index) => (
                            <tr key={index} className="flex flex-row w-[100%] font-semibold">
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
                                        className="  border border-double border-purple-700  pb-[5%] w-[14.29%] bg-green-300 text-white "
                                    >
                                        {/* diplay the day and te image associated with the event for that date */}
                                        <div className="bg-gray-200 w-[100%]">
                                            {day}
                                        </div>
                                        {dispalyEventImg(
                                            `${currentYear}-${
                                                currentMonthIndex + 1
                                            }-${day}`
                                        )}
                                        {popUp(selectedEvent)}
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