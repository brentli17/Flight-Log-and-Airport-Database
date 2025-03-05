import React, { useState } from "react";

function FlightLogForm({addFlight}) {
    const [aircraftType, setAircraftType] = useState("");
    const [tailNumber, setTailNumber] = useState("");
    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");
    const [duration, setDuration] = useState("");
    const [flightPurpose, setFlightPurpose] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const flightData = {aircraftType, tailNumber, departure, arrival, duration, flightPurpose};

        console.log("Waiting for flight log fetch");
        const response = await fetch("http://localhost:5000/api/flights", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(flightData),
        });
        console.log("Waiting for response");

        const result = await response.json();
        console.log("Flight logged:", result);
        addFlight(result)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={aircraftType} onChange={(e) => setAircraftType(e.target.value)} placeholder="Aircraft Type" required />
            <input value={tailNumber} onChange={(e) => setTailNumber(e.target.value)} placeholder="Tail Number" required />
            <input value={departure} onChange={(e) => setDeparture(e.target.value)} placeholder="Departure" required />
            <input value={arrival} onChange={(e) => setArrival(e.target.value)} placeholder="Arrival" required />
            <input value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration (hrs)" required />
            <input value={flightPurpose} onChange={(e) => setFlightPurpose(e.target.value)} placeholder="Purpose" />
            <button type="submit">Log Flight</button>
        </form>
    );
}

export default FlightLogForm;