const express = require('express');

const router = express.Router();

router.get('/shop', (req, res, next) => {
    res.send('shop page');
})

module.exports = router;