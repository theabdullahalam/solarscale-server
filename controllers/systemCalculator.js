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

function calculateEverything(ratio, planets){
    
    let newplanets = planets

    // console.log(newplanets);

    // POPULATE VALUE
    newplanets.forEach(planet => {
        
        planet.p_radius = planet.p_radius * ratio
        planet.p_distance = planet.p_distance * ratio
        planet.p_gap = planet.p_gap * ratio        

    })

    return {
        planets: newplanets,
        ratio: ratio
    }
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

    return {
        planets: newplanets,
        ratio: ratio
    }

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

    let title = size_obj.p_title
    let actual_radius = getActualSize(title, planets)
    let newradius = size_obj.p_radius

    let ratio = newradius/actual_radius
    let new_planets = calculateEverything(ratio, planets)

    return new_planets.planets


}

function getFromDistance(distance_obj, planets){

    let title = distance_obj.p_title
    let newdistance = distance_obj.p_distance
    let actual_distance = getActualDistance(title, planets)

    let ratio = newdistance/actual_distance.p_distance
    let new_planets = calculateEverything(ratio, planets)

    return new_planets.planets
}

function getFromGap(gap_obj, planets){

    let title = gap_obj.p_title
    let newgap = gap_obj.p_gap
    let actual_gap = getActualGap(title, planets)

    let ratio = newgap/actual_gap.p_gap
    let new_planets = calculateEverything(ratio, planets)

    return new_planets.planets
    
}

exports.calculateSizes = calculateSizes
exports.calculateDistances = calculateDistances
exports.getFromSize = getFromSize
exports.getFromDistance = getFromDistance
exports.getFromGap = getFromGap