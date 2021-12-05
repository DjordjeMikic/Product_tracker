import path from 'path';
const multer = require('multer');

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
        return cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        req.name = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
        return cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
  storage,
  fileFilter
});

export default upload;