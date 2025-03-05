import React from "react";

function ClearFlights({clearFlights}){
    return (
        <button onClick={clearFlights}>Clear Flights</button>
    );
}

export default ClearFlights;