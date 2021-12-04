import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const obj = {
  type: String,
  required: true
}

const Users = new Schema({
  fullName: obj,
  email: {
    ...obj,
    unique: true
  },
  password: {
    ...obj,
    min: 4
  }
});

export default mongoose.model('users', Users);
