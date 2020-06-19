FROM node:14

ENV APP_NAME 'brea.io'
ENV APP_PATH '/brea.io'
ENV PORT 3000

EXPOSE $PORT

RUN mkdir -p $APP_PATH

WORKDIR $APP_PATH

COPY ./package.json $APP_PATH

RUN npm install \
    npm install gulp -g

COPY . $APP_PATH
RUN gulp build

