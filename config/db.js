// import-mongoose.
const mongoose = require('mongoose');

// Connect-URI.
const mongoURI = "";

// Connect-to-mongodb
mongoose.connect(mongoURI);

// export-mongoose.
module.exports = mongoose;