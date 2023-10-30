const multer = require("multer");
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname;
    cb(null, name);
  },
});

const uploadFile = multer({
  storage: storageConfig,
});

module.exports = uploadFile;
