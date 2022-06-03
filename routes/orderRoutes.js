//aqui van todas las rutas de las ordenes
const express = require ('express');
const router = express.Router();

const OrderService = require('./../services/orderService');
const service = new OrderService();

//requerimos a validatorhandler para validar los datos
const validatorHandler = require('./../middlewares/validatorHandler');

//requerimos a productSchema para poder validar el esquema de datos
const {createOrderSchema, updateOrderSchema, getOrderSchema, deleteOrderSchema} = require('./../schemas/orderSchema');


router.get('/',(req, res, next)=>{
try {

} catch (error) {

}
});

router.get('/:id',
validatorHandler(getOrderSchema, 'params'),
async(req, res, next)=>{
  try {
    const { id } = req.params;
    const order = await service.findOne(id);
    res.json(order);
  } catch (error) {
    next(error);
  }
});

router.post('/',
validatorHandler(createOrderSchema, 'body'),
async(req, res, next)=>{
  try {
    const body = req.body;
    const order = await service.create(body);
    res.json(order);

  } catch (error) {
    next(error);
  }
});

router.put('/:id',
validatorHandler(getOrderSchema,'params'),
validatorHandler(updateOrderSchema,'body'),
async(req, res, next)=>{
  try {
    const {id}  = req.params;
    const body = req.body;
    const order = await service.update(id, body);
    res.json(order);

  } catch (error) {
    next(error);
  }
});

router.delete('/:id',
validatorHandler(deleteOrderSchema,'params'),
async(req, res, next)=>{
  try {
    const {id}  = req.params;
    await order.service.delete(id);
    res.json(id);

  } catch (error) {
    next(error);
  }
});

module.exports = router;
