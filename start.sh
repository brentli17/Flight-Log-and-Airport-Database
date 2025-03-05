#!/bin/bash

# Start the Node.js server
node pilot-log-backend/server.js &

# Start the React development server
npm start --prefix pilot-log-frontend