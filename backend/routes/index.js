var express = require('express');
var router = express.Router();
const user = require("../controllers/user_controller.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/user/create", user.create);
router.post("/user/login", user.login);

module.exports = router;
