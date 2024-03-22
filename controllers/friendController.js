const { User } = require('../models'); // User as friend?

module.exports = {
    async getAllFriends(req, res) {
        try { 
            // const friends = await ;
          res.json(friends);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addFriend(req, res) {
        try {
            // const friend = await .create(req.body);
            res.json(friend);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async removeFriend(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
}