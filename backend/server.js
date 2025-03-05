const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Define Flight Log Schema
const FlightSchema = new mongoose.Schema({
    aircraftType: String,
    tailNumber: String,
    departure: String,
    arrival: String,
    duration: Number,
    flightPurpose: String,
    flightDate: { type: Date, default: Date.now }
});

const Flight = mongoose.model("Flight", FlightSchema);

// API Endpoint to Log a Flight
app.post("/api/flights", async (req, res) => {
    try {
        const newFlight = new Flight(req.body);
        await newFlight.save();
        res.json(newFlight);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// API Endpoint to Get All Flights
app.get("/api/flights", async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// API Endpoint to Delete All Flights
app.delete("/api/flights", async (req, res) => {
    try {
        await Flight.deleteMany({});
        res.json({ message: "All flights cleared" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
