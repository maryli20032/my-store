//aqui van todas las rutas de las categorias
const express = require ('express');
const router = express.Router();

//requerimos a validatorhandler para validar los datos
const validatorHandler = require('./../middlewares/validatorHandler');

//requerimos a productSchema para poder validar el esquema de datos
const {createCategorySchema, updateCategorySchema, getCategorySchema, deleteCategorySchema} = require('./../schemas/categorySchema');


router.get('/', async(req, res)=>{

});

router.get('/:id',
validatorHandler(getCategorySchema, 'params'),
async (req, res)=>{

});

router.post('/',
validatorHandler(createCategorySchema, 'body'),
async (req, res)=>{

});

router.put('/:id',
validatorHandler(getCategorySchema, 'params'),
validatorHandler(updateCategorySchema, 'body'),
async(req, res)=>{

});

router.delete('/:id',
validatorHandler(deleteCategorySchema, 'params'),
async(req, res)=>{

});

module.exports = router;
