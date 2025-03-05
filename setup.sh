#!/bin/bash

(cd backend ; npm install)
ls
cd -
(cd frontend ; npm install)

echo "Press ENTER to close"
read