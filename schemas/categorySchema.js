//requerimos a joi
const joi = require ('joi');

//declaramos el tipo de campo de todos los datos
const idCategory = joi.number().integer();
const nameCategory = joi.string().min(3).max(15);


//declaramos el esquema para la creacion de una categoría
const createCategorySchema = joi.object({
  nameCategory: nameCategory.required()
});

//declaramos el esquema para la actualizacion de una categoría
const updateCategorySchema = joi.object({
  nameCategory: nameCategory
});

//declaramos el esquema para obtener de una categoría
const getCategorySchema = joi.object({
  idCategory: idCategory.required()
});

//declaramos el esquema para eliminar una categoría
const deleteCategorySchema = joi.object({
  idCategory: idCategory.required()
});

//exportamos los esquemas
module.exports= {createCategorySchema, updateCategorySchema, getCategorySchema, deleteCategorySchema};
