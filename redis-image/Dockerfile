# use existing image as a base
FROM alpine

# download and install a dependency --> executes in intermediate/temporary container
RUN apk add --update redis
# download and install a dependency --> executes in intermediate/temporary container
RUN apk add --update gcc

# tell image how to start --> executes in intermediate/temporary container
CMD ["redis-server"]