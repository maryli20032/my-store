//requerimos a joi
const joi = require ('joi');

//declaramos el tipo de campo de todos los datos
const idItem = joi.number().integer();
const idOrder = joi.number().integer();
const idproduct = joi.number().integer();
const amount = joi.number().integer().min(1);



//declaramos el esquema para la creacion de una orden
const createItemSchema = joi.object({
  idOrder : idOrder.required(),
  idproduct : idproduct.required(),
  amount : amount.required()
});

//declaramos el esquema para la actualizacion de una orden
const updateItemSchema = joi.object({

});

//declaramos el esquema para obtener de una orden
const getItemSchema = joi.object({

});

//declaramos el esquema para eliminar una orden
const deleteItemSchema = joi.object({

});

//exportamos los esquemas
module.exports= {createItemSchema, updateItemSchema, getItemSchema, deleteItemSchema};
