const { User } = require('../models/User');
const mongoose = require('mongoose');

async function seed() {
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
await user.save();
console.log(user)
}
seed();