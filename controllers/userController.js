const User = require('../models/User');

module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find().populate('friends');
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
            const user = await User.findOne({ id: req.params.id });
            res.json(user)
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({ id: req.params.id }, { $set: { username: req.body.username, email: req.body.email } }, { new: true });
            await User.save;
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ id: req.params.id });
            if (!user) {
                return res.status(404).json({ message: 'No such user exists' });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
}