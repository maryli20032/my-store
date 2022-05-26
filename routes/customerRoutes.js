//aqui van todas las rutas de los clientes
const express = require ('express');
const router = express.Router();

//requerimos a validatorhandler para validar los datos
const validatorHandler = require('./../middlewares/validatorHandler');

//requerimos a productSchema para poder validar el esquema de datos
const {createCustomerSchema, updateCustomerSchema, getCustomerSchema, deleteCustomerSchema} = require('./../schemas/customerSchema');


router.get('/',(req, res)=>{

});

router.get('/:id',
validatorHandler(getCustomerSchema,'params'),
async(req, res)=>{

});

router.post('/',
validatorHandler(createCustomerSchema, 'body'),
async(req, res)=>{

});

router.put('/:id',
validatorHandler(getCustomerSchema,'params'),
validatorHandler(updateCustomerSchema,'body'),
async(req, res)=>{

});

router.delete('/:id',
validatorHandler(deleteCustomerSchema,'params'),
async(req, res)=>{

});

module.exports = router;
