const {Model, DataTypes, Sequelize}= require('sequelize');

//const {CUSTOMER_TABLE}= require('./customerModel');

const USER_TABLE = 'users';
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
    defaultValue: Sequelize.now
  }
}

class User extends Model {
  static associate(models){
    this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'userId'
    });
  }

  static config(sequelize) {
    return{
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = {USER_TABLE, UserSchema, User};
