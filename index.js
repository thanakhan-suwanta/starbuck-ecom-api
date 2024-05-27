const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const productRoutes = require('./routes/productRoutes');
// const orderRoutes = require('./controllers/orderController');
const routerOders = require('./routes/orderRoutes');

const app = express();
const PORT =  3000;

app.use(bodyParser.json());
app.use('/api', productRoutes,);
app.use('/api', routerOders);


sequelize.authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
