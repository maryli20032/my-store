//aqui van todas las rutas de los productos
const express = require('express');
const router = express.Router();

const ProductService = require('./../services/productService');
const service = new ProductService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const product = service.find(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', (req, res) => {});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
