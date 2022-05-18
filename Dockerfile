FROM node:lts-alpine

ADD ./application /app
WORKDIR /app

RUN npm i
RUN npm run build

# Start server
CMD ["npm", "run", "start:dev"]
