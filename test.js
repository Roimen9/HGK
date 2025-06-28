const sqlite = require('sqlite3')
const db = new sqlite.Database('./db', sqlite.OPEN_READWRITE, (error) => {
    if (error) return console.log('There was a problem connecting to the database', error)
        console.log("Connected to the databse successfully")
})

// const query = 'CREATE TABLE restaurants(id INTEGER NOT NULL PRIMARY KEY, name, description, cuisine, category, vibe, location, number, email, instagram, offer, image1, image2, image3, image4, image5, menu1, menu2, menu3, menu4, menu5, menu6, menu7)'
// db.run(query, (error) => {
//     if (error) return console.log('Failed to create the table', error)
//         console.log('Table created successfully')
// })

// const query = 'CREATE TABLE users(id INTEGER PRIMARY KEY, username, email, password, role)'
// db.run(query, (error) => {
//     if (error) return console.log('FAiled tocreate table', error)
//         console.log('Table created successfully')
// })

// const query = 'CREATE TABLE saved(user_id INTEGER NOT NULL, restaurant_id INTEGER NOT NULL, PRIMARY KEY(user_id, restaurant_id), FOREIGN KEY (user_id) REFERENCES users(id), FOREIGN KEY (restaurant_id) REFERENCES restaurants(id))'
// db.run(query, (error) => {
//     if (error) return console.log('There was a problem creating the table', error)
//         console.log('The table was created successfully')
// })

// const query = 'INSERT INTO users(username, email, password) VALUES (?, ?, ?)'
// db.run(query, ['Ryan','roimenryan@gamil.com', 1234], (error)=> {
//     if (error) return console.log('There was a problem inserting the data into the table', error)
//         console.log('Data inserted successfully')
// })

// const query = 'SELECT * FROM saved'
// db.all(query, (error, rows) => {
//     if (error) return console.log('There was a problem retrieving the data from the databse', error)
//         console.log(rows)
// })

// const query = 'DROP TABLE restaurants'
// db.run(query, (error) => {
//     if (error) return console.log('There was a problem deletingthe table', error)
//         console.log('Table deleted successfully')
// })

// const query = 'SELECT users.id,users.name, saved_restaurants.restaurant_id FROM users JOIN saved_restaurants ON users.id = saved_restaurants.user_id'
// db.all(query,[],(error, rows) => {
//     if (error) return console.log('There was a problem retrieving the data from the database', error)
//         console.log('Data retrieved successfully', rows)
// })


// const query = 'INSERT INTO saved(user_id, restaurant_id) VALUES(?, ?)'
// db.run(query, [5,2], (error) => {
//     if (error) return console.log('Failed to insert the data in the database', error)
//         console.log('Data inserted successfully')
// })

const query = 'SELECT * FROM users'
db.all(query, (error, rows) => {
    if (error) return console.log('There was a problem retrieving the data', error)
        console.log('Data retrieved successfull', rows)
})

// const query = 'INSERT INTO saved(user'
// db.run(query, [2,7], (error) => {
//     if (error) return console.log('There was a problem deletingthe data from the database', error)
//         console.log('Data deleted successfully')
// })

// const query = 'DELETE FROM users'
// db.run(query, (error) => {
//     if (error) return console.log('There was a problem deleting the data from the database')
//         console.log('Data deleted successfully')
// })