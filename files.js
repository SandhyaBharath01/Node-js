const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("In the middlewave");
    next(); //this allows the request to continue to the next middleware in line
});
app.use((req,res,next)=>{
    console.log("In the another middlewave");
    res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(app);

app.listen(8000);
