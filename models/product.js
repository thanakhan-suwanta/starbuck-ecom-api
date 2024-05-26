const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
  },
  region: {
    type: DataTypes.STRING,
  },
  weight: {
    type: DataTypes.INTEGER,
  },
  roast_id: {
    type: DataTypes.INTEGER,
  },
  caffeine_level_id: {
    type: DataTypes.INTEGER,
  },
  stock: {
    type: DataTypes.INTEGER,
  },
}, {
  timestamps: false,
  tableName: 'products',
});

module.exports = Product;

