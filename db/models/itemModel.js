const {Model, DataTypes, Sequelize}= require('sequelize');
const {PRODUCT_TABLE}= require('./productModel');
const {ORDER_TABLE}= require('./orderModel');

const ITEM_TABLE = 'items';
const ItemSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,

    references: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'

  },
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: DataTypes.INTEGER,

    references: {
      model: ORDER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'

  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },

}

class Item extends Model {
  static associate(){

  };
  static config(sequelize){
    return{
      sequelize,
      tableName: ITEM_TABLE,
      modelName:'Item',
      timestamps: false
    }
  }
}

module.exports = {ITEM_TABLE, ItemSchema, Item};
