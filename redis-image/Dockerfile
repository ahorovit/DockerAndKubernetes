# use existing image as a base
FROM alpine

# download and install a dependency
RUN apk add --update redis

# tell image how to start
CMD ["redis-server"]