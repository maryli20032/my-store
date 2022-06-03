'use strict';

const {ORDER_TABLE,OrderSchema}= require('./../models/orderModel');
const {ITEM_TABLE,ItemSchema}= require('./../models/itemModel');


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_TABLE,OrderSchema);
    await queryInterface.createTable(ITEM_TABLE,ItemSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.dropTable(ITEM_TABLE);

  }
};
