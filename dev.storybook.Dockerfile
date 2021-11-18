FROM node:alpine

WORKDIR /app
COPY yarn.lock package.json ./
RUN yarn

COPY . .

EXPOSE 4400

CMD ["yarn", "nx", "storybook", "design-system", "--host", "0.0.0.0"]