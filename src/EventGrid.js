import {useState} from "react";

export default function EventGrid({events, chosenEvent}) {
    let sortedEvents;

    sortedEvents = events.slice().sort((a, b) => a - b);



    return (
        <div class="grid-container">{
            sortedEvents.map(event => (<div class={chosenEvent === event ? "cell active" : "cell"}>{event}</div>))
        }</div>
    );
}