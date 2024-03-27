const connection = require('../config/connection');
const { getUsers, getThoughts, getFriends } = require('./helper');
const { User, Thought } = require('../models');

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

    // Seed users with required fields only (username and email)
    const userData = getUsers();
    console.table(userData);
    await User.insertMany(userData);

    // Seed thoughts (and reactions)
    const thoughtData = getThoughts();
    console.table(thoughtData);
    await Thought.insertMany(thoughtData);

    // Attribute thoughts and friends to users
    const addNestedData = async () => {
        for (let i = 0; i < userData.length; i++) {
            try {
                const friends = await getFriends(userData[i].username);
                
                const results = await User.find({ username: { $in: friends } }, '_id');
                const friendsData = results.map(result => result._id);

                const thoughts = await Thought.find({ username: userData[i].username });
                const thoughtData = [];
                thoughts.forEach((thought) => {
                    const thoughtId = thought._id;
                    thoughtData.push(thoughtId);
                });
                await User.findOneAndUpdate(
                    { username: userData[i].username },
                    { 
                        $push: { 
                            thoughts: { $each: thoughtData },
                            friends: { $each: friendsData }
                        }
                    },
                    { new: true });

                await User.save;
            } catch (error) {
                console.error(error);
            }
        }
    }
    
    await addNestedData();

    console.info('Seeding complete! 🌱');
    process.exit(0);
})