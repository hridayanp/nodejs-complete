const express = require('express')
// const path = require('path')
// const rootDir = require('../util/path');
const router = express.Router()
const adminData = require('./admin')

router.get('/', (req, res, next) => {
    console.log('shop.js', adminData.products)
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', { prods: adminData.products, pageTitle: 'Shop', path: '/' });
});


module.exports = router