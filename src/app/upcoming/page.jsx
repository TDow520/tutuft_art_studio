"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Calendar from "./calendar/page";

export default function Page() {

    // Get current date
    const date = new Date();
    const [currentMonthIndex, setCurrentMonthIndex] = useState(date.getMonth());
    const [currentYear, setCurrentYear] = useState(date.getFullYear());
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
                <div className="fixed top-0 left-0 w-full h-full flex bg-opacity-1 items-center justify-center overflow-y-auto ">
                    <div className="bg-emerald-200 p-2 w-[55%] h-[55%] overflow-y-auto rounded-xl text-yellow-700 font-bold text-xl text-center">
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
                    showModal={showModal}

                />
            </div>
        </div>
    );
}