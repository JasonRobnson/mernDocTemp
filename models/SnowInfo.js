const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SnowInfoSchema = new Schema({
	city: {
		type: Schema.Types.ObjectId,
		ref: 'city',
	},
	days: {
		type: String,
	},
});

module.exports = SnowInfo = mongoose.model('snowinfo', SnowInfoSchema);
