FROM node:10.18.0-alpine
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app
RUN mkdir -p /home/node/serverfile
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD [ "node", "server1.js" ]