//requerimos a joi
const joi = require ('joi');

//declaramos el tipo de campo de todos los datos
const id = joi.number().integer();
const name = joi.string().min(3).max(15);
const email = joi.string().email();
const password = joi.string();


//declaramos el esquema para la creacion de un usuario
const createUserSchema = joi.object({
name: name.required(),
email: email.required(),
password: password.required()
});

//declaramos el esquema para la actualizacion de un usuario
const updateUserSchema = joi.object({
id: id.required(),
name: name.required(),
email: email.required(),
password: password.required()
});

//declaramos el esquema para obtener de un usuario
const getUserSchema = joi.object({
  id: id.required()
});

//declaramos el esquema para eliminar un usuario
const deleteUserSchema = joi.object({
  id: id.required()
});

//exportamos los esquemas
module.exports= {createUserSchema, updateUserSchema, getUserSchema, deleteUserSchema};
