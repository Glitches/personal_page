FROM node:alpine
RUN apk update && apk add \
  zsh \
  curl \
  git

RUN npm i -g\
  gatsby-cli@latest

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

CMD ["zsh"]

EXPOSE 8000

WORKDIR /app