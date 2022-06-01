// en este archivo vamos a configurar toda la conexion con la base de datos
const {Sequelize}= require('sequelize');
const {config} = require ('./../config/config');
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true,
  logging: console.log
});
setupModels(sequelize);
sequelize.sync(); //con esto le decimos que cree todas las tablas que definimos en models

module.exports = sequelize;



