const connection = require('../config/connection');
const { getUsers, getThoughts } = require('./data');
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

    const userData = getUsers();
    const thoughtData = getThoughts();

    await User.insertMany(userData);
    await Thought.insertMany(thoughtData);

    console.table(userData);
    console.table(thoughtData);
    console.info('Seeding complete! 🌱');
    process.exit(0);
})