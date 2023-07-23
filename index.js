const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.send('first middleware\n');
    next();
})

app.use((req, res, next) => {
    console.log('second middleware');
})

console.log('from express js');

app.listen(3000);