const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ extended: false }));
app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

// endpoints
require('./endpoints/get/root1')(app);
require('./endpoints/post/root1')(app);

app.listen(3000, 'localhost', () => console.log(`Debug server listening\n`));
