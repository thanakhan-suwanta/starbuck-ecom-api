const { Product,  product_images ,Category, Roast, CaffeineLevel,grind_options, flavor_profiles } = require('../models'); 
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    // ดึงข้อมูลproduct
    const product = await Product.findAll({
      include: [
        { model: product_images, as: 'product_images' },
        { model: Category, as: 'category' },
        { model: Roast, as: 'Roast' },
        { model: grind_options, as: 'grind_options' },
        { model: CaffeineLevel, as: 'Caffeinelevel' },
        { model: flavor_profiles, as: 'flavor_profiles'}
      ]
    });

    const result = product.map(product => {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category ? product.category.name : null,
        region: product.region,
        weight: product.weight,
        flavor_profiles: product.flavor_profiles ? product.flavor_profiles.map(fp => fp.flavor) : [],
        grind_options: product.grind_options ? product.grind_options.map(option => option.grind_option) : [],
        roast_levels: product.roasts ? product.roasts.map(roast => roast.level) : [],
        caffeine_level: product.caffeine_level ? product.caffeine_level.level : null,
        images: product.product_images ? product.product_images.map(img => img.image_url) : [],
        stock: product.stock,
      };
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
      include: [
        { model: product_images, as: 'product_images' },
        { model: Category, as: 'category' },
        { model: Roast, as: 'Roast' },
        { model: grind_options, as: 'grind_options' },
        { model: CaffeineLevel, as: 'Caffeinelevel' },
        { model: flavor_profiles, as: 'flavor_profiles'}
      ]
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const result = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category ? product.category.name : null,
      region: product.region,
      weight: product.weight,
      flavor_profiles: product.flavor_profiles.map(flavor_profiles => flavor_profiles.flavor),
      grind_options: product.grind_options ? product.grind_options.map(option => option.grind_option) : [],
      roast_level: product.Roast ? product.Roast.level : null,
      caffeinelevel: product.Caffeinelevel ? product.Caffeinelevel.level : null,
      images: product.product_images ? product.product_images.map(product_images => product_images.image_url) : [],
      stock: product.stock,
    };
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get a single product by id
exports.getProductById2 = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// exports.updateProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {
//       name,
//       description,
//       price,
//       category_id,
//       region,
//       weight,
//       roast_id,
//       caffeine_level_id,
//       stock,
//       flavor_profiles, 
//       grind_options,  
//       product_image   
//     } = req.body;

//     // Find the product by ID
//     const product = await Product.findOne({ where: { id } });

//     if (!product) {
//       return res.status(404).json({ error: 'Product not found' });
//     }

//     // Update the product fields
//     await product.update({
//       name,
//       description,
//       price,
//       category_id,
//       region,
//       weight,
//       roast_id,
//       caffeine_level_id,
//       flavor_profiles,
//       grind_options, 
//       stock
//     });

//     // Update related flavor profiles
//     if (flavor_profiles) {
//       await flavor_profile.destroy({ where: { product_id: id } });
//       for (const flavor of flavor_profiles) {
//         await flavor_profile.create({ product_id: id, flavor });
//       }
//     }

//     // Update related grind options
//     if (grind_options) {
//       await grind_option.destroy({ where: { product_id: id } });
//       for (const option of grind_options) {
//         await grind_option.create({ product_id: id, grind_option: option });
//       }
//     }

//     // Update related product images
//     if (product_images) {
//       await product_image.destroy({ where: { product_id: id } });
//       for (const image of product_images) {
//         await product_image.create({ product_id: id, image_url: image });
//       }
//     }

//     // Fetch the updated product with associations
//     const updatedProduct = await Product.findOne({
//       where: { id },
//       include: [
//         { model: product_images, as: 'product_images' },
//         { model: Category, as: 'category' },
//         { model: Roast, as: 'roast' },
//         { model: grind_options, as: 'grind_options' },
//         { model: CaffeineLevel, as: 'Caffeinelevel' },
//         { model: flavor_profiles, as: 'flavor_profiles'}
//       ]
//     });

//     res.json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };



// Delete a product by id
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.status(200).json();
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
