import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users';
import productRoutes from './routes/products';

const app = express();

let { log } = console;

dotenv.config();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

mongoose.connect(process.env.DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => {
    log('Connected to mongodb');
  })
  .catch(e => {
    log(e);
  });

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.status(200).json('Hello World');
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  log(`Server is running at ${PORT}`);
})
