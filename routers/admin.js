const express = require('express')
const APIhandler = require('../API/handler')
const dotenv = require('dotenv')
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const {CloudinaryStorage} = require('multer-storage-cloudinary')
const AUTHhandler = require('../AUTH/handler')
const router = express()
dotenv.config()
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'HGK', // Folder name in Cloudinary
    format: 'webp', // Convert images to WebP
    public_id: (req, file) => Date.now() + '-' + file.originalname,
    transformation: [
      { width: 800, height: 600, crop: 'limit', quality: 'auto', fetch_format: 'webp' }  // Resize before upload
    ]    
  },
});

const upload = multer({storage : storage})


function extractImageUrls(req, res, next){
  console.log('hizi ni files', req.files)
  if (req.files) {
    req.images = {};
    Object.keys(req.files).forEach((key) => {
        console.log(key, 'hii ni key')
      req.images.push(req.files[key][0].path); // Push each image URL into the images array
    });
    console.log('hizi ni urls', req.images)
  } else {
    console.log('no images')
  }
  next();
};

router.get('/home', AUTHhandler.verifyAdmin, APIhandler.offerSectionLogged)
router.get('/new', AUTHhandler.verifyAdmin, (req, res) => {res.render('admin/new')})
router.get('/restaurants', AUTHhandler.verifyAdmin, APIhandler.displayAdminRestaurants)
router.get('/dashboard', AUTHhandler.verifyAdmin, APIhandler.adminDashboard)
// router.post('/add', AUTHhandler.verifyAdmin, APIhandler.newRestaurant)
router.post('/add', AUTHhandler.verifyAdmin, upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
    { name: 'image5', maxCount: 1 },
    { name: 'menu1', maxCount: 1 },
    { name: 'menu2', maxCount: 1 },
    { name: 'menu3', maxCount: 1 },
    { name: 'menu4', maxCount: 1 },
    { name: 'menu5', maxCount: 1 },
  ]), extractImageUrls, APIhandler.newRestaurant);

// router.post('/save/:id', AUTHhandler.verify, APIhandler.save)

module.exports = router