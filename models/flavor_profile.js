// models/category.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Product = require('./product'); 

const flavor_profiles = sequelize.define('flavor_profiles', {
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
  flavor: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false,
  tableName: 'flavor_profiles',
});

module.exports = flavor_profiles;
