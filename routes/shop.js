
const product = require('../models/product');

const express = require('express');


const router = express.Router();

router.get('/',async (req, res, next) => {
    const products= await product.getAll()
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
