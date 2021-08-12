const Product = require('../models/product');
const Category = require('../models/category');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      res.status(200).json({
        message: 'Fetched posts successfully.',
        products: products
      });
    })
    .catch(err => {
        console.log(err)
    });
};

exports.createProduct = (req, res, next) => {
  const productName = req.body.productName;
  const qtyPerUnit = req.body.qtyPerUnit;
  const unitPrice = req.body.unitPrice;
  const unitInStock = req.body.unitInStock;
  const discontinued = req.body.discontinued;
  const categoryId = req.body.categoryId;

  const product = new Product({
    productName: productName,
    qtyPerUnit: qtyPerUnit,
    unitPrice: unitPrice,
    unitInStock: unitInStock,
    discontinued: discontinued,
    categoryId: categoryId
  });
  product
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Product created successfully!',
        product: result
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .then(product => {
      if (!product) {
        const error = new Error('Could not find product.');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: 'Product fetched.', product: product });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.updateProduct = (req, res, next) => {
  const productId = req.params.productId;

  const productName = req.body.productName;
  const qtyPerUnit = req.body.qtyPerUnit;
  const unitPrice = req.body.unitPrice;
  const unitInStock = req.body.unitInStock;
  const discontinued = req.body.discontinued;
  
  Product.findById(productId)
    .then(product => {
      if (!product) {
        const error = new Error('Could not find product.');
        error.statusCode = 404;
        throw error;
      }
      product.productName = productName;
      product.qtyPerUnit = qtyPerUnit;
      product.unitPrice = unitPrice;
      product.unitInStock = unitInStock;
      product.discontinued = discontinued;
      return product.save();
    })
    .then(result => {
      res.status(200).json({ message: 'Product updated!', product: result });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.deleteProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .then(product => {
      if (!product) {
        const error = new Error('Could not find product.');
        error.statusCode = 404;
        throw error;
      }
    })
    .then(result => {
      res.status(200).json({ message: 'Deleted product.' });
    })
    .catch(err => {
      console.log(err);
    });
};