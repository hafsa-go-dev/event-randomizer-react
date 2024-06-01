import {useState} from "react";

export default function EventGrid({events, chosenEvent}) {
    let sortedEvents;

    sortedEvents = events.slice().sort();



    return (
        <div className="grid-container">{
            sortedEvents.map(event => (<div className={chosenEvent === event ? "cell active" : "cell"}>{event}</div>))
        }</div>
    );
}