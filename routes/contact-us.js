const path = require('path');
const express = require('express');

const contactUsRouter = express.Router();

const rootDir = require('../util/path');

contactUsRouter.get('/contact-us', (req, res, next) => {
    res.render('contact-us', {
        pageTitle: 'Contact Us',
        path: '/contact-us',
        formCSS: true,
    });
});

contactUsRouter.post('/success', (req, res, next) => {
    console.log(req.body);
    res.status(404).render('success', {
        pageTitle: 'Contact Us',
        path: '/contact-us'
    });
})

module.exports = contactUsRouter;