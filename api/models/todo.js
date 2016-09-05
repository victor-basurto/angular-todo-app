var mongoose = require( 'mongoose' );

// Todo Model
module.exports = mongoose.model( 'Todo', {
	text: String,
	done: Boolean
});