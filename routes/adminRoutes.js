const express = require('express');

const router = express.Router();
const adminController = require('../controllers/adminController')


router.get('/login', adminController.getLogin);
router.post('/dashboard', adminController.adminDashboard);
router.get('/dashboard', adminController.getAdminData);


module.exports = router;