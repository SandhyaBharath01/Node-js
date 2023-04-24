const http = require('http');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();
app.use(bodyParser.urlencoded({extended :false}));

app.use('/',(req,res,next)=>{
    console.log("This always runs");
    next();
});

app.use('/add-product',(req,res,next)=>{
    console.log("In the middlewave");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button><input type="number" name="size"><button type="submit">Add Size</button></form>')
    next(); //this allows the request to continue to the next middleware in line
});
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    console.log("In the another middlewave");
    res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(app);

app.listen(8000);
