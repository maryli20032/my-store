const {Model, DataTypes, Sequelize}= require('sequelize');
const {CATEGORY_TABLE}= require('./categoryModel');

const PRODUCT_TABLE = 'products';
const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  code:{
    allowNull: false,
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,

    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'NO ACTION'

  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
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
