// aca vamos a tener los metodos para manejar las transacciones de los clientes
// podemos tener otros métodos que hagan a la lógica del negocio y también el constructor de la clase
// recibimos los datos del routing y nos comunicamos con la bd

const {models}= require('./../libs/sequelize');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

class CustomerService {
  async create(data){
    const hash = await bcrypt.hash(data.user.password,10);
    const newData ={
      ...data,
      user:{
        ...data.user,
        password:hash
      }
    }
    const newCustomer = await models.Customer.create(newData,{
      include:['user']
    });
    delete newCustomer.dataValues.user.dataValues.password;
    return newCustomer;
  };

  async find(){

    const rta= await models.Customer.findAll({
      include:['user']
    });
    return rta;
  };

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if(!customer){
      throw boom.notFound('Customer not Found');
    }
    return customer;
  };

  async update(id,changes) {
    const customer = await models.Customer.findByPk(id);
    if(!customer){
      throw boom.notFound('Customer not Found');
    }
    const rta = await customer.update(changes);
    return rta;
  };

  async delete(id){
    const customer = await models.Customer.findByPk(id);
    if(!customer){
      throw boom.notFound('Customer not Found');
    }
    await customer.destroy();
    return {id};
  };
}

module.exports = CustomerService;
