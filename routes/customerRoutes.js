//aqui van todas las rutas de los clientes
const express = require ('express');
const router = express.Router();

const CustomerService = require('./../services/customerService');
const service = new CustomerService();

//requerimos a validatorhandler para validar los datos
const validatorHandler = require('./../middlewares/validatorHandler');

//requerimos a productSchema para poder validar el esquema de datos
const {createCustomerSchema, updateCustomerSchema, getCustomerSchema, deleteCustomerSchema} = require('./../schemas/customerSchema');
const { custom } = require('joi');


router.get('/',async(req, res, next)=>{
  try {
    const customer = await service.find();
  res.json(customer);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
validatorHandler(getCustomerSchema,'params'),
async(req, res, next)=>{
  try {
    const { id } = req.params;
    const customer = await service.find(id);
    res.json(customer);
  } catch (error) {
    next(error);
  }
});

router.post('/',
validatorHandler(createCustomerSchema, 'body'),
async(req, res, next)=>{
  try {
    const body = req.body;
    const customer = await service.create(body);
    res.json(customer);

  } catch (error) {
    next(error);
  }
});

router.put('/:id',
validatorHandler(getCustomerSchema,'params'),
validatorHandler(updateCustomerSchema,'body'),
async(req, res, next)=>{
  try {
    const {id}  = req.params;
    const body = req.body;
    const customer = await service.update(id, body);
    res.json(customer);

  } catch (error) {
    next(error);
  }
});

router.delete('/:id',
validatorHandler(deleteCustomerSchema,'params'),
async(req, res, next)=>{
  try {
    const {id}  = req.params;
    await service.delete(id);
    res.json(id);

  } catch (error) {
    next(error);
  }
});

module.exports = router;
