import { Router } from 'express';
import {
    getProducts,
    getProduct,
    addProduct,
    removeProduct,
    changeProduct
} from '../controllers/products';
import upload from '../middleware/uploadImage';
import { delImg } from '../middleware/products';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.delete('/:id', delImg, removeProduct);
router.post('/add', upload.single("image"), addProduct);
router.put('/edit/:id', changeProduct);

export default router;
