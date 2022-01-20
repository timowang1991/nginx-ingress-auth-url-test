const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json(req.headers, null, 4);
});

app.listen(3000, () => {
    console.log('node server listening on 3000');
});
