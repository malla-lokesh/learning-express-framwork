const path = require('path');
const express = require('express');

const contactUsRouter = express.Router();

const rootDir = require('../util/path');

contactUsRouter.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir, './views/contact-us.html'));
});

contactUsRouter.post('/success', (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views/success.html'));
})

module.exports = contactUsRouter;