const express = require('express')
const router = express.Router()
const rootDir = require('../util/path');


router.use((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));

});

module.exports = router