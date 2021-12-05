import fs from 'fs';
import Products from '../models/products';

export const delImg = async (req, res, next) => {
    try {
        const data = await Products.findById(req.params.id);
        if(!data) {
            res.status(400).json('Some error');
            return;
        }
        const { image } = data;
        const path = `./uploads/${image}`;
        const exists = fs.existsSync(path);
        if(exists) {
            fs.unlinkSync(path);
        }
        next();
    } catch(e) {
        res.status(400).json(e.message);
    }
}