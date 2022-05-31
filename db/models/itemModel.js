const {Model, DataTypes, Sequelize}= require('sequelize');
const {PRODUCT_TABLE}= require('./customerModel');
const {ORDER_TABLE}= require('./customerModel');

const ITEM_TABLE = 'item';
const ItemSchema = {
  idItem:{
    allowNull: true,
    autoIncrement:true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field:'id_item'
  },
  idProduct:{
    allowNull: false,
    type: DataTypes.INTEGER,
    field:'id_product',
    references:{
      model:PRODUCT_TABLE,
      key:'id_product'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idOrder:{
    allowNull: false,
    type: DataTypes.INTEGER,
    field:'id_order',
    references:{
      model:ORDER_TABLE,
      key: 'id_order'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt:{
    allowNull:false,
    type: DataTypes.DATE,
    field:'created_at',
    defaultValue: Sequelize.NOW
  }
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

module.exports = {ITEM_TABLE, ItemSchema, Item}
