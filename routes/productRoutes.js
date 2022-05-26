//aqui van todas las rutas de los productos
const express = require('express');
const router = express.Router();

const ProductService = require('./../services/productService');
const service = new ProductService();

//requerimos a validatorhandler para validar los datos
const validatorHandler = require('./../middlewares/validatorHandler');

//requerimos a productSchema para poder validar el esquema de datos
const {createProductSchema, updateProductSchema, getProductSchema, deleteProductSchema} = require('./../schemas/productSchema');

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/:id',
validatorHandler(getProductSchema, 'params'),
 async(req, res) => {
  try {
    const { id } = req.params;
    const product = await service.find(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/',
validatorHandler(createProductSchema, 'body'),
async(req, res) => {});

router.put('/:id',
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),
async(req, res) => {
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
(req, res) => {});

module.exports = router;
