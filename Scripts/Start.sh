#!/bin/bash
cd /var/www/html
npm install
node index.js > app.log 2>&1 &
