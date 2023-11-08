FROM node:21-alpine

ADD ./package.json /opt/counter-service/

WORKDIR /opt/counter-service

RUN npm install

ADD . /opt/counter-service/

RUN npm start
