import React from "react";

function Event({ event }) {
    return (
        <div className="event">
            <div className="event-title">{event.title}</div>
            <div className="event-details">{/* Render event details */}</div>
        </div>
    );
}

export default Event;
