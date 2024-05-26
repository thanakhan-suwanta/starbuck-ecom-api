// models/category.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Product = require('./product'); 

const grind_options = sequelize.define('grind_options', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'id',
    },
  },
  grind_option: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false,
  tableName: 'grind_options',
});

module.exports = grind_options;
