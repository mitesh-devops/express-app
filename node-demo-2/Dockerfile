FROM node:10.18.0-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
RUN mkdir -p /home/node/serverfile
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 3001
CMD [ "node", "server1.js" ]
