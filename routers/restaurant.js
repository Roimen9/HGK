const express = require('express')
const APIhandler = require('../API/handler')
const AUTHhandler = require('../AUTH/handler')
const router = express()

router.get('/page', AUTHhandler.verifyRestaurant, APIhandler.restaurantDashboard)
router.post('/offer/:id', AUTHhandler.verifyRestaurant, APIhandler.offer)
router.post('/delete/:id', AUTHhandler.verifyRestaurant, APIhandler.deleteOffer)

module.exports = router