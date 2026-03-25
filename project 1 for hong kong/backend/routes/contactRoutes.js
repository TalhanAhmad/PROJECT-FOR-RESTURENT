const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/', contactController.sendContactMessage);
router.get('/info', contactController.getRestaurantInfo);

module.exports = router;
