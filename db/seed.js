const connection = require('../config/connection');
const { getUsers, getThoughts } = require('./data');
const User = require('../models/User');
const Thought = require('../models/Thought');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected to database');

    // Delete the collections if they exist
    // let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    // if (thoughtCheck.length) {
    //     await connection.dropCollection('thoughts');
    // }

    // let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    // if (userCheck.length) {
    //     await connection.dropCollection('users');
    // }

    const userData = getUsers();
    // console.table(userData);

    // const thoughtData = getThoughts();
    // console.table(thoughtData);

    // await User.insertMany(userData);
    // await Thought.insertMany(thoughtData);

    for (let i = 0; i < userData.length; i++) {
        try {
            const result = await User.findOne({ username: userData[i].username });
            const thought = await Thought.findOne({ username: userData[i].username });
            result.thoughts = thought._id;
            const updatedUser = await User.save;
            console.log(`${userData[i].username} has been updated to include thought ID`)
        } catch (error) {
            console.error(error);
        }
    }
    // console.table(userData);
    // console.table(thoughtData);
    console.info('Seeding complete! 🌱');
    process.exit(0);
})