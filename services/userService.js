// aca vamos a tener los metodos para manejar las transacciones de los usuarios
// podemos tener otros métodos que hagan a la lógica del negocio y también el constructor de la clase
// recibimos los datos del routing y nos comunicamos con la bd


const {models}= require('./../libs/sequelize');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

class UserService {
  async create(data){
    const hash = await bcrypt.hash(data.password,10);
    const newUser = await models.User.create({
      ...data,
    password:hash});
    delete newUser.dataValues.password;
    return newUser;
  };

  async find(){
    const rta= await models.User.findAll({
      include:['customer']
    });
    return rta;
  };

  async findByEmail(email){
    const rta= await models.User.findOne({
      where: {email}
    });
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
