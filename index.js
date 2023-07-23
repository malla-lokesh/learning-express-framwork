const express = require('express');
// const bodyParser = require('body-parser');

const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send(`Page doesn't exist.`);
});

console.log('from express js');

app.listen(3000);