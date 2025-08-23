const express = require('express')
const APIhandler = require('../API/handler')
const AUTHhandler = require('../AUTH/handler')
const router = express()

router.get('/home', AUTHhandler.verifyAdmin, APIhandler.offerSectionAdmin)
router.get('/new', AUTHhandler.verifyAdmin, (req, res) => {res.render('admin/new')})
router.get('/restaurants', AUTHhandler.verifyAdmin, APIhandler.displayAdminRestaurants)
router.get('/dashboard', AUTHhandler.verifyAdmin, APIhandler.adminDashboard)
router.post('/add', AUTHhandler.verifyAdmin, APIhandler.newRestaurant)
// router.post('/save/:id', AUTHhandler.verify, APIhandler.save)

module.exports = router