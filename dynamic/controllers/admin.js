const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  const editing = req.query.edit === 'true';
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: editing,
    product: {} // corrected typo here
  });
};



exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect('/');
  }
  const prodid = req.params.productid;
  Product.findById(prodid, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req,res,next)=>{
  const prodid = req.body.productid;
  const updateTitle = req.body.title;
  const updatePrice = req.body.price;
  const updatedDesc = req.body.description;
  const updatedImageUrl = req.body.imageUrl;
  const updatedProduct = new Product(
    prodid,
    updateTitle, 
    updatedImageUrl,
    updatedDesc,
    updatePrice   
    
    );
    updatedProduct.save();
    res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.postDeleteProduct = (req,res,next)=>{
  const prodid = req.body.productid;
  Product.deleteById(prodid);
  res.redirect('/admin/products');
  
};
