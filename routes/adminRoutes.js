const express = require('express');

const router = express.Router();
const adminController = require('../controllers/adminController')


router.get('/login', adminController.getLogin);
router.get('/dashboard', adminController.getAdminData);
router.post('/dashboard', adminController.adminDashboard);

router.post('/deleteuser', adminController.deleteUser)

module.exports = router;