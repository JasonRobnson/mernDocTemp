# specify the node base image with your desired version node:<version>
FROM node:10
# replace this with your application's default port
EXPOSE 8888

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm", "start"]
