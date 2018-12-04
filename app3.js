//API DE NUMEROS ALEATORIOS


const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');

const productsRoutes = require('./routes/product');

//inicializar
const app = express()

//settings
app.set('json spaces', 4);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//routes
app.use('/product',productsRoutes);

//static files

//static server
app.listen(3000,() => {
    console.log('server on port', 3000);
});