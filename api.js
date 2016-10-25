var express = require('express'),
	mongoose 	= require('mongoose'),
	morgan = require('morgan'),			// log request to console
	bodyParser = require('body-parser'),		// pull information from HTML POST (express4)
	methodOverride = require('method-override'), 	// simulate DELETE and PUT (express4)
	urlConnection = require('./config/database'),
	app = express();

// set the port 
var port = process.env.PORT || 8000;

// connect to mongoDB
mongoose.connect( urlConnection.uri );

app.use( express.static( __dirname + '/public' ) );
app.use( morgan( 'dev' ) );					// log every request to the console
app.use( bodyParser.urlencoded({ 'extended':'true' }) );	// parse application/x-www-form-urlencoded
app.use( bodyParser.json() );					// parse application/json
app.use( bodyParser.json({ type: 'application/vnd.api+json' }));// parse application/vnd.api+json as json
app.use( methodOverride() );

require( './api/routes.js' )( app );

app.listen( port, function() {
	console.log( 'App listening on port : ' + port );
});