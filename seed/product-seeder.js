var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopping")

var products  = 
[
    new Product({
        imagePath: "http://google.com",
        title : "t1",
        description : "d1",
        price : 10
    }),
    new Product({
        imagePath: "http://google.com",
        title : "t2",
        description : "d2",
        price : 20
    }),
    new Product({
        imagePath: "http://google.com",
        title : "t3",
        description : "d3",
        price : 30
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