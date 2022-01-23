FROM node:16.13.0

RUN apt-get update && \
  apt-get install -y \
  neofetch \
  chromium \
  ffmpeg \
  webp \
  wget \
  imagemagick && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm install -g npm@latest
RUN npm install
RUN npm i ffmpeg
RUN npm i @adiwajshing/baileys@latest
RUN npm install -g forever   
RUN npm install yt-search@latest

COPY . .
EXPOSE 5000

CMD ["forever", "haruka.js"]`
