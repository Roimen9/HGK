const express = require('express')
const APIhandler = require('../API/handler')
const AUTHhandler = require('../AUTH/handler')
const router = express()

router.get('/new', AUTHhandler.verify, (req, res) => {res.render('admin/new')})
router.post('/add', AUTHhandler.verify, APIhandler.newRestaurant)
// router.post('/save/:id', AUTHhandler.verify, APIhandler.save)
router.post('/restaurants', AUTHhandler.verify, APIhandler.displayUserRestaurants)
module.exports = router