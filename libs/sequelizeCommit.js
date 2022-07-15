// en este archivo vamos a configurar toda la conexion con la base de datos
const Sequelize = require('sequelize');
const conn ={};

const {config} = require ('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: false,
  operatorsAliases: 'false'
});
conn.sequelize = sequelize;
conn.Sequelize =Sequelize;

module.exports = conn;



