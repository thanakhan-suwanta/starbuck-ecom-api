// models/productImages.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Product = require('./product'); // Adjust path according to your structure

const product_images = sequelize.define('product_images', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
  },
  image_url: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false,
  tableName: 'product_images',
});

module.exports = product_images;
