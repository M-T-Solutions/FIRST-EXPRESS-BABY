// Libraries
const DB = require('../config/db');
let mongoose = require('mongoose');

// Create Books model
let bookModel = mongoose.Schema({
    Name: String,
    Author: String,
    Published: Number,
    Description: String,
    Price: Number,
    },
    {
        collection: "Books"
});



module.exports = mongoose.model('Books', bookModel);

