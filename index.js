const mongoose = require('mongoose');
const User = require('./models/User');

const connection = require('./config/connection');
// const seed = require('./db/seed');

async function seed() {
    try {
        const user = await User.create(
            {
                username: 'Keri',
                email: 'keri.l.sen@gmail.com'
            },
            {
                username: 'Kyle',
                email: 'kyle.cook@gmail.com'
            }
        )
        console.log(user)
    } catch (error) {
        console.log(error.message)
    }
}

seed();
