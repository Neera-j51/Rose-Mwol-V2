#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install libwebp
apt-get install mc
apt-get install ffmpeg
apt-get install wget
apt-get install tesseract
apt-get install nmap
wget -O ~/../usr/share/tessdata/eng.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/eng.traineddata?raw=true"
npm install

echo "DONE INSTALLING ALL PACKAGE REQUIRED, RUN npm start"
