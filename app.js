const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');

const MONGODB_URI =
  '';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

// app.get('/', (req, res) => {
//   res.json({"message": "Welcome to Products application. Organize and keep track of all your products."});
// });

app.use('/product', productRoutes);
app.use('/category', categoryRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen( process.env.PORT || 3000);
  })
  .catch(err => {
    console.log(err);
  });
