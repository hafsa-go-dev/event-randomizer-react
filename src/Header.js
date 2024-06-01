import {useState} from "react";

export default function Header({chooseEvent}) {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function cycle() {
        for (let i = 1; i < 10; i++) {
            chooseEvent()
            await sleep(200);
        }
    }
    return (
        <div className="header">
            <div><h1>Event Randomizer</h1></div>
            <div className="randomizer">
                <button className="randomizer-button" onClick={cycle}>Randomize!</button>
            </div>
        </div>
    );
}