const router = require('express').Router();

const {
getAllThoughts,
addNewThought,
editThought,
removeThought
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router
.route('/')
.get(getAllThoughts)

// /api/thoughts/:thoughtId
router
.route('/:thoughtId')
.post(addNewThought) // push the created thought's _id to the associated user's thoughts array field
.put(editThought)
.delete(removeThought)

module.exports = router;