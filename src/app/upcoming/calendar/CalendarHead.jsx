import React from "react";

const CalendarHead = ({
    currentMonthIndex,
    currentYear,
    handlePrevMonth,
    handleNextMonth
}) => {
    const months = [
        "January",
        "February",
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
    return (
        <div className="calendar-header flex justify-evenly phone:text-md tablet:text-2xl border border-purple-700 w-[100%]">
            <button
                onClick={handlePrevMonth}
                className="bg-yellow-200 text-left text-black font-semibold pt-[1.5%] laptop:w-[18.35%] desktop:w-[17.87%] border border-double border-purple-700 "
            >
                &lt;&lt; Prev Month
            </button>
            <h2 className="bg-emerald-500 phone:h-[17%] text-center pb-[2%] pt-[2%] font-bold phone:w-[50%] laptop:w-[92%] desktop:w-[90%] border border-double border-purple-700">{`${months[currentMonthIndex]} ${currentYear}`}</h2>
            <button
                onClick={handleNextMonth}
                className="bg-yellow-200 text-right text-black font-semibold pt-[1.5%] laptop:w-[18.35%] desktop:w-[17.87%] border border-double border-purple-700 "
            >
                Next Month &gt;&gt;
            </button>
        </div>
    );
}

export default CalendarHead;
