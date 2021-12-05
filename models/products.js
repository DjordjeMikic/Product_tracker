import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const Products = new Schema({
  productName: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,
    default: 'No description for this product'
  },
  image: {
    type: String,
    default: 'uploads/default.png'
  },
  productKey: {
    type: String,
    required: true
  },
  discount: {
    type: Boolean,
    default: false
  },
  stock: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  added: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('products', Products);
