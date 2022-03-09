// <-------------- IMPORT DEPENDENCIES -------------->
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
// we'll also import our fruits model when we have it

// <-------------- CREATE EXPRESS APP OBJECT -------------->
const app = require('liquid-express-views')(express());

// <-------------- MIDDLEWARE -------------->
// this is for request logging
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
// parses urlencoded request bodies
app.use(express.urlencoded({ extended: false }));
// to serve files from public statically
app.use(express.static('public'));


// <-------------- ROUTES -------------->
app.get('/', (req, res) => {
    res.send('app is listening, off to the races!')
})


// <-------------- SERVER LISTENER -------------->
const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`app is listing on port:  ${PORT}`)
})
