const User = require('../models/User');

// const userCount = async () => {
//     const numberOfUsers = await User.aggregate().count('userCount');
//     return numberOfUsers;
// }

module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async addNewUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getProfile(req, res) {
        try {
            const user = await User.findOne({ username: req.params.username })
            res.json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({ username: req.params.username }, { $set: { username: req.body } });
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({ username: req.params.username });
            if (!user) {
                return res.status(404).json({ message: 'No such user exists' });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
}