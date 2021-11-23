FROM node:alpine

# commands following WORKDIR will be run from this directory in the container
WORKDIR /usr/app


# only copy the bare minimum of files required for the next step
# --> this makes the most use of the cache
COPY ./package.json ./

RUN npm install

# local files will be copied into working directory of container
# NOTE: first path is relative to the build directory (eg docker build . --> "." is the build directory)
COPY ./ ./

CMD ["npm", "start"]