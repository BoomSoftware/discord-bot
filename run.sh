#!/bin/bash

RED="\033[1;31m"
GREEN="\033[1;32m"
NOCOLOR="\033[0m"

echo "${GREEN}Compilation...${NOCOLOR}"
tsc src/main.ts
echo "${GREEN}Compilation DONE${NOCOLOR}"
echo "${GREEN}Starting app...${NOCOLOR}"
node .