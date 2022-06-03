//requerimos a joi
const joi = require ('joi');

//declaramos el tipo de campo de todos los datos
const id = joi.number().integer();
const name = joi.string().min(3).max(15);
const price = joi.number();
const image = joi.string().uri();
const categoryId = joi.number().integer();
const description = joi.string().min(1).max(100);
const code = joi.string().min(1).max(15);
const stock = joi.number().integer().min(10);


//declaramos el esquema para la creacion de un producto
const createProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  categoryId: categoryId.required(),
  description : description.required(),
  code : code.required(),
  stock : stock.required()
});

//declaramos el esquema para la actualizacion de un producto
const updateProductSchema = joi.object({
  name: name,
  price: price,
  image: image ,
  description : description,
  categoryId: categoryId,
  code : code,
  stock : stock
});

//declaramos el esquema para obtener de un producto
const getProductSchema = joi.object({
  id: id.required()
});

//declaramos el esquema para eliminar un producto
const deleteProductSchema = joi.object({
  id: id.required()
});

//exportamos los esquemas
module.exports= {createProductSchema, updateProductSchema, getProductSchema, deleteProductSchema};
