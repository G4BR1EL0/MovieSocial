FROM node:14.17.0-alpine3.10

WORKDIR /react-module
ENV PATH /react-module/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent
COPY . ./

CMD ["npm", "start"]