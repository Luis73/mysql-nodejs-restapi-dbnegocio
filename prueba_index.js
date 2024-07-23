
import express from 'express'   //importamos express
import morgan from 'morgan'   //importamos express
import {conectar} from './src/mysql_connector.js'
import http from 'http'   //importamos express
import path from 'path'   //importamos express
import timeout from 'connect-timeout'   //importamos express
import bodyParser from 'body-parser'

//const path = require('path');

console.log(path.sep); // Windows : \

const app = express()  //Inicamos express

app.set('port', process.env.PORT || 3000);

// starting the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
  });  

 app.set('views',  './vistas');
 app.set('view engine', 'pug');

// middlewares
app.use(timeout('90s'));
app.use( morgan('dev'));
app.use( bodyParser.urlencoded({extended: false}));
app.use( bodyParser.json());

 //Configurando de archivos estaticos
 app.use ( express.static('./vistas'))
 app.use ( express.static('./src'))
 app.use ( express.static('./css'))

 //const express = require('express');
 //const morgan = require('morgan');
 //const bodyParser = require('body-parser');

 const user = require('routes/user.js');
 const seller = require('./src/routes/seller');
 const product = require('./src/routes/product');
 const customer = require('./src/routes/customer');
 const order = require('./src/routes/order');
 const orderitems = require('./src/routes/order_item');
 const articulo = require('./src/routes/articulo');
 const cliente = require('./src/routes/cliente');
 const venta1 = require('./src/routes/venta1');
 const venta2 = require('./src/routes/venta2');
 const programa = require('./src/routes/programa');
 
 // Api de Heroku
 const controls = require('./src/routes/controls');
 const sellers = require('./src/routes/sellers');
 const products = require('./src/routes/products');
 const customers = require('./src/routes/customers');
 const orders = require('./src/routes/orders');

 
 require('./src/routes/user')(app);
 require('./src/routes/seller')(app);
 require('./src/routes/product')(app);
 require('./src/routes/customer')(app);
 require('./src/routes/order')(app);
 require('./src/routes/order_item')(app);
 require('./src/routes/articulo')(app);
 require('./src/routes/cliente')(app);
 require('./src/routes/venta1')(app);
 require('./src/routes/venta2')(app);
 require('./src/routes/programa')(app);
 
 require('./src/routes/controls')(app);
 require('./src/routes/sellers')(app);
 require('./src/routes/customers')(app);
 require('./src/routes/products')(app);
 require('./src/routes/orders')(app);
 require('./src/routes/order_items')(app);
 



  app.get('/', (req,res) =>{
    //res.send('Welcome to my API');
    conectar()
    res.render( 'index', {titulo:'Api de consulta' , dato:'Welcome to my API'})
  });
  