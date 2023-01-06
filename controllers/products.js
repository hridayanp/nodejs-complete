const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    // const products = adminData.products;
    res.render('add-product', {
        pageTitle: 'Shop',
        path: '/admin/add-product',
        activeShop: true,
        productCSS: true
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    // const products = adminData.products;

    Product.fetchAll((products) => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    })
}