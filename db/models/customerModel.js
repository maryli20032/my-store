const {model, DataTypes, sequelize}= require('sequelize');
const {USER_TABLE} = require('./userModel');

const CUSTOMER_TABLE = 'customer';
const CustomerSchema = {
  idCustomer:{
    allowNull: true,
    autoIncrement:true,
    primaryKey: true,
    field:'id_customer',
    type: DataTypes.INTEGER
  },
  idUser:{
    allowNull: true,
    field:'id_user',
    unique: true,
    type: DataTypes.INTEGER,
    references:{
      model:USER_TABLE,
      key: 'id_user'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  nameCustomer:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field:'name_customer',
  },
  address:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  createdAt:{
    allowNull:false,
    type: DataTypes.DATE,
    field:'created_at',
    defaultValue: sequelize.now
  }
}

class Customer extends model {
  static associate(models){
    this.belongsTo(models.User, {as:'user'});
  };
  static config(sequelize){
    return{
      sequelize, tableName: CUSTOMER_TABLE,
      modelName:'customer',
      timeStamps: false
    }
  }
}

model.exports = {CUSTOMER_TABLE, CustomerSchema, Customer}
