import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import { EventEmitter } from 'events';
import cors from 'cors';
import dotenv from 'dotenv';
import Mail from './utils/mail';
import userRoutes from './routes/users';
import productRoutes from './routes/products';

const app = express();
const eventEmitter = new EventEmitter();
let { log } = console;

dotenv.config();

app.use((req, res, next) => {
  req.event = eventEmitter;
  next();
})
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'front-end', 'build')));
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

app.get('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'front-end', 'build', 'index.html'));
});

eventEmitter.on('ptyStock', async (key) => {
  try {
    const mail = new Mail();
    const mailSent = await mail.sendmail(key);
    if(mailSent) {
      log('Mail sent');
    }
  } catch(e) {
    log(e);
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  log(`Server is running at ${PORT}`);
})
