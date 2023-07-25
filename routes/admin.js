const path = require('path');
const express = require('express');

const adminRouter = express.Router();

const rootDir = require('../util/path');

const products = [];

adminRouter.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/add-product',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
});

adminRouter.post('/add-product', (req, res, next) => {
    res.redirect('/');
    console.log(req.body);
    products.push({title: req.body.laptop}); // mine is not title it is laptop.
});

exports.routes = adminRouter;
exports.products = products;