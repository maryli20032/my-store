//aqui van todas las rutas de los clientes
const express = require ('express');
const router = express.Router();

const CustomerService = require('./../services/customerService');
const service = new CustomerService();

//requerimos a validatorhandler para validar los datos
const validatorHandler = require('./../middlewares/validatorHandler');

//requerimos a authHandler para verificar los permisos segun sus roles
const { checkRoles } = require('./../middlewares/authHandler');

//requerimos a productSchema para poder validar el esquema de datos
const {createCustomerSchema, updateCustomerSchema, getCustomerSchema, deleteCustomerSchema} = require('./../schemas/customerSchema');



router.get('/',
passport.authenticate('jwt', { session: false }),
checkRoles('Admin'),
async(req, res, next)=>{
  try {
    const customer = await service.find(req.query);
  res.json(customer);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
passport.authenticate('jwt', { session: false }),
checkRoles('Admin', 'customer'),
validatorHandler(getCustomerSchema,'params'),
async(req, res, next)=>{
  try {
    const { id } = req.params;
    const customer = await service.findOne(id);
    res.json(customer);
  } catch (error) {
    next(error);
  }
});

router.post('/',
passport.authenticate('jwt', { session: false }),
checkRoles('Admin', 'customer'),
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

router.patch('/:id',
passport.authenticate('jwt', { session: false }),
checkRoles('Admin', 'customer'),
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
passport.authenticate('jwt', { session: false }),
checkRoles('Admin', 'customer'),
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
