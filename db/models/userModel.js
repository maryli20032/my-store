const {model, DataTypes, sequelize}= require('sequelize');

const USER_TABLE = 'Users';
const UserSchema = {
  id:{
    allowNull: true,
    autoIncrement:true,
    primaryKey: true,
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
  static associate(){

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
