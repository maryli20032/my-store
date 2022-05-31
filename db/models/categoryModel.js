const {Model, DataTypes, Sequelize}= require('sequelize');

const CATEGORY_TABLE = 'Categories';
const CategorySchema = {
  idCategory:{
    allowNull: true,
    autoIncrement:true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field:'id_category'
  },
  nameCategory:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field:'name_category'
  },
  createdAt:{
    allowNull:false,
    type: DataTypes.DATE,
    field:'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Category extends Model {
  static associate(models){
    this.hasMany(models.Product,{
      as: 'product',
      foreignKey: 'categoryId'
    });
  };
  static config(sequelize){
    return{
      sequelize, 
      tableName: CATEGORY_TABLE,
      modelName:'Category',
      timestamps: false
    }
  }
}

module.exports = {CATEGORY_TABLE, CategorySchema, Category}
