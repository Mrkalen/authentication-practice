const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyPaser = require('body-parser');


const app = express();

// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// To parse cookies from the HTTP Request
app.use(cookieParser());

// Lets us use hbs as the extension for handlebars files
app.engine('hbs', exphbs({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');

// Our requeswts handlers will be implemented here...

app.listen(3000);
