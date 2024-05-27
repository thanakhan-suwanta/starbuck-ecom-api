const { Product, Order ,OrderItems } = require('../models');
const sequelize = require('../config/db');

// exports.createOrder = async (req, res) => {
//   const { userId, orderItems } = req.body;
  
//   const transaction = await sequelize.transaction();
  
//   try {
//     let total = 0;

//     for (const item of orderItems) {
//       const product = await Product.findOne({
//         where: { id: item.productId },
//         lock: true,
//         transaction,
//       });

//       if (!product || product.stock < item.quantity) {
//         throw new Error(`Product ${item.productId} is out of stock or has insufficient quantity`);
//       }

//       await Product.update(
//         { stock: product.stock - item.quantity },
//         { where: { id: product.id }, transaction }
//       );

//       total += product.price * item.quantity;
//     }

//     const order = await Order.create(
//       {
//         user_id: userId,
//         order_date: new Date(),
//         total,
//       },
//       { transaction }
//     );

//     await transaction.commit();

//     res.status(201).json(order);
//   } catch (error) {
//     await transaction.rollback();
//     res.status(400).json({ error: error.message });
//   }
// };

//test

exports.createOrder = async (req, res) => {
    const { userId, orderItems } = req.body;
  
    const transaction = await sequelize.transaction();
  
    try {
      let total = 0;
  
      for (const item of orderItems) {
        const product = await Product.findOne({
          where: { id: item.productId },
          lock: true,
          transaction,
        });
  
        if (!product) {
          throw new Error(`Product ${item.productId} not found`);
        }
  
        if (product.stock < item.quantity) {
          throw new Error(`Product ${item.productId} is out of stock or has insufficient quantity`);
        }
  
        await Product.update(
          { stock: product.stock - item.quantity },
          { where: { id: product.id }, transaction }
        );
  
        total += product.price * item.quantity;
      }
  
      const order = await Order.create(
        {
          user_id: userId,
          order_date: new Date(),
          total,
        },
        { transaction }
      );

      for (const item of orderItems) {
        await OrderItems.create(
          {
            order_id: order.id,
            product_id: item.productId,
            quantity: item.quantity,
            price: (await Product.findOne({ where: { id: item.productId } })).price,
          },
          { transaction }
        );
      }
  
      await transaction.commit();
  
      res.status(201).json(order);
    } catch (error) {
      await transaction.rollback();
      res.status(400).json({ error: error.message });
    }
  };

exports.checkStock = async (req, res) => {
  try {
    const products = await Product.findAll();

    const result = products.map(product => ({
      id: product.id,
      name: product.name,
      stock: product.stock,
    }));

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// exports.updateProductStockFromAPI = async (req, res) => {
//   try {
//     const response = await axios.get('http://localhost:3000/api/check-stock');
//     const supplies = response.data;

//     for (const supply of supplies) {
//       await Product.update(
//         { stock: supply.stock },
//         { where: { id: supply.product_id } }
//       );
//     }

//     res.status(200).json({ message: 'Product stock updated successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating product stock', error });
//   }
// };


