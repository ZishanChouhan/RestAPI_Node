const mongoose = require('mongoose');

const Product = require('../models/product');
const Category = require('../models/category');

exports.getCategories = (req, res, next) => {
  Category.find()
    .then(categories => {
      res.status(200).json({
        message: 'Fetched posts successfully.',
        categories: categories
      });
    })
    .catch(err => {
        console.log(err)
    });
};

exports.createCategory = (req, res, next) => {
  const categoryName = req.body.categoryName;
  const category = new Category({
    categoryName: categoryName,
   
  });
  category
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Post created successfully!',
        category: { _id: result._id, name: result.categoryName }
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCategory = (req, res, next) => {
  const categoryId = req.params.categoryId;
  Category.findById(categoryId)
    .then(category => {
      if (!category) {
        const error = new Error('Could not find category.');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: 'Category fetched.', category: category });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.updateCategory = (req, res, next) => {
  const categoryId = req.params.categoryId;
  
  Category.findById(categoryId)
    .then(category => {
      if (!category) {
        const error = new Error('Could not find category.');
        error.statusCode = 404;
        throw error;
      }
      category.categoryName =  categoryName;
    })
    .then(result => {
      res.status(200).json({ message: 'Product updated!', product: result });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.deleteCategory = (req, res, next) => {
  const categoryId = req.params.categoryId;
  Category.findById(categoryId)
    .then(category => {
      if (!category) {
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