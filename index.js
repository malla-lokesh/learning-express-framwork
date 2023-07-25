const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const rootDir = require('./util/path');
const contactUsRouter = require('./routes/contact-us');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(rootDir, 'public')));

app.listen(3000, () => {
    console.log(`Server is running...`);
});

app.use(adminRouter.routes);
app.use(shopRouter);
app.use(contactUsRouter);

app.use(errorController.get404);