var Planet = require('../models/planet')
var system_calculator = require('./systemCalculator')

exports.get_default_planets = function(req, res, next) {

    Planet.find(function(err, planets){
        if (err) {
            res.send(err)
        }else{

            // TEST
            let testobj = {
                p_title: 'SUN',
                p_radius: 20
            }
            let newplanets = system_calculator.getFromSize(testobj, planets)

            let responsedata = {
                unit: 'CM',
                bodies: newplanets
            }
            res.json(responsedata);
        }
    })   
  
}