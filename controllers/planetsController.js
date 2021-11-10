var Planet = require('../models/planet')
var system_calculator = require('./systemCalculator')

exports.get_default_planets = function(req, res, next) {

    Planet.find(function(err, planets){
        if (err) {
            res.send(err)
        }else{

            // DEFAULT
            let defaultobj = {
                p_title: 'SUN',
                p_radius: 30
            }
            let newplanets = system_calculator.getFromSize(defaultobj, planets)

            let responsedata = {
                unit: 'CM',
                bodies: newplanets
            }
            res.json(responsedata);
        }
    })   
  
}

exports.get_from_radius = function(req, res, next){

    Planet.find(function(err, planets){
        if (err){
            res.send(err)
        }else{
            
            

            // GET PLANET NAME
            let title = req.query.object
            let radius = req.query.radius

            let obj = {
                p_title: title.toUpperCase(),
                p_radius: Number(radius)
            }
            let newplanets = system_calculator.getFromSize(obj, planets)

            let responsedata = {
                unit: 'CM',
                bodies: newplanets
            }
            res.json(responsedata);
        }
    })

}

exports.get_from_distance = function(req, res, next){

    Planet.find(function(err, planets){
        if (err){
            res.send(err)
        }else{
            
            // GET PLANET NAME
            let title = req.query.object
            let distance = req.query.distance

            let obj = {
                p_title: title.toUpperCase(),
                p_distance: Number(distance)
            }
            let newplanets = system_calculator.getFromDistance(obj, planets)

            let responsedata = {
                unit: 'CM',
                bodies: newplanets
            }
            res.json(responsedata);
        }
    })

}

exports.get_from_gap = function(req, res, next){

    Planet.find(function(err, planets){
        if (err){
            res.send(err)
        }else{
            
            // GET PLANET NAME
            let title = req.query.object
            let gap = req.query.gap

            let obj = {
                p_title: title.toUpperCase(),
                p_gap: Number(gap)
            }
            let newplanets = system_calculator.getFromGap(obj, planets)

            let responsedata = {
                unit: 'CM',
                bodies: newplanets
            }
            res.json(responsedata);
        }
    })

}