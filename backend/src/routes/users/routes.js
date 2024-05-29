// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getUser, createUser, updateUser } = require('../../controllers/users/controllers');

router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);

module.exports = router; 

