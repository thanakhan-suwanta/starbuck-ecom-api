// models/productImages.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Product = require('./product'); // Adjust path according to your structure

const ProductImages = sequelize.define('ProductImages', {
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
  tableName: 'productimages',
});

module.exports = ProductImages;
