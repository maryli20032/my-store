//requerimos a joi
const joi = require ('joi');

//declaramos el tipo de campo de todos los datos
const idOrder = joi.number().integer();
const estado = joi.string().min(3).max(15);
const fecha = joi.date();


//declaramos el esquema para la creacion de una orden
const createOrderSchema = joi.object({
estado: estado.required(),
fecha: fecha.required()
});

//declaramos el esquema para la actualizacion de una orden
const updateOrderSchema = joi.object({
idOrder: idOrder.required(),
estado: estado.required(),
fecha: fecha.required()
});

//declaramos el esquema para obtener de una orden
const getOrderSchema = joi.object({
  idOrder: idOrder.required()
});

//declaramos el esquema para eliminar una orden
const deleteOrderSchema = joi.object({
  idOrder: idOrder.required()
});

//exportamos los esquemas
module.exports= {createOrderSchema, updateOrderSchema, getOrderSchema, deleteOrderSchema};
