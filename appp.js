const express = require('express');

const productController = require('./controllers/products');

const app = express();

// Serve static files from the "public" directory
app.use(express.static('views'));

// Define the routes
app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  res.sendFile('home.html', { root: __dirname + '/views' });
});

app.get('/shop', (req, res) => {
  res.sendFile('shop.html', { root: __dirname + '/views' });
});


app.get('/addproduct', productController.getAddProduct);

app.post('/addproduct', productController.postAddProduct);

app.get('/contact', (req, res) => {
  res.sendFile('contact.html', { root: __dirname + '/views' });
});

app.post('/contact', (req, res) => {
  res.redirect('/success');
});

app.get('/success', (req, res) => {
  res.sendFile('success.html', { root: __dirname + '/views' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
