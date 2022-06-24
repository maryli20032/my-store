// aca vamos a tener los metodos para manejar las transacciones de las ordenes
// podemos tener otros métodos que hagan a la lógica del negocio y también el constructor de la clase
// recibimos los datos del routing y nos comunicamos con la bd

const {models}= require('./../libs/sequelize');
//const boom = require('@hapi/boom');

class OrderService {
  async create(data){
    const newOrder = await models.Order.create(data);
    return newOrder;
  };

  async findbyUser(userId){
    const rta= await models.Order.findAll({
      /*como tenemos una asociacion entre cliente y ordenes de compras, y tenemos una asociacion entre cliente y usuario
      y tenemos el id del usuario usamos esta clausula where donde le decimos que queremos las ordenes del usuario
      usando la vinculacion que hay entre cliente y usuario.*/

      where:{
        '$customer.user.id$':userId
      },
      include:[{
        association:'customer',
        include: ['user']
      }
    ]
    });
    return rta;
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
      },
      'items'
    ]
    });

    if(!order){
      throw boom.notFound('Order Not Found');
    }
    return order;
  };

  async update(id,changes) {
    const order = await models.Order.findByPk(id);
    if(!order){
      throw boom.notFound('Order Not Found');
    }
    const rta = await order.update(changes);
    return rta;
  };

  async delete(id){
    const order = await models.Order.findByPk(id);
    if(!order){
      throw boom.notFound('Order Not Found');
    }
    await order.destroy();
    return {id};
  };
}

module.exports = OrderService;
