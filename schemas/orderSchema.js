//requerimos a joi
const joi = require ('joi');

//declaramos el tipo de campo de todos los datos
const id = joi.string().uuid();
const name = joi.string().min(3).max(15);


//declaramos el esquema para la creacion de una orden
const createOrderSchema = joi.object({

});

//declaramos el esquema para la actualizacion de una orden
const updateOrderSchema = joi.object({

});

//declaramos el esquema para obtener de una orden
const getOrderSchema = joi.object({

});

//declaramos el esquema para eliminar una orden
const deleteOrderSchema = joi.object({

});

//exportamos los esquemas
module.exports= {createOrderSchema, updateOrderSchema, getOrderSchema, deleteOrderSchema};
