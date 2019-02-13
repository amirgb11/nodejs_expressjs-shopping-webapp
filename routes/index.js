var express = require('express');
var router = express.Router();
var passport = require('passport')
var Product = require('../models/product');
var csrf = require('csurf');   // package for csrf protection
var csrfProtection = csrf();
var Cart = require('../models/cart');

router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {

  Product.find( (err , docs ) => {
    var productChunks = [];
    var chunkSize = 3 ;
    for( var i = 0 ; i < docs.length ; i+= chunkSize){
        productChunks.push(docs.splice(i , i + chunkSize));
    }

    res.render('shop/index', { title: 'Shopping Cart' , products : productChunks });
  })
});


router.get('/add-to-cart/:id' , (req , res) => {
  var productId = req.params.id;
  var cart = new Cart( req.session.cart ? req.session.cart : {items : {}});

  Product.findById(productId , (err , product) => {
      if (err) {
        return  res.redirect('/');
      }

      cart.add(product , product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/');
  })
})

module.exports = router;
