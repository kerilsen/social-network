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
.post(addFriend)

// /api/users/:userId/friends/:friendId
router
.route('/:friendId')
.delete(removeFriend)

module.exports = router;