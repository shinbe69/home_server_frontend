FROM node:21-alpine3.17
WORKDIR /app
COPY . .
RUN npm ci
CMD [ "npm", "start" ]
EXPOSE 3000