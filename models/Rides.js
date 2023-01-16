const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RidesSchema = new Schema({
    pickup: { type: { lat: Number, long: Number } },
    carName: { type: String, required: true }
});

const Rides = mongoose.model('Rides', RidesSchema);

module.exports = Rides;