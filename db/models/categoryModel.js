const {model, DataTypes, sequelize}= require('sequelize');

const CATEGORY_TABLE = 'Category';
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
    defaultValue: sequelize.now
  }
}

class Category extends model {
  static associate(models){
    this.hasMany(models.Product,{
      as: 'products',
      foreignKey: 'categoryId'
    });
  };
  static config(sequelize){
    return{
      sequelize, tableName: CATEGORY_TABLE,
      modelName:'category',
      timeStamps: false
    }
  }
}

model.exports = {CATEGORY_TABLE, CategorySchema, Category}
