// models/caffeineLevel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const CaffeineLevel = sequelize.define('CaffeineLevel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  level: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false,
  tableName: 'caffeinelevels',
});

module.exports = CaffeineLevel;
