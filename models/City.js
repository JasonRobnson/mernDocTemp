const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
	rules: {
		type: String,
	},
});

module.exports = City = mongoose.model('city', CitySchema);
