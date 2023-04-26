const path = require('path');

const express = require('express');

const contactUsController = require('../controllers/contact');

const router = express.Router();

router.get('/', contactUsController.getContactUs);
  
router.post('/', contactUsController.postContactUs);

router.get('/success', contactUsController.getSuccess);

module.exports = router;
