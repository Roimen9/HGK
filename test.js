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

// const query = 'DROP TABLE logtimes'
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

// const query = 'DELETE FROM offerDetails'
// db.run(query, (error) => {
// if (error) return console.log('There was a problem deleting the data from the database')
//     console.log('Data deleted successfully')
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

// const query = 'DROP TABLE offerDetails'
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


// const query = 'CREATE TABLE logtimes(id INTEGER PRIMARY KEY, timestamp)'
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

// const query = 'CREATE TABLE offerDetails(id INTEGER PRIMARY KEY, restaurant_id, description, image, status, start, end, views)'
// db.run(query, (error) => {
//     if (error) return console.log('There was a problem creatingthe table', error)
//         console.log('Table created successfully')
// })

// const query = "SELECT name FROM sqlite_master WHERE type='table'"
// db.all(query, (error, rows) => {
//     if (error) return console.log('There was a problem creatingthe table', error)
//         console.log('Table created successfully',rows)
// })

// HiddenGemsKenya
// Home
// Restaurants
// New
// Dashboard
// New Restaurant
// Name
// Nyama villa
// Vibe
// cozy, casual, business-friendly, family-friendly
// Menu 1pexels-pixabay-262047.jpg
// Image 1pexels-pixabay-262047.jpg
// Number
// 011315268
// Category
// barbecue, stakehouse
// Menu 2pexels-pixabay-262047.jpg
// Image 2pexels-pixabay-262047.jpg
// Email
// roimenryan@gmail.com
// Cuisine
// African
// Menu 3pexels-pixabay-262047.jpg
// Image 3pexels-pixabay-262047.jpg
// Instagram
// https://www.instagram.com/accounts/onetap/?next=%2F%40y.b.n_ryan%2F
// Location
// https://www.google.com/maps/place/Nyama+Villa/@-1.283319,36.8956601,15z/data=!4m6!3m5!1s0x182f147e51457309:0x5be284241c740dab!8m2!3d-1.2759746!4d36.9088295!16s%2Fg%2F1tctty66?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D
// Menu 4pexels-pixabay-262047.jpg
// Image 4pexels-pixabay-262047.jpg
// Description
// At Nyama Villa, barbecue isn’t just food – it’s an experience. We specialize in slow-smoked meats, grilled to perfection over wood and fire, bringing out rich, authentic flavors that capture the true spirit of barbecue. From tender fall-off-the-bone ribs to juicy brisket and perfectly charred chicken, every bite is made to satisfy.

// Our rustic, welcoming atmosphere makes Nyama Villa the perfect spot for family gatherings, casual hangouts, or a hearty meal with friends. Pair your favorite cuts with our signature sauces and classic sides, and discover why we’re the home of unforgettable barbecue moments.

// Come hungry, leave happy – that’s the Nyama Villa promise.
// Menu 5pexels-pixabay-262047.jpg
// Image 5pexels-pixabay-262047.jpg
