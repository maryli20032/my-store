
const { User, UserSchema } = require('./userModel');
const {Product, ProductSchema}= require('./productModel');
const {Category, CategorySchema } = require('./categoryModel');
const {Order, OrderSchema} = require('./orderModel');
const {Customer, CustomerSchema}= require('./customerModel');
const {Item, ItemSchema}= require('./itemModel');

function setupModels(sequelize) {

  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  //Customer.init(CustomerSchema, Customer.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Item.init(ItemSchema, Item.config(sequelize));

  Customer.associate(sequelize.models);
  User.associate(sequelize.models);

  Category.associate(sequelize.models);
  Item.associate(sequelize.models);

}

module.exports = setupModels;
