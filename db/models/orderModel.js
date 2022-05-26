const {model, DataTypes, sequelize}= require('sequelize');

const ORDER_TABLE = 'order';
const OrderSchema = {
  idOrder:{
    allowNull: true,
    autoIncrement:true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field:'id_order'
  },
  estado:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field:'estado'
  },
  idCliente:{
    allowNull: true,
    autoIncrement:true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field:'id_cliente'
  },
  fecha:{
    allowNull:false,
    type: DataTypes.DATE,
    field:'fecha',
    defaultValue: sequelize.now
  },
  createdAt:{
    allowNull:false,
    type: DataTypes.DATE,
    field:'created_at',
    defaultValue: sequelize.now
  }
}

class Order extends model {
  static associate(){

  };
  static config(sequelize){
    return{
      sequelize, tableName: ORDER_TABLE,
      modelName:'order',
      timeStamps: false
    }
  }
}

model.exports = {ORDER_TABLE, OrderSchema, Order}
