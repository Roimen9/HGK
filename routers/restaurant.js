const express = require('express')
const APIhandler = require('../API/handler')
const AUTHhandler = require('../AUTH/handler')
const router = express()

router.get('/page', AUTHhandler.verifyRestaurant, APIhandler.restaurantDashboard)
router.post('/offer/:id', AUTHhandler.verifyRestaurant, APIhandler.updateOffer)

module.exports = router