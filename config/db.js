// import-mongoose.
const mongoose = require('mongoose');

// Connect-URI.
const mongoURI = "mongodb+srv://MuhammadShahzaib:MSA123@cluster0.nmvvgl4.mongodb.net/RidesApp?retryWrites=true&w=majority";

// Connect-to-mongodb
mongoose.connect(mongoURI);

// export-mongoose.
module.exports = mongoose;