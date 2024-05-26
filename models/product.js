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


// Product model
// const Product = sequelize.define('Product', {
//     name: DataTypes.STRING,
//     description: DataTypes.TEXT,
//     price: DataTypes.DECIMAL,
//     region: DataTypes.STRING,
//     weight: DataTypes.INTEGER,
//     roast_level: DataTypes.INTEGER,
//     caffeine_level_id: DataTypes.INTEGER,
//     stock: DataTypes.INTEGER,
//     timestamps: false,
//     tableName: 'products'
//   });
  
//   // ProductImage model
//   const product_image = sequelize.define('product_image', {
//     product_id: DataTypes.INTEGER,
//     image_url: DataTypes.STRING
//   });
  
//   // Category model
//   const Category = sequelize.define('Category', {
//     name: DataTypes.STRING
//   });
  
//   // Roast model
//   const Roast = sequelize.define('Roast', {
//     level: DataTypes.STRING
//   });
  
//   // GrindOption model
//   const grind_option = sequelize.define('grind_option', {
//     product_id: DataTypes.INTEGER,
//     grind_option: DataTypes.STRING,
//     timestamps: false,
//     tableName: 'grind_option'
//   });
  
//   // CaffeineLevel model
//   const CaffeineLevel = sequelize.define('CaffeineLevel', {
//     level: DataTypes.STRING
//   });
  
//   // Associations
//   Product.hasMany(product_image, { as: 'images', foreignKey: 'product_id' });
//   Product.belongsTo(Category, { as: 'category', foreignKey: 'category_id' });
//   Product.belongsTo(Roast, { as: 'roast', foreignKey: 'roast_level' });
//   Product.hasMany(grind_option, { as: 'grind_options', foreignKey: 'product_id' });
//   Product.belongsTo(CaffeineLevel, { as: 'Caffeinelevel', foreignKey: 'caffeine_level_id' });

// Product model
// const Product = sequelize.define('Product', {
//   name: DataTypes.STRING,
//   description: DataTypes.TEXT,
//   price: DataTypes.DECIMAL,
//   region: DataTypes.STRING,
//   weight: DataTypes.INTEGER,
//   roast_level: DataTypes.INTEGER,
//   caffeine_level_id: DataTypes.INTEGER,
//   stock: DataTypes.INTEGER
// }, {
//   timestamps: false,
//   tableName: 'products'
// });

// // ProductImage model
// const ProductImage = sequelize.define('ProductImage', {
//   product_id: DataTypes.INTEGER,
//   image_url: DataTypes.STRING
// }, {
//   timestamps: false,
//   tableName: 'product_images'
// });

// // Category model
// const Category = sequelize.define('Category', {
//   name: DataTypes.STRING
// }, {
//   timestamps: false,
//   tableName: 'categories'
// });

// // Roast model
// const Roast = sequelize.define('Roast', {
//   level: DataTypes.STRING
// }, {
//   timestamps: false,
//   tableName: 'roasts'
// });

// // GrindOption model
// const GrindOption = sequelize.define('GrindOption', {
//   product_id: DataTypes.INTEGER,
//   grind_option: DataTypes.STRING
// }, {
//   timestamps: false,
//   tableName: 'grind_options'
// });

// // CaffeineLevel model
// const CaffeineLevel = sequelize.define('CaffeineLevel', {
//   level: DataTypes.STRING
// }, {
//   timestamps: false,
//   tableName: 'caffeinelevel'
// });

// // Export models
// module.exports = { Product, ProductImage, Category, Roast, GrindOption, CaffeineLevel };