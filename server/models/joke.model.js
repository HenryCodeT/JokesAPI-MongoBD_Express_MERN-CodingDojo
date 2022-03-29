// //// FIELDS /////////////////////////
const mongoose = require('mongoose');
console.log("***************** 3-Models *******************");
// //// SCHEMAS ///////////////////////
const JokeSchema = new mongoose.Schema({
    setup: {
		type: String,
		required: true,
		minlength: 10
	},
	punchline: {
		type: String,
		required: true,
		minlength: 3
	}
},{timestamps:true})// Timestamps implement CreatedAt and UpdatedAt

// //// Models ///////////////////////////////
const Joke = mongoose.model('Joke',JokeSchema)

// ***** Export Model *******
console.log("----------------- 3-Models -------------------");
module.exports = Joke;