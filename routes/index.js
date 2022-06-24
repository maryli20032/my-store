const express = require('express');
const productsRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');
const orderRouters = require('./orderRoutes');
const customerRoutes = require('./customerRoutes');
const categoryRoutes = require('./categoryRoutes');
const itemRoutes = require('./itemRoutes');
const authRoutes = require('./authRoutes');
const profileRoutes = require('./profileRoutes');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/products',productsRoutes);
  router.use('/users',userRoutes);
  router.use('/orders', orderRouters);
  router.use('/customers', customerRoutes);
  router.use('/categories',categoryRoutes);
  router.use('/items',itemRoutes);
  router.use('/auth',authRoutes);
  router.use('/profile',profileRoutes);
}

module.exports = routerApi;
