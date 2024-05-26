// models/roast.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Product = require('./product'); 
const Roast = sequelize.define('Roast', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  level: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roast_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'roast_id'
    }
  },
  
}, {
  timestamps: false,
  tableName: 'roasts',
});

module.exports = Roast;
