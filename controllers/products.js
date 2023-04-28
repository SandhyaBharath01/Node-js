// Import the product model
const Product = require('../controllers/products');

// Display the add product form
exports.getAddProduct = (req, res) => {
  res.render('addproduct', { title: 'Add Product' });
};

// Add a new product to the database
exports.postAddProduct = (req, res) => {
  const { name, price, description } = req.body;
  const product = new Product({
    name,
    price,
    description,
  });
  product.save()
    .then(() => res.redirect('/shop'))
    .catch(err => console.log(err));
};
