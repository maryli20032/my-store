//aqui van todas las rutas de las ordenes
const express = require ('express');
const router = express.Router();
const passport = require('passport');

const ItemService = require('./../services/itemService');
const service = new ItemService();

//requerimos a validatorhandler para validar los datos
const validatorHandler = require('./../middlewares/validatorHandler');

//requerimos a authHandler para verificar los permisos segun sus roles
const { checkRoles } = require('./../middlewares/authHandler');

//requerimos a productSchema para poder validar el esquema de datos
const {createItemSchema, updateItemSchema, getItemSchema, deleteItemSchema} = require('./../schemas/itemSchema');


router.get('/',
passport.authenticate('jwt', { session: false }),
checkRoles('Admin', 'customer'),
(req, res, next)=>{

});

router.get('/:id',
passport.authenticate('jwt', { session: false }),
checkRoles('Admin', 'customer'),
validatorHandler(getItemSchema, 'params'),
async(req, res, next)=>{
try {

} catch (error) {
  next(error);
}
});

router.post('/addItem',
passport.authenticate('jwt', { session: false }),
checkRoles('Admin','customer'),
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
passport.authenticate('jwt', { session: false }),
checkRoles('Admin', 'customer'),
validatorHandler(getItemSchema,'params'),
validatorHandler(updateItemSchema,'body'),
async(req, res, next)=>{
try {

} catch (error) {
  next(error);
}
});

router.delete('/:id',
passport.authenticate('jwt', { session: false }),
checkRoles('Admin','customer'),
validatorHandler(deleteItemSchema,'params'),
async(req, res, next)=>{
try {

} catch (error) {
  next(error);
}
});

module.exports = router;
