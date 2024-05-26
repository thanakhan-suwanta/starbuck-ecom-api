// // models/index.js
const Product = require('./product');
const Category = require('./category');
const Roast = require('./roast');
const CaffeineLevel = require('./caffeineLevel');
const product_images = require('./product_image');
const grind_options = require('./grind_options');
const flavor_profiles = require('./flavor_profile');

Product.hasMany(product_images, {as: 'product_images', foreignKey: 'product_id' });
product_images.belongsTo(Product, {as:'products', foreignKey: 'id' });

Product.belongsTo(Category, {as: 'category', foreignKey: 'category_id' });
Category.hasMany(Product, {as: 'products', foreignKey: 'category_id' });

// Product.belongsTo(Roast, { as: 'roast', foreignKey: 'roast_id' });
// Roast.hasMany(Product, { as: 'products', foreignKey: 'roast_id' });

Product.hasMany(Roast, {as: 'Roast', foreignKey: 'roast_id' });
Roast.belongsTo(Product, {as:'products', foreignKey: 'roast_id' });
// Product.belongsToMany(Roast, { through: 'ProductRoasts', as: 'roasts', foreignKey: 'id' });
// Roast.belongsToMany(Product, { through: 'ProductRoasts', as: 'products', foreignKey: 'roast_id' });


Product.belongsTo(CaffeineLevel, {as: 'Caffeinelevel',  foreignKey: 'id' });
CaffeineLevel.hasMany(Product, {as: 'products', foreignKey: 'id' });

Product.hasMany(grind_options, {as: 'grind_options', foreignKey: 'product_id' });
grind_options.belongsTo(Product, {as: 'products', foreignKey: 'product_id' });

Product.hasMany(flavor_profiles,{as: 'flavor_profiles',foreignKey:'product_id' })
flavor_profiles.belongsTo(Product, {as: 'products', foreignKey: 'product_id' });
module.exports = { Product, Category, Roast, CaffeineLevel,product_images,grind_options ,flavor_profiles};


