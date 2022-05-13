const express = require('express');
const productsRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/products',productsRoutes);
  router.use('/users',userRoutes);
}

module.exports = routerApi;
