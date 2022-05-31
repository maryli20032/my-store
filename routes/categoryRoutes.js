//aqui van todas las rutas de las categorias
const express = require ('express');
const router = express.Router();

const CategoryService = require('./../services/categoryService');
const service = new CategoryService();

//requerimos a validatorhandler para validar los datos
const validatorHandler = require('./../middlewares/validatorHandler');

//requerimos a productSchema para poder validar el esquema de datos
const {createCategorySchema, updateCategorySchema, getCategorySchema, deleteCategorySchema} = require('./../schemas/categorySchema');


router.get('/', async(req, res, next)=>{
  try {
    const categories =await service.find();
  res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
validatorHandler(getCategorySchema, 'params'),
async (req, res, next)=>{
  try {
    const { id } = req.params;
    const category = await service.find(id);
    res.json(category);
  } catch (error) {
    next(error);
  }
});

router.post('/',
validatorHandler(createCategorySchema, 'body'),
async (req, res, next)=>{
  try {
    const body = req.body;
    const category = await service.create(body);
    res.json(category);

  } catch (error) {
    next(error);
  }
});

router.put('/:id',
validatorHandler(getCategorySchema, 'params'),
validatorHandler(updateCategorySchema, 'body'),
async(req, res, next)=>{
  try {
    const {id}  = req.params;
    const body = req.body;
    const category = await service.update(id, body);
    res.json(category);

  } catch (error) {
    next(error);
  }
});

router.delete('/:id',
validatorHandler(deleteCategorySchema, 'params'),
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
