const {model, DataTypes, sequelize}= require('sequelize');
const {CATEGORY_TABLE}= require('./customerModel');

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
    allowNull: false,
    type: DataTypes.INTEGER,
    field:'id_category',
    references:{
      model: CATEGORY_TABLE,
      key: 'id_category'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt:{
    allowNull:false,
    type: DataTypes.DATE,
    field:'created_at',
    defaultValue: sequelize.now
  }
}

class Product extends model {
  static associate(models){
    this.belongsTo(models.Category,{
      as:'category'
    });
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
