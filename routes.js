const fs = require('fs');
const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>filesapp</title></head>');
        res.write('<body><form action="/mess" method="POST"><input type="text" name="mess"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/mess' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            const mess = parsedBody.split('=')[1];
            fs.writeFileSync('mess.txt',mess,err => {
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
            });
            
        });
    }   
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>filespage</title></head>');
    res.write('<body>');
    if(fs.existsSync('mess.txt')){
        const mess = fs.readFileSync('mess.txt');
        res.write(`${mess}`);
    }
    res.write('<form action="/mess" method="POST"><input type="text" name="mess"><button type="submit">Send</button></form>');
    res.write('</body>');
    res.write('</html>');
    res.end();
};

// module.exports = requestHandler;
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };
exports.handler = requestHandler;
someText = "Some hard coded text"