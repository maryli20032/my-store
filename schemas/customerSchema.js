//requerimos a joi
const joi = require ('joi');

//declaramos el tipo de campo de todos los datos
const id = joi.string().uuid();
const name = joi.string().min(3).max(15);


//declaramos el esquema para la creacion de un cliente
const createCustomerSchema = joi.object({

});

//declaramos el esquema para la actualizacion de un cliente
const updateCustomerSchema = joi.object({

});

//declaramos el esquema para obtener de un cliente
const getCustomerSchema = joi.object({

});

//declaramos el esquema para eliminar un cliente
const deleteCustomerSchema = joi.object({

});

//exportamos los esquemas
module.exports= {createCustomerSchema, updateCustomerSchema, getCustomerSchema, deleteCustomerSchema};
