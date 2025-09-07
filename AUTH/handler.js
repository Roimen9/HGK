const sqlite = require('sqlite3')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const handler = {
    register : async (req, res) => {
        const body = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(body.password, salt)
        const role = 'user'

        const db = new sqlite.Database('db', sqlite.OPEN_READWRITE, (error) => {
        if (error) return console.log('There was a problem connecting to the database', error)
            console.log('Connected to the database successfully')
        })

        const query = 'INSERT INTO users(username, email, password, role, timestamp) VALUES(?, ?, ?, ?, ?)'
        db.run(query, [body.username, body.email, hashedPassword, role, body.date], (error) => {
            if (error) return console.log('There was a problem inserting the data into the database', error)
                console.log('The data was inserted into the database successfully')
                const query = 'SELECT * FROM users WHERE email = ?'
                db.get(query, [body.email], (error,row) => {
                    if (error) return console.log('There was a problem retrieving the data from the database',error)
                        console.log(row)
                        const token = jwt.sign({user : row}, 'token-secret')
                        res.cookie('jwt', token).json('User registered successfully')
                })  
        })
                
        db.close(error => {
        if (error) return console.log('Failed to close database', error)
            console.log('Database closed successfully')
        })
    },
    login : (req, res) => {
        const body = req.body
        const password = body.password
        const db = new sqlite.Database('db', sqlite.OPEN_READWRITE, (error) => {
        if (error) return console.log('There was a problem connecting to the database', error)
            console.log('Connected to the database successfully')
        })

        const query = 'SELECT * FROM users WHERE email = ?'
        db.get(query, [body.email], async (error, row) => {
            if (error) return console.log('There was a problem retrieving the data from the database', error)
                console.log('Data retrieved successfully')
                if (!row) return res.json('User does not exist Invalid email or password')
                    const same = await bcrypt.compare(body.password, row.password)
                    if(!same) return res.json('Invalid username or password')
                    const token = jwt.sign({user : row}, 'token-secret')
                    res.cookie('jwt', token).json({user : row})
                    const query = 'INSERT INTO logtimes(timestamp)VALUES(?)'
                    db.run(query, [body.date], (error) => {
                        if (error) return console.log("There was a problem inserting the data in the database", error)
                            console.log("Data entered successfully")
                    })
                    db.close(error => {
                    if (error) return console.log('Failed to close database', error)
                        console.log('Database closed successfully')
                    })
        })
    },
    verifyUser : (req, res, next) => {
        const token = req.cookies.jwt
        if(!token) return res.render('access')
            jwt.verify(token, 'token-secret', (error, decoded) => {
                if (error) return res.render('access')
                    req.user = decoded
                    console.log(req.user.user.role)
                    if (req.user.user.role !== 'user') return res.render('denied')
                        next()
            })
    },
    verifyAdmin : (req, res, next) => {
        const token = req.cookies.jwt
        if(!token) return res.render('access')
            jwt.verify(token, 'token-secret', (error, decoded) => {
                if (error) return res.render('access')
                    req.user = decoded
                    // console.log(req.user)
                    if (req.user.user.role !== 'admin') return res.render('denied')   
                        next() 
            })
    },
    verifyRestaurant : (req, res, next) => {
        const token = req.cookies.jwt
        if(!token) return res.render('access')
            jwt.verify(token, 'token-secret', (error, decoded) => {
                if (error) return res.render('access')
                    req.user = decoded
                    console.log(req.user.role)
                    if (req.user.user.role !== 'restaurant') return res.render('denied')   
                        next() 
            })
    },
    logout : (req, res) => {
        res.cookie('jwt', '', {maxAge : 1})
        res.redirect('/')
    }
}
module.exports = handler