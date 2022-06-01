// aca vamos a tener los metodos para manejar las transacciones de los productos
// podemos tener otros métodos que hagan a la lógica del negocio y también el constructor de la clase
// recibimos los datos del routing y nos comunicamos con la bd

//const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');


class ProductService {

  async create(data){

    const newProduct = await models.Product.create(data);
    return newProduct;
  };

  async find(){
    const rta = await models.Product.findAll({
      include:['category']}
    );
    return rta;
  };

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if(!product){
      //throw boom.notFound('Producto no encontrado')
    }
    return product;
  };

  async update(id,changes) {
    const user = await models.User.findByPk(id);
    if(!product){
      //throw boom.notFound('Producto no encontrado')
    }
    const rta = await user.update(changes);
    return rta;
  };

  async delete(id){
    const product = await models.Product.findByPk(id);
    if(!product){
      //throw boom.notFound('Producto no encontrado')
    }
    await product.destroy();
    return {id};
  };
}

module.exports = ProductService;
