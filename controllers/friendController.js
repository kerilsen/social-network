const { User } = require('../models');

module.exports = {
    async getAllFriends(req, res) {
        try {
            const friendList = await User.find({ id: req.params.id }).populate('friends');
            res.json(friendList);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async addFriend(req, res) {
        try {
            const friend = await User.findOneAndUpdate(
                { id: req.params.id },
                // { $push 
                //     friends: req.body.username  
                // }
                );
        res.json(friend);
    } catch(err) {
        res.status(500).json(err);
    }
},

    async removeFriend(req, res) {
    const array = await getAllFriends(req, res);
    const filter = array.filter(str => str !== req.params.username);
    try {
        const friends = await User.findOneAndUpdate({ _id: req.params.id }, { friends: filter })
        res.json(friends);
    } catch (err) {
        res.status(500).json(err);
    }
},
}