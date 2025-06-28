const express = require('express')
const APIhandler = require('../API/handler')
const AUTHhandler = require('../AUTH/handler')
const router = express()

router.get('/page', AUTHhandler.verify, APIhandler.restaurantDashboard)
router.post('/offer/:id', AUTHhandler.verify, APIhandler.updateOffer)

module.exports = router