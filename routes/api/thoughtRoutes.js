const router = require('express').Router();

const {
    getAllThoughts,
    addNewThought,
    editThought,
    removeThought,
} = require('../../controllers/thoughtController.js')

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)

// /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .post(addNewThought)
    .put(editThought)
    .delete(removeThought)

module.exports = router;