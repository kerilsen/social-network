const router = require('express').Router();

const {
    getAllThoughts,
    getThought,
    addNewThought,
    editThought,
    removeThought
} = require('../../controllers/thoughtController.js')

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(addNewThought)

// /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getThought)
    .put(editThought)
    .delete(removeThought)

module.exports = router;