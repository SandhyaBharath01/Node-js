const express = require('express');
const app = express();

// Set the view engine
app.set('view engine', 'ejs');

// Define the routes
app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  res.render('home', { title: 'Welcome Home' });
});

app.get('/shop', (req, res) => {
  res.render('shop', { title: 'These are my Products' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

app.get('/addproduct', (req, res) => {
  res.render('addproduct', { title: 'Add Product' });
});

app.post('/addproduct', (req, res) => {
  res.redirect('/shop');
});


app.post('/contact', (req, res) => {
  res.redirect('/success');
});

app.get('/success', (req, res) => {
  res.render('success', { title: 'Success' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
