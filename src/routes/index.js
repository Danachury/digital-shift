const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
   res.render('index', { message: 'Hello Digital Shift!' });
});

/* GET 404 Error. */
router.get('/page-not-found', (req, res) => {
   res.render('error', { message: '404 Page not found'});
});

module.exports = router;
