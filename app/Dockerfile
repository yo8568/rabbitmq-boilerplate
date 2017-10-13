FROM node:6-alpine

MAINTAINER Shoa-Tung Chang <yo8568@gmail.com>

# create app folder
RUN mkdir /app
WORKDIR /app
COPY . /app

# install dependencies
RUN yarn install

# build for distribution
RUN yarn build

EXPOSE 8080
