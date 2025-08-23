const express = require('express')
const adminRouter = require('./routers/admin')
const usersRouter = require('./routers/users')
const authRouter = require('./routers/auth')
const restaurantRouter = require('./routers/restaurant')
const APIhandler = require('./API/handler')
const cookieParser = require('cookie-parser')
const path = require('path')
const app = express()
const port = 3000


app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({urlencoded : true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', APIhandler.offerSection)
app.get('/restaurants', APIhandler.displayRestaurants)
app.get('/login', (req, res) => {res.render('login', {user : req.user})})
app.set('view engine', 'ejs')

app.use('/user', usersRouter)
app.use('/admin', adminRouter)
app.use('/auth', authRouter)
app.use('/restaurant', restaurantRouter)

app.listen(port, (error) => {
    if (error)return console.log('There was a problem running the server.....', error)
        console.log(`Server is running on http://localhost:${port}`)
})