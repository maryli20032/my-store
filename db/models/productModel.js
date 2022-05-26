const {model, DataTypes, sequelize}= require('sequelize');

const PRODUCT_TABLE = 'product';
const ProductSchema = {
  idProduct:{
    allowNull: true,
    autoIncrement:true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field:'id_product'
  },
  nameProduct:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field:'name_product'
  },
  codeProduct:{
    allowNull: false,
    type: DataTypes.STRING,
    field:'code_product'
  },
  precioProduct:{
    allowNull: false,
    type: DataTypes.DOUBLE,
    field:'precio_product'
  },
  stockProduct:{
    allowNull: false,
    type: DataTypes.INTEGER,
    field:'stock_product'
  },
  idCategory:{
    allowNull: true,
    autoIncrement:true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field:'id_category'
  },
  createdAt:{
    allowNull:false,
    type: DataTypes.DATE,
    field:'created_at',
    defaultValue: sequelize.now
  }
}

class Product extends model {
  static associate(){

  };
  static config(sequelize){
    return{
      sequelize, tableName: PRODUCT_TABLE,
      modelName:'product',
      timeStamps: false
    }
  }
}

model.exports = {PRODUCT_TABLE, ProductSchema, Product}
