#!/usr/bin/env bash


docker-compose up --force-recreate -d;

docker exec -ti personal_page zsh
