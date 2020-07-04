const express = require('express');
const router = express.Router();
const user = require('../models/user');

/* GET home page. */
router.get('/', (req, res) => {
   res.render('index', { message: `Hello ${user.formattedName()}!` });
});

/* GET 404 Error. */
router.get('/page-not-found', (req, res) => {
   res.render('error', { message: '404 Page not found' });
});

module.exports = router;
