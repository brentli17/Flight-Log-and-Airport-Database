# Flight Log and Airport Database

## Overview
This project is a full stack training exercise designed to provide basic functionality for logging pilot flights and looking up airport information.

## Features

### Pilot Flight Log (Core Feature)
- Users can log flights with details:
    - Aircraft type (dropdown or text input)
    - Departure & arrival airports
    - Flight duration
    - Flight purpose (training, commercial, recreational, etc.)
- Filter/search logs by:
    - Date
    - Aircraft type
    - Airport

### Airport Information Lookup
- Search for airports using IATA/ICAO codes
- Fetch and display airport details such as:
    - Runway length
    - Country
    - Elevation
- Option to save favorite airports to the database

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: MongoDB