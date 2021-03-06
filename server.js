const express = require('express');
const app = express();
const port = process.env.NODE_PORT || 3001;

app.use(express.json());

app.get('/node-demo', (req, res) => {
    console.info("in api now waiting");
        setTimeout(() => {
            console.info("response sent");
            res.send('Hello World!');
        }, 240000);
    });

var server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
server.timeout = 250000;
