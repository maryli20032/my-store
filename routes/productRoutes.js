//aqui van todas las rutas de los productos
const express = require('express');
const router = express.Router();

const ProductService = require('./../services/productService');
const service = new ProductService();

//requerimos a validatorhandler para validar los datos
const validatorHandler = require('./../middlewares/validatorHandler');

//requerimos a productSchema para poder validar el esquema de datos
const {createProductSchema, updateProductSchema, getProductSchema, deleteProductSchema, queryProductSchema} = require('./../schemas/productSchema');



router.get('/',
validatorHandler (queryProductSchema, 'query'),
  async (req, res, next) => {
    try {
      const products = await service.find(req.query);
      res.json(products);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
validatorHandler(createProductSchema, 'body'),
async(req, res, next) => {
  try {
    const body = req.body;
    const product = await service.create(body);
    res.json(product);

  } catch (error) {
    next(error);
  }
});

router.patch('/:id',
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),
async(req, res, next) => {
  try {
    const {id}  = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);

  } catch (error) {
    next(error);
  }
});

router.delete('/:id',
validatorHandler(deleteProductSchema,'params'),
async(req, res, next) => {
  try {
    const {id}  = req.params;
    await service.delete(id);
    res.json(id);

  } catch (error) {
    next(error);
  }
});

module.exports = router;
