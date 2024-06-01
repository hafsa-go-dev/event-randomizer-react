import {useState} from "react";

export default function EventGrid({events, chosenEvent}) {
    let sortedEvents;

    sortedEvents = events.slice().sort();



    return (
        <div class="grid-container">{
            sortedEvents.map(event => (<div class={chosenEvent === event ? "cell active" : "cell"}>{event}</div>))
        }</div>
    );
}