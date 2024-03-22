const router = require('express').Router();

const {
getAllUsers,
addNewUser,
getProfile,
updateUser,
deleteUser
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

module.exports = router;