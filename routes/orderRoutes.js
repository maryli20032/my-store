//aqui van todas las rutas de las ordenes
const express = require ('express');
const router = express.Router();

//requerimos a validatorhandler para validar los datos
const validatorHandler = require('./../middlewares/validatorHandler');

//requerimos a productSchema para poder validar el esquema de datos
const {createOrderSchema, updateOrderSchema, getOrderSchema, deleteOrderSchema} = require('./../schemas/orderSchema');


router.get('/',(req, res)=>{

});

router.get('/:id',
validatorHandler(getOrderSchema, 'params'),
async(req, res)=>{

});

router.post('/',
validatorHandler(createOrderSchema, 'body'),
async(req, res)=>{

});

router.put('/:id',
validatorHandler(getOrderSchema,'params'),
validatorHandler(updateOrderSchema,'body'),
async(req, res)=>{

});

router.delete('/:id',
validatorHandler(deleteOrderSchema,'params'),
async(req, res)=>{

});

module.exports = router;
