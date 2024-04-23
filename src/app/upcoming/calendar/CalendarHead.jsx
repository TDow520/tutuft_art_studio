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

    // short version of months
    const shortMons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return (
        <div className="calendar-header flex justify-evenly phone:text-md text-2xl  w-[100%]  mb-2">
            {/* Full Month name shown on larger screens, hidden on smaller */}
            <button
                onClick={handlePrevMonth}
                className="bg-gold-200 bg-opacity-75 text-left text-black font-semibold px-[1%] py-[1.5%] laptop:w-[18.35%] desktop:w-[16.87%] ml-2 mr-4 phone:hidden phone_land:hidden tablet:hidden"
            >
                &lt;&lt; Prev Month
            </button>
            <h2 className="bg-emerald-700 bg-opacity-75  text-center text-3xl px-[4.5%] py-[2%] font-bold laptop:w-[92%] desktop:w-[90%] phone:hidden phone_land:hidden tablet:hidden">
                {`${months[currentMonthIndex]} ${currentYear}`}
            </h2>
            <button
                onClick={handleNextMonth}
                className="bg-gold-200 bg-opacity-75  text-right text-black font-semibold px-[1%] py-[1.5%] laptop:w-[18.35%] desktop:w-[16.87%] mr-2 ml-4 phone:hidden phone_land:hidden tablet:hidden"
            >
                Next Month &gt;&gt;
            </button>

            {/* Short month name shown on smaller screens */}
            <button
                onClick={handlePrevMonth}
                className="bg-gold-300 bg-opacity-75  text-left text-black font-semibold phone:w-[145px] phone_land:w-[181px] tablet:w-[220px] py-[1.5%] px-[2%]  laptop:hidden desktop:hidden"
            >
                Prev Month <br /> &lt;&lt;
            </button>
            <h2 className="bg-emerald-800 bg-opacity-75  text-center phone:w-[215px] phone_land:w-[275px] tablet:w-[325px] py-[6%] font-bold laptop:hidden desktop:hidden">
                {`${shortMons[currentMonthIndex]} ${currentYear}`}
            </h2>
            <button
                onClick={handleNextMonth}
                className="bg-gold-300 bg-opacity-75  text-right text-black font-semibold phone:w-[145px] phone_land:w-[181px] tablet:w-[220px] py-[1.5%] px-[2%]   laptop:hidden desktop:hidden"
            >
                Next Month <br /> &gt;&gt;
            </button>
        </div>
    );
}

export default CalendarHead;
