//requerimos a joi
const joi = require ('joi');

//declaramos el tipo de campo de todos los datos
const id = joi.number().integer();
const name = joi.string().min(3).max(15);
const lastName = joi.string().min(3).max(15);
const address =joi.string().max(20);
const phone =joi.string().max(20);

//para crear un usuario cuando creamos un cliente necesitamos los datos del usuario
const email = joi.string().email();
const password = joi.string().min(6).max(20);


//declaramos el esquema para la creacion de un cliente
const createCustomerSchema = joi.object({
  name: name.required(),
  lastName: lastName.required(),
  address: address.required(),
  phone: phone.required(),
  //para crear un usuario cuando creamos un cliente verificamos los datos del user
  user: joi.object({
    email: email.required(),
    password: password.required()
  })

});

//declaramos el esquema para la actualizacion de un cliente
const updateCustomerSchema = joi.object({
  id: id,
  name: name,
  lastName: lastName,
  address: address,
  phone : phone
});

//declaramos el esquema para obtener de un cliente
const getCustomerSchema = joi.object({
  id: id.required()
});

//declaramos el esquema para eliminar un cliente
const deleteCustomerSchema = joi.object({
  id: id.required()
});

//exportamos los esquemas
module.exports= {createCustomerSchema, updateCustomerSchema, getCustomerSchema, deleteCustomerSchema};
