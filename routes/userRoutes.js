const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController')

router.get('/login', userController.getLogin)

router.post('/dashboard', userController.userDashboard )

router.get('/dashboard', userController.getUserData);

router.post('/task', userController.addUserTask);

module.exports = router;