FROM node:alpine
RUN apk update && apk add \
  zsh \
  curl \
  git

RUN npm i -g\
  gatsby-cli@latest

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

EXPOSE 8000

WORKDIR /app

RUN npm install
RUN zsh