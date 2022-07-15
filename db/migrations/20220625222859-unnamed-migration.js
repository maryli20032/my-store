'use strict';

const {PRODUCT_TABLE,ProductSchema}= require('./../models/productModel');

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable(PRODUCT_TABLE,ProductSchema);
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};
