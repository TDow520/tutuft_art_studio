"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
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
    const [currentMonth, setCurrentMonth] = useState(`${months[currentMonthIndex]} ${currentYear}`);

    // a function to get teh days for each month
    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    }

    // //loop through the days of the month and display them in the calendar table only putting 7 in a row
    // const daysInMonth = getDaysInMonth(currentMonthIndex, currentYear);
    // const days = [];
    // for (let i = 1; i <= daysInMonth; i++) {
    //     days.push(i);
    // }



    return (
        <div className="flex h-[89.36vh]">
            <div className="border border-double border-blue-800 mx-auto">
                the calendar goes here
                <div className="flex border border-violet-700 w-[50vw] h-[27.5vh]">
                    <Image
                        src="/heart_tree.jpeg"
                        alt=""
                        layout="responsive"
                        width={100}
                        height={100}
                    />
                </div>
                <table>
                    {/* this is an event calendar to show what events are being planned for each day */}
                    <tbody className="flex flex-col w-[45.75vw] m-auto">
                        <tr className="flex ml-[3.9%] w-[100%] border border-dashed border-white">
                            <td className="bg-black text-white ">
                                {/* this button will go back one month */}
                                <button
                                    onClick={handlePrevMonth}
                                    className="flex-row w-[151.25px] border border-dashed border-red-700"
                                >
                                    &lt;&lt; prev Month
                                </button>
                            </td>
                            {/*  displays the current calendar month */}
                            <td className="bg-red-500 h-[7vh] text-[3vh] text-center font-bold w-[50vw]">
                                {currentMonth}
                            </td>
                            <td className=" bg-black text-white">
                                {/* this button will go forward one month */}
                                <button
                                    onClick={handleNextMonth}
                                    className="flex-row w-[151.25px] border border-dashed border-red-700"
                                >
                                    next Month &gt;&gt;
                                </button>
                            </td>
                        </tr>
                        <tr className="flex flex-row w-[100%] ml-[3.91%] border border-dashed border-white">
                            <th className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                Sun
                            </th>
                            <th className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                Mon
                            </th>
                            <th className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                Tues
                            </th>
                            <th className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                Wed
                            </th>
                            <th className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                Thurs
                            </th>
                            <th className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                Fri
                            </th>
                            <th className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                Sat
                            </th>
                        </tr>
                        {/* this will make 5 row for the dates */}
                        <tr>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                1
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                2
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                3
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                4
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                5
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                6
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                7
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                8
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                9
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                10
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                11
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                12
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                13
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                14
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                15
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                16
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                17
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                18
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                19
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                20
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                21
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                22
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                23
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                24
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                25
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                26
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                27
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                28
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                29
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                30
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                31
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                1
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                2
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                3
                            </td>
                            <td className="border border-double border-white px-[5.915%] py-[2%] bg-black text-white">
                                4
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
