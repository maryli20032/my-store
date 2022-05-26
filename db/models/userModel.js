const {model, DataTypes, sequelize}= require('sequelize');
const {CUSTOMER_TABLE}= require('./customerModel');

const USER_TABLE = 'Users';
const UserSchema = {
  idUser:{
    allowNull: true,
    autoIncrement:true,
    primaryKey: true,
    field:'id_user',
    type: DataTypes.INTEGER
  },
  email:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password:{
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt:{
    allowNull:false,
    type: DataTypes.DATE,
    field:'created_at',
    defaultValue: sequelize.now
  }
}

class User extends model {
  static associate(models){
    this.hasOne(models.customer,{
      as: 'customer',
      foreignKey: 'userId'
    })
  };
  static config(sequelize){
    return{
      sequelize, tableName: USER_TABLE,
      modelName:'user',
      timeStamps: false
    }
  }
}

model.exports = {USER_TABLE, UserSchema, User}
