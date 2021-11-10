var express = require('express');
var router = express.Router();
var cors = require('cors')

// CONTROLLERS
var planets_controller = require('../controllers/planetsController')

/* GET DEFAULT PLANETS */
router.get('/defaultplanets', cors(), planets_controller.get_default_planets);

/* GET PLANETS BASED ON SIZE */
router.get('/getfromsize', cors(), planets_controller.get_from_radius);

/* GET PLANETS BASED ON DISTANCE */
router.get('/getfromdistance', cors(), planets_controller.get_from_distance);

/* GET PLANETS BASED ON DISTANCE */
router.get('/getfromgap', cors(), planets_controller.get_from_gap);

module.exports = router;