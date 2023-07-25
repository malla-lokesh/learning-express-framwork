const path = require('path');
const express = require('express');

const adminRouter = express.Router();

const productsController = require('../controllers/products');

adminRouter.get('/add-product', productsController.getAddProduct);

adminRouter.post('/add-product', productsController.postAddProduct);

exports.routes = adminRouter;