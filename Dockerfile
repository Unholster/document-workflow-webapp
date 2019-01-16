FROM node:11.6.0
COPY package.json /src/
COPY yarn.lock /src/
WORKDIR /src/
RUN yarn
COPY ./ /src/
RUN yarn build
