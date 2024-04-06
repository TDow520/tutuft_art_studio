"use client";
import React from "react";
import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";

const Calendar = ({
    currentMonthIndex,
        currentYear,
        handlePrevMonth,
        handleNextMonth,
        displayDays
}) => {
    return (
        <div className="calendar">
            <CalendarHead
                currentMonthIndex={currentMonthIndex}
                currentYear={currentYear}
                handlePrevMonth={handlePrevMonth}
                handleNextMonth={handleNextMonth}
            />

            <CalendarBody
                currentMonthIndex={currentMonthIndex}
                currentYear={currentYear}
                displayDays={displayDays}
            />
        </div>
    );
}

export default Calendar;
