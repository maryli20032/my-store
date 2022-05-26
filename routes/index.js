const express = require('express');
const productsRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');
const orderRouters = require('./orderRoutes');
const customerRoutes = require('./customerRoutes');
const categoryRoutes = require('./categoryRoutes');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/products',productsRoutes);
  router.use('/users',userRoutes);
  router.use('/order', orderRouters);
  router.use('/customer', customerRoutes);
  router.use('/categories',categoryRoutes);
}

module.exports = routerApi;
