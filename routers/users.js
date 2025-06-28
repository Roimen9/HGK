const express = require('express')
const APIhandler = require('../API/handler')
const AUTHhandler = require('../AUTH/handler')
const router = express()

router.get('/home', AUTHhandler.verify, APIhandler.offerSectionLogged)
router.get('/restaurants', AUTHhandler.verify, APIhandler.displayUserRestaurants)
router.get('/restaurant/:id', AUTHhandler.verify, APIhandler.displayRestaurant)
router.get('/saved/:id', AUTHhandler.verify, APIhandler.displaySavedRestaurant)
router.get('/saved', AUTHhandler.verify, APIhandler.savedRestaurants)
router.post('/save/:id', AUTHhandler.verify, APIhandler.save)
router.delete('/remove/:id', AUTHhandler.verify, APIhandler.unsave)

module.exports = router
