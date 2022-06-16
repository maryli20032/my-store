'use strict';
const {USER_TABLE,UserSchema}= require('./../models/userModel');
const {CUSTOMER_TABLE,CustomerSchema}= require('./../models/customerModel')
module.exports = {

  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint( CUSTOMER_TABLE, {
      fields: ['user_id'],
      type: 'foreign key',

      references: {
        table: USER_TABLE,
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION'

    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
