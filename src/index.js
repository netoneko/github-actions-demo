const express = require('express');
const app = express();
const port = 3000;

let postReqNumber = 0;

app.get('/', (req, res) => {
    res.send(`Number of POST requests received since last deployment: ${postReqNumber}`);
});

app.post('/', (req, res) => {
    postReqNumber++;
    res.send(`Your POST request has been recorded`);
})

app.listen(port, () => {
    console.log(`counter-service is listening on port ${port}`);
});
