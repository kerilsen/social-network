const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/socialDB';

connect(connectionString, console.log("Connected to the database"));

module.exports = connection;