const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
// Product model
const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    region: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    roast_level: DataTypes.INTEGER,
    caffeine_level: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  });
  
  // ProductImage model
  const ProductImage = sequelize.define('ProductImage', {
    product_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING
  });
  
  // Category model
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  });
  
  // Roast model
  const Roast = sequelize.define('Roast', {
    level: DataTypes.STRING
  });
  
  // GrindOption model
  const GrindOption = sequelize.define('GrindOption', {
    product_id: DataTypes.INTEGER,
    grind_option: DataTypes.STRING
  });
  
  // CaffeineLevel model
  const CaffeineLevel = sequelize.define('CaffeineLevel', {
    level: DataTypes.STRING
  });
  
  // Associations
  Product.hasMany(ProductImage, { as: 'images', foreignKey: 'product_id' });
  Product.belongsTo(Category, { as: 'category', foreignKey: 'category_id' });
  Product.belongsTo(Roast, { as: 'roast', foreignKey: 'roast_level' });
  Product.hasMany(GrindOption, { as: 'grind_options', foreignKey: 'product_id' });
  Product.belongsTo(CaffeineLevel, { as: 'caffeine_level', foreignKey: 'caffeine_level_id' });
  