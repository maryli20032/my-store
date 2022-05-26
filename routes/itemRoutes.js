//aqui van todas las rutas de las ordenes
const express = require ('express');
const router = express.Router();

//requerimos a validatorhandler para validar los datos
const validatorHandler = require('./../middlewares/validatorHandler');

//requerimos a productSchema para poder validar el esquema de datos
const {createItemSchema, updateItemSchema, getItemSchema, deleteItemSchema} = require('./../schemas/itemSchema');


router.get('/',(req, res)=>{

});

router.get('/:id',
validatorHandler(getItemSchema, 'params'),
async(req, res)=>{

});

router.post('/',
validatorHandler(createItemSchema, 'body'),
async(req, res)=>{

});

router.put('/:id',
validatorHandler(getItemSchema,'params'),
validatorHandler(updateItemSchema,'body'),
async(req, res)=>{

});

router.delete('/:id',
validatorHandler(deleteItemSchema,'params'),
async(req, res)=>{

});

module.exports = router;
