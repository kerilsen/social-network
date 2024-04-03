const router = require('express').Router();

const {
getAllUsers,
addNewUser,
getProfile,
updateUser,
deleteUser,
getAllFriends,
addFriend,
removeFriend
} = require('../../controllers/userController.js')

// /api/users
router
.route('/')
.get(getAllUsers)
.post(addNewUser)

// /api/users/:userID
router
.route('/:userId')
.get(getProfile)
.put(updateUser)
.delete(deleteUser)

// /api/users/:userId/friends
router
.route('/:userId/friends')
.get(getAllFriends)
.post(addFriend)

// /api/users/:userId/friends/:friendId
router
.route('/:userId/friends/:friendId')
.delete(removeFriend)

module.exports = router;