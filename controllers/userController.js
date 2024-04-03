const User = require('../models/User');

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
            console.log(err.message);
            res.status(500).json(err);
        }
    },

    async getProfile(req, res) {
        try {
            const user = await User.findById(req.params.id);
            res.json(user)
        } catch (err) {
            console.log(err.message);
            res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({ id: req.params.id }, { $set: { username: req.body.username, email: req.body.email } }, { new: true });
            await User.save;
            res.json(user);
        } catch (err) {
            console.log(err.message);
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const deletedUser = await User.deleteOne({ id: req.params.id });
            if (deletedUser.deletedCount === 0) {
                return res.status(404).json({ message: 'No such user exists ' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (err) {
            console.log(err.message);
            res.status(500).json(err);
        }
    },

    // Friend controllers
    async getAllFriends(req, res) {
        try {
            const friendList = await User.findOne(
                { _id: req.params.userId }).populate("friends");
            res.json(friendList);
        } catch (err) {
            console.log(err.message);
            res.status(500).json(err);
        }
    },

    async addFriend(req, res) {
        try {
            const friendId = await User.findOne(
                { username: req.body.username }, '_id');
            console.log('friendId is', friendId);
            const addFriend = await User.findOneAndUpdate(
                { id: req.params.id },
                { $push: { friends: friendId } },
                { new: true });
            res.json(addFriend);
        } catch (err) {
            console.log(err.message);
            res.status(500).json(err);
        }
    },

    async removeFriend(req, res) {
        try {
            await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true });
            const friendList = await User.findById(req.params.userId);
            res.json(friendList);
        } catch (err) {
            console.log(err.message);
            res.status(500).json(err);
        }
    },
}