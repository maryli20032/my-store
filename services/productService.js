// aca vamos a tener los metodos para manejar las transacciones de los productos
// podemos tener otros métodos que hagan a la lógica del negocio y también el constructor de la clase
// recibimos los datos del routing y nos comunicamos con la bd


const { models } = require('../libs/sequelize');
//const boom = require('@hapi/boom');


class ProductService {

  async create(data){

    const newProduct = await models.Product.create(data);
    return newProduct;
  };

  async find(){
    const options = {
      include:['category'],
      where:{}
    }

    const {limit, offset} = query;
    if(limit && offset){
        options.limit = limit;
        options.offset = offset;
    }
    const {price} =query;
    if(price){
        options.where.price = price;
    }
    const {price_min, price_max}= query;
    if (price_min && price_max){
      options.where.price ={
        [op.gte]:price_min,
        [op.lte]: price_max
        };
    }
    const products  = await models.Product.findAll(options);
    return products;
  };

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if(!product){

      //throw boom.notFound('product not found');
    }
    return product;
  };

  async update(id,changes) {
    const product = await models.Product.findByPk(id);
    if(!product){
      //throw boom.notFound('Producto no encontrado')
    }
    const rta = await product.update(changes);
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
