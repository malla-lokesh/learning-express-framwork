const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const rootDir = require('./util/path');
const contactUsRouter = require('./routes/contact-us');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(rootDir, 'public')));

app.listen(3000, () => {
    console.log(`Server is running...`);
});

app.use(adminRouter);
app.use(shopRouter);
app.use(contactUsRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, './views/page-not-found.html'));
})

console.log(`from node js file.`);