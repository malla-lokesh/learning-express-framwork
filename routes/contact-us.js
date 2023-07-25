const path = require('path');
const express = require('express');

const contactUsRouter = express.Router();

const formController = require('../controllers/form');

contactUsRouter.get('/contact-us', formController.getContactUs);

contactUsRouter.post('/success', formController.getSuccessMsg);

module.exports = contactUsRouter;