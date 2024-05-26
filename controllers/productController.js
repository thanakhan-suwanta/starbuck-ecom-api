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

    
    // const result = products.map(product => {
    //   return {
    //     id: product.id,
    //     name: product.name,
    //     description: product.description,
    //     price: product.price,
    //     category: product.category ? product.category.name : null,
    //     region: product.region,
    //     weight: product.weight,
    //     flavor_profiles: product.flavor_profiles.map(flavor_profiles => flavor_profiles.flavor),
    //     grind_options: product.grind_options.map(option => option.grind_option),
    //     // roast_level: product.roast ? product.roast.level : null,
    //     roast_level: product.Roast.map(Roast => Roast.level),
    //     caffeinelevel: product.CaffeineLevel ? product.CaffeineLevel.level : null,
    //     image_url: product.product_images.map(product_images => product_images.image_url),
    //     stock: product.stock,
    //   };
    // });

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

// Update a product by id
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.update(req.body);
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a product by id
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
