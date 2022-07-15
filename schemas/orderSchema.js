//requerimos a joi
const joi = require ('joi');

//declaramos el tipo de campo de todos los datos
const id = joi.number().integer();
const customerId = joi.number().integer();
const estate = joi.string().min(3).max(15);
const fecha = joi.date();

const productId = joi.number().integer();
const amount = joi.number().integer();


//declaramos el esquema para la creacion de una orden
const createOrderSchema = joi.object({
estate: estate.required(),
customerId: customerId.required(),
products : joi.array().items(joi.object().keys({
  productId:productId,
  amount: amount
 }))
});

//declaramos el esquema para la actualizacion de una orden
const updateOrderSchema = joi.object({
estate: estate,
fecha: fecha
});

//declaramos el esquema para obtener de una orden
const getOrderSchema = joi.object({
  id: id
});

//declaramos el esquema para eliminar una orden
const deleteOrderSchema = joi.object({
  id: id
});

//exportamos los esquemas
module.exports= {createOrderSchema, updateOrderSchema, getOrderSchema, deleteOrderSchema};
