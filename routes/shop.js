const path = require('path');
const express = require('express');

const shopRouter = express.Router();

const rootDir = require('../util/path');

shopRouter.use('/', (req, res, next) => {
    console.log(`Will this always runs?`);
    next(); // allows the request to continue to next middleware. 
});

shopRouter.use('/add', (req, res, next) => {
    console.log('Wow this route was hit twice. ');
    next();
});

shopRouter.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, './', 'views', 'shop.html'));
});

module.exports = shopRouter;