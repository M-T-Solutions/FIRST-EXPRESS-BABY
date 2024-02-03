// Libraries
let mongoose = require('mongoose');

// Create Books model
let homeModel = mongoose.Schema({
    Heading: String,
    Paragragh: String,
    Image: String
    },
    {
        collection: "HomePage"
});



module.exports = mongoose.model('HomePage', homeModel);