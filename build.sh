#!/bin/bash
npm install
./node_modules/gulp/bin/gulp.js
ln -sf ../internal_modules ./internal_modules
cd build .
npm install
