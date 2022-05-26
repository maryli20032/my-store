//aqui van todas las rutas de los usuarios
const express = require ('express');
const router = express.Router();

//requerimos a validatorhandler para validar los datos
const validatorHandler = require('./../middlewares/validatorHandler');

//requerimos a productSchema para poder validar el esquema de datos
const {createUserSchema, updateUserSchema, getUserSchema, deleteUserSchema} = require('./../schemas/userSchema');


router.get('/',(req, res)=>{

});

router.get('/:id',
validatorHandler(getUserSchema,'params'),
async(req, res)=>{

});

router.post('/',
validatorHandler(createUserSchema,'body'),
async(req, res)=>{

});

router.put('/:id',
validatorHandler(getUserSchema,'params'),
validatorHandler(updateUserSchema, 'body'),
async(req, res)=>{

});

router.delete('/:id',
validatorHandler(deleteUserSchema, 'params'),
async(req, res)=>{

});

module.exports = router;
