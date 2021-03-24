const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const crypto = require('crypto');


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

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.listen(3000, () => {
  console.log('express listening on 3000')
});
