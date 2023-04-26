const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/sucess', (req, res, next) => {
res.sendFile(path.join(__dirname,'../','views','sucess.html'));
});
  
router.post('/sucess', (req, res, next) => {
console.log(req.body);
res.redirect('/');
});

module.exports = router;
