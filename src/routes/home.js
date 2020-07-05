const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
   res.render('home', { message: `Hello ${req.query.username}` });
});

module.exports = router;
