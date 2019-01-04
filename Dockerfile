FROM node:alpine

RUN npm i -g\
  gatsby-cli@latest\
  git 

WORKDIR /app