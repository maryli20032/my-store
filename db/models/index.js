
const { User, UserSchema } = require('./userModel');
const {Category, CategorySchema } = require('./categoryModel');
const {Order, OrderSchema} = require('./orderModel');
const {Customer, CustomerSchema}= require('./customerModel');
const {Item, ItemSchema}= require('./itemModel');
const {Product, ProductSchema}= require('./productModel');

function setupModels(sequelize) {

  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  Item.init(ItemSchema, Item.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);

  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);

}

module.exports = setupModels;
