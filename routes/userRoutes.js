//aqui van todas las rutas de los usuarios
const express = require ('express');
const router = express.Router();
const passport = require('passport');

const UserService = require('./../services/userService');
const service = new UserService();

//requerimos a validatorhandler para validar los datos
const validatorHandler = require('./../middlewares/validatorHandler');

//requerimos a authHandler para verificar los permisos segun sus roles
const { checkRoles } = require('./../middlewares/authHandler');

//requerimos a productSchema para poder validar el esquema de datos
const {createUserSchema, updateUserSchema, getUserSchema, deleteUserSchema} = require('./../schemas/userSchema');


router.get('/',
passport.authenticate('jwt', { session: false }),
checkRoles('Admin'),
async(req, res, next)=>{
try {
  const users = await service.find(req.query);
      res.json(users);
} catch (error) {
  next(error);
}
});

router.get('/:id',
passport.authenticate('jwt', { session: false }),
checkRoles('Admin'),
validatorHandler(getUserSchema,'params'),
async(req, res, next)=>{
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/',
passport.authenticate('jwt', { session: false }),
checkRoles('Admin'),
validatorHandler(createUserSchema,'body'),
async(req, res, next)=>{
  try {
    const body = req.body;
    const user = await service.create(body);
    res.json(user);

  } catch (error) {
    next(error);
  }
});

router.patch('/:id',
passport.authenticate('jwt', { session: false }),
checkRoles('Admin'),
validatorHandler(getUserSchema,'params'),
validatorHandler(updateUserSchema, 'body'),
async(req, res, next)=>{
  try {
    const {id}  = req.params;
    const body = req.body;
    const user = await service.update(id, body);
    res.json(user);

  } catch (error) {
    next(error);
  }
});

router.delete('/:id',
passport.authenticate('jwt', { session: false }),
checkRoles('Admin'),
validatorHandler(deleteUserSchema, 'params'),
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
