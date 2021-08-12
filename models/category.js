const mongoose = require('mongoose');
// const Product = require('./product');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  categoryName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Category', CategorySchema);