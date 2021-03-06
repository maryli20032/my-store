'use strict';

const {USER_TABLE,UserSchema}= require('./../models/userModel');



module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE,UserSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);

  }
};
