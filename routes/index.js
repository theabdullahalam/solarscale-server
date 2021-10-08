var express = require('express');
var router = express.Router();

// CONTROLLERS
var index_controller = require('../controllers/indexController')

/* GET home page. */
router.get('/', index_controller.index_page);

module.exports = router;