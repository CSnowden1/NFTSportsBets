
// routes/gameRoutes.js
const express = require('express');
const router = express.Router();
const { getGames, createGame, updateGame } = require('../../controllers/games/controllers');


router.get('/', getGames);
router.post('/', createGame);
router.put('/:id', updateGame);

module.exports = router;