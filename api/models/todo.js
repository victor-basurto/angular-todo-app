var mongoose = require( 'mongoose' ),
	Schema = mongoose.Schema;

/**
 * Schema - todoSchema
 * @property {Object} [expireAt] - [declare index on mongo that recieves date]
 * @property {Function} [default] - [return new date with 5 minutes added]
 * @description [once value from schema is created, it will be auto-deleted each 5 minutes]
 */
var todoSchema = new Schema({
	text: String,
	done: Boolean,
	expireAt: {
		type: Date,
		required: true,
		default: function() {
			return new Date( Date.now() + 5 * 60 * 1000 );
		}
	}
});

var Todo = mongoose.model( 'Todo', todoSchema );

Todo.collection.ensureIndex({ "expireAt": 1 }, { expireAfterSeconds: 0 });

// Todo Model
module.exports = Todo;