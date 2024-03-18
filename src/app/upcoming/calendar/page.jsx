"use client";
import React from "react";
import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";

const Calendar = ({
    currentMonthIndex,
    currentYear,
    handlePrevMonth,
    handleNextMonth,
    displayDays,
    showModal
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
                showModal={showModal}
            />
        </div>
    );
}

export default Calendar;
