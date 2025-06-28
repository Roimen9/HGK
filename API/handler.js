const sqlite = require('sqlite3')
const {promisify} = require('util')
const bcrypt = require('bcrypt')
const handler = {
    newRestaurant : (req, res) => {
        const body = req.body
        const db = new sqlite.Database('db', sqlite.OPEN_READWRITE, (error) => {
        if (error) return console.log('There was a problem connecting to the database', error)
            console.log('Connected to the database succcessfully')
        })

        const query = 'INSERT INTO restaurants(name, description, cuisine, category, vibe, location, number, email, instagram, offer) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        db.run(query, [body.name, body.description, body.cuisine, body.category, body.vibe, body.location, body.number, body.email, body.instagram, body.offer], async (error) => {
            if (error) return console.log('There was a problem inserting the data into the database', error)
                console.log('Data inserted into the database successfully')
                console.log(body.password)                
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(body.password, salt)
                const query = 'INSERT INTO users(username, email, password, role) VALUES(?, ?, ?, ?)'
                db.run(query, [body.name, body.email, hashedPassword, body.role], (error) => {
                    if (error) return console.log('There was a problem insertng the data into the database', error)
                        console.log('Data inserted successfully')
                        res.json('Restaurant added successfully')
                })
        })
    },
    displayRestaurants : (req, res) => {
        const db = new sqlite.Database('db', sqlite.OPEN_READWRITE, (error) => {
        if (error) return console.log('There was a problem connecting to the database', error)
            console.log('Connected to the database succcessfully')
        })

        const query = 'SELECT * FROM restaurants'
        db.all(query, (error, rows) => {
            if (error) return console.log("There was a problem retrieving the data from the database", error)
                console.log('Data retrieved successfully')
                res.render('restaurants', {rows})
        })
    },
    displayUserRestaurants : (req, res) => {
        const user_id = req.user.user.id
        const db = new sqlite.Database('db', sqlite.OPEN_READWRITE, (error) => {
        if (error) return console.log('There was a problem connecting to the database', error)
            console.log('Connected to the database succcessfully')
        })

        const query = 'SELECT * FROM restaurants WHERE id NOT IN (SELECT restaurant_id FROM saved WHERE user_id = ?)'
        db.all(query, [user_id], (error, rows) => {
            if (error) return console.log("There was a problem retrieving the data from the database", error)
                console.log('Data retrieved successfully')
                res.render('user/restaurants', {rows})
        })
    },
    displayRestaurant : (req, res) => {
        const id = req.params.id
        const db = new sqlite.Database('db', sqlite.OPEN_READWRITE, (error) => {
            if (error) return console.log('There was a problem connecting to the database', error)
                console.log('Connected to the database successfully')
        })

        const query = 'SELECT * FROM restaurants WHERE id = ?'
        db.get(query, [id], (error, row) => {
            if (error) return console.log('Failed to retrieve data from the database', error)
                console.log('Data retrieved successfully')
                res.render('user/restaurant', {row})
        })
    },
    displaySavedRestaurant : (req, res) => {
        const id = req.params.id
        const db = new sqlite.Database('db', sqlite.OPEN_READWRITE, (error) => {
            if (error) return console.log('There was a problem connecting to the database', error)
                console.log('Connected to the database successfully')
        })

        const query = 'SELECT * FROM restaurants WHERE id = ?'
        db.get(query, [id], (error, row) => {
            if (error) return console.log('Failed to retrieve data from the database', error)
                console.log('Data retrieved successfully')
                res.render('user/saved-restaurant', {row})
        })
    },
    editRestaurant : (req, res) => {

    },
    deleteRestaurant : (req, res) => {
        const id = req.params.id
        const db = new sqlite.Database('db', sqlite.OPEN_READWRITE, (error) => {
        if (error) return console.log('There was a problem connecting to the database', error)
            console.log('Connected to the database succcessfully')
        })

        const query = 'DELETE FROM restaurants WHERE id = ?'
        db.run(query, [id], (error) => {
            if (error) return console.log('There was a problem deleting the data from the database', error)
                console.log('Data deleted successfully')
                res.json('Deleted successfully')
        })
    },
    displayRestaurantsAdmin : (req, res) => {
        const db = new sqlite.Database('db', sqlite.OPEN_READWRITE, (error) => {
        if (error) return console.log('There was a problem connecting to the database', error)
            console.log('Connected to the database succcessfully')
        })

        const query = 'SELECT * FROM restaurants'
        db.all(query, (error, rows) => {
            if (error) return console.log('There was a problem retrieving the data from the database', error)
                console.log('Data retrieved successfully')
                res.render('admin/restaurants', {rows})
        })
    },
    save : (req, res) => {
        const user_id = req.user.user.id
        const restaurant_id = req.params.id
        console.log(user_id, restaurant_id)
        const db = new sqlite.Database('db', sqlite.OPEN_READWRITE, (error) => {
        if (error) return console.log('There was a problem connecting to the database', error)
            console.log('Connected to the database succcessfully')
        })

        const query = 'INSERT INTO saved(user_id, restaurant_id) VALUES(?, ?)'
        db.run(query, [user_id, restaurant_id], (error) => {
            if (error) return console.log('There was a problem inserting the data into the database', error)
                console.log('Data inserted successfully')
        })
    },
    unsave : (req, res) => {
        const user_id = req.user.user.id
        const restaurant_id = req.params.id
        console.log(user_id)
        const db = new sqlite.Database('db', sqlite.OPEN_READWRITE, (error) => {
        if (error) return console.log('There was a problem connecting to the database', error)
            console.log('Connected to the database succcessfully')
        })

        const query = 'DELETE FROM saved WHERE user_id = ? AND restaurant_id = ?'
        db.run(query, [user_id, restaurant_id], (error) => {
            if (error) return console.log('There was a problem deleting the data from the database', error)
                console.log('Data deleted successfully')
        })
    },
    savedRestaurants : async (req, res) => {
        const user_id = req.user.user.id;
        console.log('User ID:', user_id);

        const db = new sqlite.Database('db', sqlite.OPEN_READWRITE, (err) => {
            if (err) {
                console.error('Database connection error:', err);
            } else {
                console.log('Connected to the database successfully');
            }
        });

        // Promisify db.all to use with async/await
        const dbAll = promisify(db.all).bind(db);

        try {
            // Step 1: Get saved restaurant IDs
            const savedRows = await dbAll('SELECT * FROM saved WHERE user_id = ?', [user_id]);
            const restaurant_ids = savedRows.map(row => row.restaurant_id);
            console.log('Saved Restaurant IDs:', restaurant_ids);

            if (restaurant_ids.length === 0) {
                return res.render('user/saved', { rows: [] }); // No saved restaurants
            }

            // Step 2: Get restaurant details
            const restaurantPromises = restaurant_ids.map(id =>
                dbAll('SELECT * FROM restaurants WHERE id = ?', [id])
            );

            const restaurantResults = await Promise.all(restaurantPromises);

            // Step 3: Flatten the results
            const restaurants = restaurantResults.flat();
            console.log('Final restaurants:', restaurants);

            res.render('user/saved', { rows: restaurants });

        } catch (error) {
            console.error('Error fetching saved restaurants:', error);
            res.status(500).send('Internal Server Error');
        } finally {
            db.close();
        }
    },
    restaurantDashboard : (req, res) => {
        const email = req.user.user.email
        const db = new sqlite.Database('db', sqlite.OPEN_READWRITE, (error)=> {
            if (error) return console.log('There was a problem connecting to the database', error)
                console.log('Connected to the database successfully')
        })

        const query = 'SELECT * FROM restaurants WHERE email = ?'
        db.get(query, [email], (error, row) => {
            if (error) return console.log('There was a problem retrieving the data from the database', error)
                console.log('Data retrieved successfully', row)
                const query = 'SELECT * FROM saved WHERE restaurant_id = ?'
                db.all(query, [row.id], (error, rows) => {
                    if (error) return console.log('There was a problem retrieving the data from the database')
                        console.log('Data retrieved successfully', rows)
                        const number = rows.length
                        res.render('dashboard', {user : row, number : number})
                })
        })
    },
    updateOffer : (req, res) => {
        const body = req.body
        console.log(body)
        const id = req.params.id
        const db = new sqlite.Database('db', sqlite.OPEN_READWRITE, (error) => {
            if (error) return console.log('There was a problemconnectingto the database', error)
                console.log('Connected to the database successfully')
        })

        const query = 'UPDATE restaurants SET offer = ? WHERE id = ?'
        db.run(query, [body.offer, id], (error) => {
            if (error) return console.log('Failed to update the data inthe database', error)
                console.log('Data updated successfully')
                res.json('Offer updated successfully')
        })

        db.close(error => {
            if (error) return console.log('Failed to close the database', error)
                console.log('Database closed successfully')
        })
    },
    offerSection : (req, res) => {
        const db = new sqlite.Database('db', sqlite.OPEN_READWRITE, (error) => {
        if (error) return console.log('There was a problem connecting to the database', error)
            console.log('Connected to the database succcessfully')
        })

        const query = 'SELECT * FROM restaurants'
        db.all(query, (error, rows) => {
            if (error) return console.log("There was a problem retrieving the data from the database", error)
                console.log('Data retrieved successfully')
                res.render('home', {rows})
        })
    },
    offerSectionLogged : (req, res) => {
        const db = new sqlite.Database('db', sqlite.OPEN_READWRITE, (error) => {
        if (error) return console.log('There was a problem connecting to the database', error)
            console.log('Connected to the database succcessfully')
        })

        const query = 'SELECT * FROM restaurants'
        db.all(query, (error, rows) => {
            if (error) return console.log("There was a problem retrieving the data from the database", error)
                console.log('Data retrieved successfully')
                res.render('user/home', {rows, user : req.user.user})
        })
    }
}
module.exports = handler