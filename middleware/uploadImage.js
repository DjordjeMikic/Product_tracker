import path from 'path';
import multer from 'multer';

const fileFilter = (req, file, cb) => {
    let extreg = /jpeg|png|jpg/;
    let fileType = extreg.test(file.mimetype);
    let extType = extreg.test(path.extname(file.originalname).toLowerCase());
    if(fileType && extType) {
      return cb(null, true);
    } else {
      return cb(null, false);
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, __dirname);
    },
    filename: (req, file, cb) => {
        // const name = Date.now();
        console.log(req);
        return cb(null, `${file.originalname}.${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage,
    fileFilter
});

export default upload;