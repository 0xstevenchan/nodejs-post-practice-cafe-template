var express = require('express');
var router = express.Router();

/* Your customer contact you!
  The variable req contains name, email and message.
  Store it to your Mongodb database (127.0.0.1:27017).
*/
router.post('/', function(req, res, next) {
  res.send('Hello! I am handleContact.js in "routes" folder');
});

module.exports = router;
