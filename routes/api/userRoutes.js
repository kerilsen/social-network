const router = require('express').Router();

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
.delete(deleteUser) // and thoughts

module.exports = router;