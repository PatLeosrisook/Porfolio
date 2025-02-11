FROM node:18-alpine
WORKDIR /dashboard/

COPY public/ /dashboard/public
COPY src/ /dashboard/src
COPY package.json /dashboard/

RUN npm install
CMD ["npm", "start"]