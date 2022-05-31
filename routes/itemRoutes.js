//aqui van todas las rutas de las ordenes
const express = require ('express');
const router = express.Router();

const ItemService = require('./../services/itemService');
const service = new ItemService();

//requerimos a validatorhandler para validar los datos
const validatorHandler = require('./../middlewares/validatorHandler');

//requerimos a productSchema para poder validar el esquema de datos
const {createItemSchema, updateItemSchema, getItemSchema, deleteItemSchema} = require('./../schemas/itemSchema');


router.get('/',(req, res, next)=>{

});

router.get('/:id',
validatorHandler(getItemSchema, 'params'),
async(req, res, next)=>{

});

router.post('/addItem',
validatorHandler(createItemSchema, 'body'),
async(req, res, next)=>{
  try {
    const body = req.body;
    const newItem = await service.create(body);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
});

router.put('/:id',
validatorHandler(getItemSchema,'params'),
validatorHandler(updateItemSchema,'body'),
async(req, res, next)=>{

});

router.delete('/:id',
validatorHandler(deleteItemSchema,'params'),
async(req, res, next)=>{

});

module.exports = router;
