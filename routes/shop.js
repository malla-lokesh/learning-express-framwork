const path = require('path');
const express = require('express');

const shopRouter = express.Router();

const productsController = require('../controllers/products');

shopRouter.get('/', productsController.getProducts);

module.exports = shopRouter;