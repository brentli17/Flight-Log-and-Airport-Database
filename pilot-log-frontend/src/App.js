import React, { useEffect, useState } from "react";
import FlightLogForm from "./FlightLogForm";
import ClearFlights from "./ClearFlights";

function App() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/flights")
            .then((res) => res.json())
            .then((data) => setFlights(data));
    }, []);

    const addFlight = (newFlight) => {
      setFlights([...flights, newFlight]);
    };

    const clearFlights = async () => {
      await fetch("http://localhost:5000/api/flights", {
          method: "DELETE",
      });
      setFlights([]);
    };

    return (
        <div>
            <h1>Pilot Log</h1>
            <FlightLogForm addFlight={addFlight} />
            <h2>Flight History</h2>
            <ClearFlights clearFlights={clearFlights} />
            <ul>
                {flights.map((flight, index) => (
                    <li key={index}>
                        {flight.tailNumber} ({flight.aircraftType}) - {flight.departure} to {flight.arrival} ({flight.duration} hrs)
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
