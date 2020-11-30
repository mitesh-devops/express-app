const express = require('express');
const app = express();
const port = process.env.NODE_PORT || 3001;
const axios = require('axios');
app.use(express.json());

app.get('/node-demo-2', async (req, res) => {
    console.info("connecting to node-demo");
    // calling node-demo
    const result = await axios({
        method: 'get',
        baseURL: `http://node-demo.default.svc.cluster.local:3001`,
        url: `/node-demo`
    });
    console.info('connected to node-demo');
    res.send('connected to node-demo');
});

var server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
server.timeout = 260000;