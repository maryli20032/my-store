const {Model, DataTypes, Sequelize}= require('sequelize');

const {CUSTOMER_TABLE}= require('./customerModel');

const ORDER_TABLE = 'orders';
const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  estate:{
    allowNull: false,
    type: DataTypes.STRING,
    field:'estado'
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,

    references: {
      model: CUSTOMER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'NO ACTION'

  },
  Date:{
    allowNull:false,
    type: DataTypes.DATE,
    field:'date',
    defaultValue: Sequelize.NOW
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  //este es un campo virtual para calcular el total de la orden de compra
  total: {
    type: DataTypes.VIRTUAL,
    get() {
      if (this.items && this.items.length > 0) {
        return this.items.reduce((total, item) => {
          return total + (item.price * item.ItemOrder.amount);
        }, 0);
      }
      return 0;
    }
  }

}

class Order extends Model {

  static associate(models) {

    this.belongsTo(models.Customer, {
      as: 'customer',
    });

    this.belongsToMany(models.Product, {
      as: 'items',
      through: models.ItemOrder,
      foreignKey: 'orderId',
      otherKey: 'productId'
    });


  }


  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  }
}

module.exports = {ORDER_TABLE, OrderSchema, Order}
