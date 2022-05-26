const {model, DataTypes, sequelize}= require('sequelize');

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
    allowNull: true,
    autoIncrement:true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field:'id_product'
  },
  idOrder:{
    allowNull: true,
    autoIncrement:true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field:'id_order'
  },
  createdAt:{
    allowNull:false,
    type: DataTypes.DATE,
    field:'created_at',
    defaultValue: sequelize.now
  }
}

class Item extends model {
  static associate(){

  };
  static config(sequelize){
    return{
      sequelize, tableName: ITEM_TABLE,
      modelName:'item',
      timeStamps: false
    }
  }
}

model.exports = {ITEM_TABLE, ItemSchema, Item}
