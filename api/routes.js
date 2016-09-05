var express  	= require('express');
var app		= express();
// load the todo model
var Todo = require( './models/todo' );

// expose routes to api
module.exports = function( app ) {
	// get all todos
	app.get( '/api/todos', function (req, res) {
		/**
		 * Find and get all todos in database]
		 * @param {Object} `err` - if there's an error when looking for a document, send error
		 * @param {Object} `todos` - get documents from db
		 */
		Todo.find({}, function (err, todos) {
			// if error send error
			if ( err ) 
				res.send( err );

			// return all todos in json format
			res.json( todos );
		});
	});

	// post a todo
	app.post( '/api/todos', function (req, res) {
		/**
		 * Create a Todo, information comes from AJAX request from Angular
		 * @param  {Object]} `err`  - if there's an error print error details
		 * @param  {Object} `todo` - if true, PUT new object to database
		 * @return {Obejct} `todos` - return all todos
		 */
		Todo.create({
			text: req.body.text,
			done: false
		}, function( err, todo ) {
			// if error send error
			if ( err ) 
				res.send( err );

			// get and return all the todos after you create another
			Todo.find({}, function (err, todos) {
				if ( err )
					res.send( err );

				// return all todos in json format
				res.json( todos );
			});
		});
	});

	// delete a todo
	app.delete( '/api/todos/:todo_id', function(req, res) {
		/**
		 * Delete a Todo
		 * @param  {Object} `err` - if error print error
		 * @param  {Object} `todo` - return todo
		 */
		Todo.remove({
			_id: req.params.todo_id
		}, function(err , todo) {
			if ( err ) 
				res.send( err );

			Todo.find({}, function(err, todos) {
				if (err) 
					res.send(err);

				res.json(todos);
			});
		});
	});
}