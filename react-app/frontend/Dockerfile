
# first stage: build production app resource (/build dir)
FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
# copy from previous step --> dest is specifically required for nginx
COPY --from=builder /app/build /usr/share/nginx/html

# default command is to start the nginx server