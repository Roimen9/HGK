const express = require('express')
const AUTHhandler = require('../AUTH/handler')
const router = express()

router.post('/register', AUTHhandler.register)
router.post('/login', AUTHhandler.login)
router.get('/logout', AUTHhandler.logout)

module.exports = router