const express = require('express')
// const path = require('path')
const router = express.Router()
// const rootDir = require('../util/path');


router.use((req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', '404.html'));
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' });

});

module.exports = router