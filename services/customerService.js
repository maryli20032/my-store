// aca vamos a tener los metodos para manejar las transacciones de los clientes
// podemos tener otros métodos que hagan a la lógica del negocio y también el constructor de la clase
// recibimos los datos del routing y nos comunicamos con la bd

const boom = require('@hapi/boom');
const {models}= require('./../libs/sequelize');

class CustomerService {
  async create(data){
    const newCustomer = await modelsCustomer.create(data,{
      include:['user']
    });
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
