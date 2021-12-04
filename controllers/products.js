import Products from '../models/products';

export const getProducts = async (req, res) => {
  try {
    const data = await Products.find({});
    res.status(200).json(data);
  } catch(e) {
    res.status(400).json(e);
  }
}

export const getProduct = async (req, res) => {
  try {
    const data = await Products.findById(req.params.id);
    res.status(200).json(data);
  } catch(e) {
    res.status(400).json(e);
  }
}

export const addProduct = async (req, res) => {
  const arr = req.body.info.toString().split(',');
  const info = {};

  for(let i = 0; i < arr.length; i++) {
    if(i % 2 !== 0) {
      info[arr[i - 1]] = arr[i];
    }
  }

  info.discount = !!req.body.discount;
  const { productName, productDescription, productKey, discount, stock, price } = info;

  const newProduct = new Products({
    productName,
    productDescription,
    productKey,
    discount,
    stock,
    price: `${price}$`
  });

  try {    
    await newProduct.save();
    // console.log(info);
    res.status(201).json('Product is successfully added');
  } catch(e) {
    res.status(400).json(e)
  }
}

export const removeProduct = async (req, res) => {
  try {
    const result = await Products.deleteOne({ _id: req.params.id });
    res.status(200).json(result);
  } catch(e) {
    res.status(400).json(e);
  }
}

export const changeProduct = async (req, res) => {
  const { productName, productKey, productDescription, stock, enabled, price } = req.body;
  Products.updateOne(
    { _id: req.params.id },
    { $set: { productName, productKey, productDescription, stock, discount: enabled, price } },
    (err, data) => {
      if(err) {
        res.status(400).json(err);
      }
      if(data.modifiedCount) {        
        res.status(201).json('Product is successfully updated');
      }
    }
  )
}