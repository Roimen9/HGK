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

// const query = 'DROP TABLE saved'
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

// const query = 'SELECT * FROM filters'
// db.all(query, (error, rows) => {
//     if (error) return console.log('There was a problem retrieving the data', error)
//         console.log('Data retrieved successfull', rows)
// })

// const query = 'INSERT INTO saved(user'
// db.run(query, [2,7], (error) => {
//     if (error) return console.log('There was a problem deletingthe data from the database', error)
//         console.log('Data deleted successfully')
// })

// const users = []
// users.forEach(user => {
//     const query = 'DELETE FROM users WHERE username = ?'
//     db.run(query, [user],(error) => {
//     if (error) return console.log('There was a problem deleting the data from the database')
//         console.log('Data deleted successfully')
//     })
// })

// const query = 'CREATE TABLE offerViews(id INTEGER PRIMARY KEY, timestamp, views)'
// db.run(query, (error) => {
//     if (error) return console.log('There wsa a problem creatingthe table')
//         console.log('Table created successfully')
// })
// const query = 'ALTER TABLE offerViews ADD COLUMN restaurant_id'
// db.run(query, (error) => {
//     if (error) return console.log('There was a problem altering the table', error)
//         console.log('Table altered successfully')
// })

// const query = 'ALTER TABLE users ADD COLUMN timestamp DATETIME'
// db.run(query, (error) => {
//     if (error) return console.log('FailEd to alter table', error)
//         console.log('Table altered successfully')
// })
// const query = 'SELECT SUBSTR("timestamp", 1, length("timestamp") - 6) || " " || SUBSTR("timestamp", -2) AS minute, COUNT(*) AS total_users FROM users GROUP BY minute ORDER BY minute'
// db.get(query, (error, rows) => {
//     if (error) return console.log('There was a problem selecting ghe data', error)
//         console.log('Data retrieved successfully', rows)
// })

// let date = Math.ceil(Math.random() * 7)
// console.log(date)

// const query = 'SELECT timestamp FROM users';
// db.all(query, (error, rows) => {
//     if (error) return console.log('There was a problem retrieving the data', error);

//     console.log('Data retrieved successfully');

//     const stamps = [];

//     rows.forEach(row => {
//         if (row.timestamp) {
//             // Extract the date or number from timestamp text
//             let value = parseInt(Object.values(row)); 
//             stamps.push(value);
//         }
//     });

//     // Count occurrences
//     const counts = stamps.reduce((count, stamp) => {
//         count[stamp] = count[stamp] ? count[stamp] + 1 :  1;
//         return count;
//     }, {});

//     console.log(counts);
// });

// let day = Math.ceil(Math.random() * 7)
// let month = Math.ceil(Math.random() * 4)
// console.log(day, month)
// let date = new Date()
// console.log(date.toDateString())
// date.setDate(date.getDay() + day)
// date.setMonth(date.getMonth() + month)
// console.log(date.toDateString())


// const query = 'CREATE TABLE logtimes(id INTEGERS PRIMARY KEY, timestamp DATETIME)'
// db.run(query, (error) => {
//     if (error) return console.log('There was a problem creating the table', error)
//         console.log('Table create successfully')
// })

// const query = 'CREATE TABLE offer_details(id INTEGER PRIMARY KEY, restaurant_id, timestamp, day, views)'
// db.run(query,(error) => {
//     if(error) return console.log('There was a problem creating the table', error)
//         console.log('Table created successfully')
// })

// const query = 'ALTER TABLE offer_details DROP COLUMN day'
// db.run(query, (error) => {
//     if (error) return console.log('there was a problem altering the table', error)
//         console.log('Table altered successfully')
// })

// const query = 'CREATE TABLE filters(id INTEGER PRIMARY KEY, type, filter, timestamp)'
// db.run(query, (error) => {
//     if (error) return console.log('There was problem create the table', error)
//         console.log('Table created successfully')
// })


// const date = new Date()
// console.log(date)