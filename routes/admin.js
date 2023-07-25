const path = require('path');
const express = require('express');

const adminRouter = express.Router();

const rootDir = require('../util/path');

adminRouter.get('/add-product', (req, res, next) => {
    console.log(`add-product route use method`);
    res.sendFile(path.join(rootDir, './views/add-product.html'));
});

adminRouter.post('/add-product', (req, res, next) => {
    res.redirect('/');
    console.log(req.body);
});

module.exports = adminRouter;