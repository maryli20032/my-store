const {Model, DataTypes, Sequelize}= require('sequelize');

const ORDER_TABLE = 'order';
const OrderSchema = {
  idOrder:{
    allowNull: true,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field:'id_order'
  },
  estado:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field:'estado'
  },
  idCliente:{
    allowNull: true,
    type: DataTypes.INTEGER,
    field:'id_cliente'
  },
  fecha:{
    allowNull:false,
    type: DataTypes.DATE,
    field:'fecha',
    defaultValue: Sequelize.now
  },
  createdAt:{
    allowNull:false,
    type: DataTypes.DATE,
    field:'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Order extends Model {
  static associate(models){
    this.belongsToMany(models.Product,{
      as:'item',
      through: models.Item,
      foreignKey: 'id_order',
      otherKey: 'id_product'
    })
  };
  static config(sequelize){
    return{
      sequelize, 
      tableName: ORDER_TABLE,
      modelName:'Order',
      timestamps: false
    }
  }
}

module.exports = {ORDER_TABLE, OrderSchema, Order}
