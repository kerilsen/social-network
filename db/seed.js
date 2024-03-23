const connection = require('../config/connection');
const { User } = require('../models/User');
const { Thought } = require('../models/Thought');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected to database');

    // Delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }

    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }
})

const thoughts = [];
const users = [];
module.exports = seed;