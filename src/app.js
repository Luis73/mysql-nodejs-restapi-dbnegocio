'use strict'

const http = require('http'); 
const path = require('path');

//console.log(__dirname);
//console.log('Uno');
// Prints: /Users/mjr
//console.log(path.dirname(__filename));
//console.log(path.basename(__filename));

const express = require('express');
//const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const jwt = require('jsonwebtoken');

const secretKey = '021a10a3-9cd4-46ed-ac09-cef9a3285027';

//const api = require('routes');
app.use( bodyParser.urlencoded({extended: false}));
app.use( bodyParser.json());

//const user = require('./routes/user');
//const seller = require('./routes/seller');
//const product = require('./routes/product');
//const customer = require('./routes/customer');
//const order = require('./routes/order');
//const orderitems = require('./routes/order_item');
//const articulo = require('./routes/articulo');
const cliente = require('./routes/cliente');
//const venta1 = require('./routes/venta1');
//const venta2 = require('./routes/venta2');
//const programa = require('./routes/programa');

// Api de Heroku
//const controls = require('./routes/controls');
//const sellers = require('./routes/sellers');
//const products = require('./routes/products');
//const customers = require('./routes/customers');
//const orders = require('./routes/orders');


// settings
app.set('port', process.env.PORT || 4000);  
app.set('views', path.join(__dirname, 'views'));

// middlewares
//app.use(timeout('90s'));
//app.use( morgan('dev'));
//app.use( bodyParser.urlencoded({extended: false}));
//app.use( bodyParser.json());

// routes
//require('./routes/user')(app);
//require('./routes/seller')(app);
//require('./routes/product')(app);
//require('./routes/customer')(app);
//require('./routes/order')(app);
//require('./routes/order_item')(app);
//require('./routes/articulo')(app);
require('./routes/cliente')(app);
//require('./routes/venta1')(app);
//require('./routes/venta2')(app);
//require('./routes/programa')(app);

//
//require('./routes/controls')(app);
//require('./routes/sellers')(app);

// static files
app.use(express.static(path.join(__dirname, 'public')));

/*
http.createServer(app)
  .listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
  });
*/


app.set('views',  './vistas');
app.set('view engine', 'pug');

// middlewares
app.use(express.json());

//app.use(timeout('90s'));
//app.use( morgan('dev'));
//app.use( bodyParser.urlencoded({extended: false}));
//app.use( bodyParser.json());

 //Configurando de archivos estaticos
 app.use ( express.static('./vistas'))
 app.use ( express.static('./src'))
 app.use ( express.static('./css'))

 //app.use ( '/api', api )
 
 app.get('/login', function(req,res) {
  const username = req.body.username;
  const password = req.body.password;

  console.log ( username );
  console.log ( password );
  // Check if the username and password are correct

 if (username === 'kike' && password === '123456') {
  // Generate a JWT token
  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

  // Return the token to the client
  res.json({ token });

  res.send('Welcome to my API');

} else {
  res.status(401).json({ message: 'Invalid1 username or password' });
}

});

//Verifica token

app.get('/protected', verifyToken, (req, res) => {
  res.send('Protected route!');
});

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader ; //&& authHeader.split(' ')[1];
  //const token = req.headers.authorization;

  console.log ( 'token ' + authHeader ) ;
  //console.log ( 'token ' + authHeader.split(' ')[1] ) ;

  if (!token) {
    return res.status(401).json({ message: 'Token not provider' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid Token' });
    }
    req.user = decoded;
    console.log ( 'decoded ' + req.user ) ;    
    next();
  });
}

// starting the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});  

module.exports =app
