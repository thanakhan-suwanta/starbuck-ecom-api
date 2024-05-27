const express = require('express');
const orderController = require('../controllers/orderController');
const routerOders = express.Router();

routerOders.post('/order', orderController.createOrder);
routerOders.get('/check-stock', orderController.checkStock);
// routerOders.get('/update-stock', orderController.updateProductStockFromAPI);

module.exports = routerOders;



