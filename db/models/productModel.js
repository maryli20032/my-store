const {Model, DataTypes, Sequelize}= require('sequelize');
const {CATEGORY_TABLE}= require('./categoryModel');

const PRODUCT_TABLE = 'products';
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
    defaultValue: Sequelize.NOW
  }
}

class Product extends Model {

  static associate(models) {
    this.belongsTo(models.Category, { as: 'category' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports = {PRODUCT_TABLE, ProductSchema, Product}
