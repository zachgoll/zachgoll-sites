FROM node:16-alpine 
RUN apk add --no-cache git curl 
WORKDIR /app
COPY yarn.lock package.json ./ 
RUN yarn 
COPY . .