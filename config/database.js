// read .env variables
require('dotenv').config();

var urlConnection = {};
// url variable
urlConnection.uri = process.env.DB_PATH || process.env.LOCAL_DB_PATH;
module.exports = urlConnection;