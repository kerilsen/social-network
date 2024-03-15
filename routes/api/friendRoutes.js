const router = require('express').Router();

const {
    getAllFriends,
    addFriend,
    removeFriend,
} = require('../../controllers/friendController.js');

// /api/users/:userId/friends
router
.route('/')
.get(getAllFriends)

// /api/users/:userId/friends/:friendId
router
.route('/:friendId')
.post(addFriend)
.delete(removeFriend)

module.exports = router;