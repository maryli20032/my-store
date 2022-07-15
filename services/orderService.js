// aca vamos a tener los metodos para manejar las transacciones de las ordenes
// podemos tener otros métodos que hagan a la lógica del negocio y también el constructor de la clase
// recibimos los datos del routing y nos comunicamos con la bd

const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

const { sequelize } = require('./../libs/sequelizeCommit');

const ItemService = require('./itemService');
const service = new ItemService();

const ProductService = require('./productService');
const serviceProduct = new ProductService();


class OrderService {

  async create(data) {
    try {

      const result = await sequelize.transaction(async (t) => {
        // Then, we do some calls passing this transaction as an option:

        const order = await models.Order.create({
          estate: data.estate,
          customerId: data.customerId
        }, { transaction: t });

        const orderId = order.id;

        data.products.forEach(async (item) => {

          await service.create({
            orderId: orderId,
            productId: item.productId,
            amount: item.amount
          }, { transaction: t });

          const product = await serviceProduct.findOne(item.productId);

          if (!product) {
            throw boom.notFound('producto no encontrado');
          };
          const stock = item.amount;

          await serviceProduct.updateStock(product.id,
            {
              "stock": stock
            }, { transaction: t });

        })


      });
 return result;

      // If the execution reaches this line, the transaction has been committed successfully
      // `result` is whatever was returned from the transaction callback (the `user`, in this case)

    } catch (error) {

      // If the execution reaches this line, an error occurred.
      // The transaction has already been rolled back automatically by Sequelize!
      console.error(error);
    }

  };

  async findbyUser(userId) {
    const rta = await models.Order.findAll({
      /*como tenemos una asociacion entre cliente y ordenes de compras, y tenemos una asociacion entre cliente y usuario
      y tenemos el id del usuario usamos esta clausula where donde le decimos que queremos las ordenes del usuario
      usando la vinculacion que hay entre cliente y usuario.*/

      where: {
        '$customer.user.id$': userId
      },
      include: [{
        association: 'customer',
        include: ['user']
      }
      ]
    });
    return rta;
  };

  async find() {
    const rta = await models.Order.findAll();
    return rta;
  };

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        'items'
      ]
    });

    if (!order) {
      throw boom.notFound('Order Not Found');
    }
    return order;
  };

  async update(id, changes) {
    const order = await models.Order.findByPk(id);
    if (!order) {
      throw boom.notFound('Order Not Found');
    }
    const rta = await order.update(changes);
    return rta;
  };

  async delete(id) {
    const order = await models.Order.findByPk(id);
    if (!order) {
      throw boom.notFound('Order Not Found');
    }
    await order.destroy();
    return { id };
  };
}

module.exports = OrderService;
