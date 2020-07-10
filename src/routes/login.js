const express = require('express');
const router = express.Router();

/**
 * Page request handler.
 */
router.get('/', (req, res) => {
   res.render('login');
});

/**
 * Form submit handler.
 */
router.post('/', (req, res) => {
   const username = req.body.username;
   const password = req.body.password;

   if (username && password) {
      res.redirect(`home?username=${username}`);
   } else {
      res.render('login', { error: 'Invalid Username and Password combination.' });
   }
   res.end();
});

module.exports = router;
