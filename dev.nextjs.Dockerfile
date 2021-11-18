FROM node:alpine
RUN apk add --no-cache bash

WORKDIR /app
COPY yarn.lock package.json ./
RUN yarn

COPY . .

RUN chmod +x ./tools/scripts/wait-for-it.sh 

EXPOSE 4200 
EXPOSE 9229

CMD ["./tools/scripts/wait-for-it.sh", "postgres:5432", "--", "yarn", "nx", "serve", "personal-site", "--host", "0.0.0.0"]