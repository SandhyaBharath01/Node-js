const http = require('http')
const server=http.createServer(function(req,res)
{
      const url=req.url;
      if(url==='/home')
      {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head> <title> my first page </title></head>');
        res.write('<body><h1>Welcome to home page</h1></body');
        res.write('<html>')
      }

      const url2=req.url;
      if(url2==='/About')
      {
       
        res.write('<html>');
        res.write('<head> <title> my first page </title></head>');
        res.write('<body><h1>Welcome to About page</h1></body');
        res.write('<html>')
      }

      const url3=req.url;
      if(url3==='/Node')
      {
       
        res.write('<html>');
        res.write('<head> <title> my first page </title></head>');
        res.write('<body><h1>Welcome to node project page</h1></body');
        res.write('<html>')
      }

       
        res.write('<html>');
        res.write('<head> <title> my first page </title></head>');
        res.write('<body><h1>Hello from the node js server app</h1></body');
        res.write('<html>')
        res.end();
});
server.listen(1200)