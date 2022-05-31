// aca vamos a tener los metodos para manejar las transacciones de los items
// podemos tener otros métodos que hagan a la lógica del negocio y también el constructor de la clase
// recibimos los datos del routing y nos comunicamos con la bd

//const boom = require('@hapi/boom');
const {models}= require('./../libs/sequelize');

class ItemService {
  async create(data){
    const newItem = await models.Item.create(data);
    return newItem;
  };

  async find(){
    const rta= await models.Item.findAll();
    return rta;
  };

  async findOne(id) {
    const item = await models.Item.findByPk(id,{
      include:[
        {
          Association:'customer',
          Include:['user']
        },
        'Items'
      ]
    });

    if(!item){
      //throw boom.notFound('Item no encontrado');
    }
    return item;
  };

  async update(id,changes) {
    const item = await models.Item.findByPk(id);
    if(!item){
      //throw boom.notFound('Item no encontrado');
    }
    const rta = await item.update(changes);
    return rta;
  };

  async delete(id){
    const item = await models.Item.findByPk(id);
    if(!item){
      //throw boom.notFound('Item no encontrado');
    }
    await item.destroy();
    return {id};
  };
}

module.exports = ItemService;
