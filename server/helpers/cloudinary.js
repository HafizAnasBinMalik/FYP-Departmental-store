const cloudinary = require("cloudinary");
const multer = require("multer");


cloudinary.config({
  cloud_name: "ducr0szt4",
  api_key: "186179939316398",
  api_secret: "uG0D5jwtOqgNGmzTdeeoYNZtzH8",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
