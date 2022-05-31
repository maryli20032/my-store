// aca vamos a tener los metodos para manejar las transacciones de las ordenes
// podemos tener otros métodos que hagan a la lógica del negocio y también el constructor de la clase
// recibimos los datos del routing y nos comunicamos con la bd

//const boom = require('@hapi/boom');
const {models}= require('./../libs/sequelize');

class OrderService {
  async create(data){
    const newOrder = await models.Order.create(data);
    return newOrder;
  };

  async find(){
    const rta= await models.Order.findAll();
    return rta;
  };

  async findOne(id) {
    const order = await models.Order.findByPk(id,{
      include:[{
        association:'customer',
        include: ['user']
      }]
    });

    if(!order){
      //throw boom.notFound('Order Not Found');
    }
    return order;
  };

  async update(id,changes) {
    const order = await models.Order.findByPk(id);
    if(!order){
      //throw boom.notFound('Order Not Found');
    }
    const rta = await order.update(changes);
    return rta;
  };

  async delete(id){
    const order = await models.Order.findByPk(id);
    if(!order){
      //throw boom.notFound('Order Not Found');
    }
    await order.destroy();
    return {id};
  };
}

module.exports = OrderService;
