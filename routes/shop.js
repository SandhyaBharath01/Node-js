const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/shop', (req, res, next) => {
  res.sendFile(path.join(__dirname,'../','views','shop.html'));
});

router.post('/shop', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
