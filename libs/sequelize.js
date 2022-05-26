// en este archivo vamos a configurar toda la conexion con la base de datos
const {sequelize}= require('sequelize');
const {config} = require ('./../config/config');
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgress://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const setupModels = require('./../db/models');

const Sequelize = new sequelize ( URI, {
  dialect:'Postgres',
  loggin:true
});
setupModels(sequelize);

module.exports = Sequelize;
