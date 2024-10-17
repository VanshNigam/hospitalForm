// routes/userRoutes.js
const express = require('express');
const { signup, login, allUsers } = require('../controllers/userController');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/allUsers', allUsers);

module.exports = router;
