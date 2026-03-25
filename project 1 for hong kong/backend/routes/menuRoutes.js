const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.get('/', menuController.getAllMenuItems);
router.get('/category/:category', menuController.getMenuItemsByCategory);
router.get('/special', menuController.getSpecialItems);
router.post('/', menuController.createMenuItem);

module.exports = router;
