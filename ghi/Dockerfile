#Stage 1: build react app

FROM --platform=linux/amd64 node:lts-bullseye as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

#Stage 2: build the final image and copy the react build files

FROM --platform=linux/amd64 nginx:1.21.4-alpine

COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
