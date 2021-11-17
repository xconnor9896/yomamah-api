// environment setup
require('dotenv').config();
require('express-async-errors');

// app essentials
const express = require('express');
const app = express();
const connectDB = require('./db/connectDB');

// security
/* 
i will do this later

*/

// routes
/* 
i will do this later

*/

// middleware

// other stuff
const port = process.env.PORT || 3000;

// app parameters

app
    .use(express.urlencoded({ extended: false}), express.json())
    // api routes

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`server listening at ${port}`);
        })
    } catch (err) {
        console.log(err)
    }
}

start();