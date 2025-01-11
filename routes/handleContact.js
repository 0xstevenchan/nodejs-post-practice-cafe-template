var express = require('express');
var router = express.Router();

/* Your customer has contacted you!
   The variable req contains the name, email, and message.
   Store it in your MongoDB database (127.0.0.1:27017).
*/
router.post('/', function(req, res, next) {
  res.send('Hello! I am handleContact.js in "routes" folder');
});

module.exports = router;
