function getActualSize(title, planets){
    let r = NaN;

    planets.forEach(planet => {
        if (planet.p_title === title){
            r = planet.p_radius;
        }
    })

    return r;
    
}

function getActualDistance(title, planets){
    let d = {}

    planets.forEach(planet => {
        if (planet.p_title === title){
            d.p_distance = planet.p_distance
            d.p_distance_exponent = planet.p_distance_exponent
        }
    })

    return d;
}

function getActualGap(title, planets){
    let d = {}

    planets.forEach(planet => {
        if (planet.p_title === title){
            d.p_gap = planet.p_gap
            d.p_gap_exponent = planet.p_gap_exponent
        }
    })

    return d;
}

function calculateDistances(distance_obj, planets){

    let title = distance_obj.p_title
    let newdistance = distance_obj.p_distance
    let newplanets = planets
    let actual_distance = getActualDistance(title, planets)
    let actual_gap = getActualGap(title, planets)

    // GET RATIO
    let ratio = newdistance/actual_distance.p_distance

    // POPULATE VALUE
    newplanets.forEach(planet => {

        // DON'T SET FOR INPUT OBJ
        if (planet.p_title !== title){
            planet.p_distance = planet.p_distance * ratio
        } else {
            planet.p_distance = newdistance
        }

        planet.p_gap = planet.p_gap * ratio

    })

    return newplanets

}

function calculateSizes(size_obj, planets){

    let title = size_obj.p_title
    let newradius = size_obj.p_radius
    let newplanets = planets
    let actual_radius = getActualSize(title, planets)

    // GET RATIO TO USE
    let ratio = newradius/actual_radius

    // POPULATE VALUES
    newplanets.forEach(planet => {
        
        // DON'T SET FOR INPUT OBJ
        if (planet.p_title !== title){
            planet.p_radius = planet.p_radius * ratio
        }else{
            planet.p_radius = newradius
        }

    })

    return {
        planets: newplanets,
        ratio: ratio
    }

}

function getFromSize(size_obj, planets){

    let sized_planets = calculateSizes(size_obj, planets)

    let distance_obj = {
        p_title: 'MERCURY',
        p_distance: sized_planets.planets[1].p_distance * sized_planets.ratio
    }

    let distanced_planets = calculateDistances(distance_obj, sized_planets.planets)

    return distanced_planets


}

function getFromDistance(distance_obj, planets){
    let distanced_planets = calculateDistances(distance_obj, planets)
}

exports.calculateSizes = calculateSizes
exports.calculateDistances = calculateDistances
exports.getFromSize = getFromSize