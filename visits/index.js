const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server',   // this is a meaningful url because docker-compose is wiring them together
    port: 6379              // default port for redis
});

// initialize counter in redis
client.set('visits', 0);

app.get('/', (req, res) => {
    process.exit(1); // stop app -- 0 means correct shutdown
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits); 
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('listening on port 8081');
});