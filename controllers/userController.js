const User = require('../models/User')

module.exports = {
    async getAllUsers(req, res) {
        try { 
          res.json(users);
        } catch (err) {
            res.status(500).json(err);
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

            res.json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
        // also delete their thoughts at the same time
    }
}