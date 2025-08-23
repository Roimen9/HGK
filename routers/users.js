const express = require('express')
const APIhandler = require('../API/handler')
const AUTHhandler = require('../AUTH/handler')
const router = express()

router.get('/home', AUTHhandler.verifyUser, APIhandler.offerSectionLogged)
router.get('/restaurants', AUTHhandler.verifyUser, APIhandler.displayUserRestaurants)
router.get('/restaurant/:id', AUTHhandler.verifyUser, APIhandler.displayRestaurant)
router.get('/saved/:id', AUTHhandler.verifyUser, APIhandler.displaySavedRestaurant)
router.get('/saved', AUTHhandler.verifyUser, APIhandler.savedRestaurants)
router.post('/save/:id', AUTHhandler.verifyUser, APIhandler.save)
router.delete('/remove/:id', AUTHhandler.verifyUser, APIhandler.unsave)
router.post('/view/:id', AUTHhandler.verifyUser, APIhandler.viewed)

module.exports = router
