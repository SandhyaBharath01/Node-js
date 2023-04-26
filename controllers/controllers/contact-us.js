const path = require('path');

exports.getContactUs = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','contact-us.html'));
}

exports.postContactUs = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}

exports.getSuccess = (req, res) => {
    res.sendFile(path.join(__dirname,'../','views', '/success.html'));
}
