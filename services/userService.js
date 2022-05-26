// aca vamos a tener los metodos para manejar las transacciones de los usuarios
// podemos tener otros métodos que hagan a la lógica del negocio y también el constructor de la clase
// recibimos los datos del routing y nos comunicamos con la bd

const boom = require('@hapi/boom');
const {models}= require('./../libs/sequelize');

class UserService {
  async create(data){
    const newUser = await models.User.create(data);
    return newUser;
  };

  async find(){
    const rta= await models.User.findAll();
    return rta;
  };

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound('User not Found');
    }
    return user;
  };

  async update(id,changes) {
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound('User not Found');
    }
    const rta = await user.update(changes);
    return rta;
  };

  async delete(id){
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound('User not Found');
    }
    await user.destroy();
    return {id};
  };
}

module.exports = UserService;
