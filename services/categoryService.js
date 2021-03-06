// aca vamos a tener los metodos para manejar las transacciones de las categorias
// podemos tener otros métodos que hagan a la lógica del negocio y también el constructor de la clase
// recibimos los datos del routing y nos comunicamos con la bd


const {models}= require('./../libs/sequelize');
const boom = require('@hapi/boom');

class CategoryService {
  async create(data){
    const newCategory = await models.Category.create(data);
    return newCategory;
  };

  async find(){
    const categories= await models.Category.findAll();
    return categories;
  };

  async findOne(id) {
    const category = await models.Category.findByPk(id,{
      include:['products']
    });
    if(!category){
     throw boom.notFound('Category not Found');
    }
    return category;
  };

  async update(id, changes) {
    const category = await models.Category.findByPk(id);
    if(!category){
     throw boom.notFound('Category not Found');
    }
    const rta = await category.update(changes);
    return rta;
  };

  async delete(id){
    const category = await models.Category.findByPk(id);
    if(!category){
     throw boom.notFound('Category not Found');
    }
    await category.destroy();
    return {id};
  };
}

module.exports = CategoryService;
