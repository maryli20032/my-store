const {Model, DataTypes, Sequelize}= require('sequelize');
const {USER_TABLE} = require('./userModel');

const CUSTOMER_TABLE = 'customers';
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
    defaultValue: Sequelize.NOW
  }
}

class Customer extends Model {
  static associate(models){
    this.belongsTo(models.User, {as:'user'});
    this.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'customerId'
    });
  };
  static config(sequelize){
    return{
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName:'Customer',
      timestamps: false
    }
  }
}

module.exports = {CUSTOMER_TABLE, CustomerSchema, Customer}
