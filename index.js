const express = require('express');
const app = express();
const db = require('./config/db')

// Check connection of MongoDB/db.
db.connection.once("open", () => { console.log('connect to db') }).on("error", (err) => { console.log('not connect to db', err) })

// START Server. 
app.listen(3000, () => {
    console.log('Server is running on localhost:3000');
})

// Define content-type for add data from frontend.
app.use(express.json());

// Main route.
app.use('/', require('./routes/index.js'));