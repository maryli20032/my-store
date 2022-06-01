//requerimos a joi
const joi = require ('joi');

//declaramos el tipo de campo de todos los datos
const id = joi.number().integer();
const name = joi.string().min(3).max(15);
const price = joi.number().integer().min(10);
const image = joi.string().uri();
const idCategory = joi.number().integer();

//declaramos el esquema para la creacion de un producto
const createProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  idCategory: idCategory.required()
});

//declaramos el esquema para la actualizacion de un producto
const updateProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

//declaramos el esquema para obtener de un producto
const getProductSchema = joi.object({
  id: id.required()
});

//declaramos el esquema para eliminar un producto
const deleteProductSchema = joi.object({

});

//exportamos los esquemas
module.exports= {createProductSchema, updateProductSchema, getProductSchema, deleteProductSchema};
