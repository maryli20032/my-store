// en este archivo vamos a configurar toda la conexion con la base de datos
const {Sequelize}= require('sequelize');
const {config} = require ('./../config/config');
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const options = {
  dialect: 'postgres',
  //logging: config.isProd ? false : true,
  logging: console.log
}

const sequelize = new Sequelize(config.dbUrl, options);
setupModels(sequelize);

//sequelize.sync();

module.exports = sequelize;



