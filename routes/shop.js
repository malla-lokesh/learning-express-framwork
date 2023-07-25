const path = require('path');
const express = require('express');

const shopRouter = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');

shopRouter.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    })
    // res.sendFile(path.join(rootDir, './', 'views', 'shop.html'));
});

module.exports = shopRouter;