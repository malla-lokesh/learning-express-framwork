const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/msg', (req, res, next) => {
    res.send(`<h1>message route</h1>\n`);
    next();
});

app.use('/add-product', (req, res, next) => {
    res.send(`
        <form action="/product" method="POST">
            <input type="text" name="product"/>
            <input type="number" name="size"/>
            <button type="submit">send</button>
        </form>
    `);
})

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/msg');
})

console.log('from express js');

app.listen(3000);