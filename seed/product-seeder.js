var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopping")

var products  = 
[
    new Product({
        imagePath: "https://images-na.ssl-images-amazon.com/images/I/41mh-xx6fsL._AC_US327_FMwebp_QL65_.jpg",
        title : "FRYE Mens Scott Cap Toe",
        description : "the best mens soft cap",
        price : 49
    }),
    new Product({
        imagePath: "https://images-na.ssl-images-amazon.com/images/I/31qDPbXTXiL._AC_US327_FMwebp_QL65_.jpg",
        title : "Clarks Men's Desert London Oxford Shoe",
        description : "Clarks has been in business for over 100 years making very fine men's dress shoes in a variety of styles.",
        price : 55
        }),
    new Product({
        imagePath: "https://images-na.ssl-images-amazon.com/images/I/41sGxGe7PPL._AC_US327_FMwebp_QL65_.jpg",
        title : "Steve Madden Men's Driscoll Oxford",
        description : "Steve Madden, the company, was founded by Steve Madden",
        price : 35
    })

];

var done = 0;
for(var i=0 ; i < products.length; i++ ){
    products[i].save( (err , result) => {
        done++;
        if (done == products.length) {
            exit();
        }
    });
};

function exit() {
    mongoose.disconnect();
}