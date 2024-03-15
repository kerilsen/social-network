const router = require('express').Router();

// /api/thoughts/:thoughtId/reactions
router
.route('/')
.get(getAllReactions)

// /api/thoughts/:thoughtId/reactions/:reactionId
router
.route('/:reactionId')
.post(createReaction)
.delete(removeReaction)

module.exports = router;