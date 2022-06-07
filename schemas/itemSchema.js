//requerimos a joi
const joi = require ('joi');

//declaramos el tipo de campo de todos los datos
const idItem = joi.number().integer();
const orderId = joi.number().integer();
const  productId = joi.number().integer();
const amount = joi.number().integer().min(1);



//declaramos el esquema para la creacion de una orden
const createItemSchema = joi.object({
  orderId : orderId.required(),
  productId :  productId.required(),
  amount : amount.required()
});


//declaramos el esquema para la actualizacion de una orden
const updateItemSchema = joi.object({
  orderId : orderId,
  productId :  productId,
  amount : amount
});

//declaramos el esquema para obtener de una orden
const getItemSchema = joi.object({
idItem : idItem.required()
});

//declaramos el esquema para eliminar una orden
const deleteItemSchema = joi.object({
  idItem : idItem.required()
});

//exportamos los esquemas
module.exports= {createItemSchema, updateItemSchema, getItemSchema, deleteItemSchema};
