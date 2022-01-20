const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('incoming req headers', req.headers);
    console.log('incoming req query', req.query);

    const { failedStatusCode } = req.query;

    if (failedStatusCode) {
        res.status(failedStatusCode).send(`failed with statusCode ${failedStatusCode}`);
    }

    res.header({
        'x-user-address': '0x6a4E301700C845Fb9253917EdD8bb27666Ba8A8D'
    }).send('x-user-address response header added');
});

app.listen(3001, () => {
    console.log('add header server listening on 3001');
});
