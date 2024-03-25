const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://localhost/socialDB';

connect(connectionString, console.log("Connected to the database"));

module.exports = connection;