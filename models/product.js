const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  productName: {
    type: String,
    required: true
  },
  qtyPerUnit: {
    type: Number,
    required: true
  },
  unitPrice: {
    type: Number,
    required: true
  },
  unitInStock: {
    type: Number,
    required: true
  },
  discontinued: {
    type: Boolean,
    required: true
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: false
  }
});

module.exports = mongoose.model('Product', ProductSchema);
