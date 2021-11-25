const mongoose = require('mongoose');
const async = require('async')
var config = require('./config')

// CONNECTION STUFF
let mongourl = config.credentials.url
mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.on(
    'error',
    console.error.bind(
        console, 'MongoDB Connection Error'
    )
)

// SCHEMA STUFF
var planet_schema = new mongoose.Schema(
    {
        p_position: Number,
        p_title: String,
        p_color: String,
        p_radius: Number,
        p_gap: Number,
        p_distance: Number,
    }
);

// CREATE A MODEL I GUESS
var PlanetModel = mongoose.model('planets', planet_schema)

var planets = [
    {
        p_position: 0,
        p_title: 'SUN',
        p_color: '#fffef2',
        p_radius: 69634000000,
        p_distance: 0,
        p_gap: 0
    },
    {
        p_position: 1,
        p_title: 'MERCURY',
        p_color: '#a4a4a4',
        p_radius: 243950000,
        p_distance: 5790000000000.0,
        p_gap: 5790000000000.0
    },
    {
        p_position: 2,
        p_title: 'VENUS',
        p_color: '#ffd585',
        p_radius: 605200000,
        p_distance: 10820000000000.0,
        p_gap: 5030000000000.0
    },
    {
        p_position: 3,
        p_title: 'EARTH',
        p_color: '#4e95ff',
        p_radius: 637800000,
        p_distance: 14960000000000.0,
        p_gap: 4140000000000.0
    },
    {
        p_position: 4,
        p_title: 'MARS',
        p_color: '#ff4e4e',
        p_radius: 339600000,
        p_distance: 22790000000000.0,
        p_gap: 11970000000000.0
    },
    {
        p_position: 5,
        p_title: 'JUPITER',
        p_color: '#ebbf6c',
        p_radius: 7149200000.0,
        p_distance: 77860000000000.0,
        p_gap: 55070000000000.0
    },
    {
        p_position: 6,
        p_title: 'SATURN',
        p_color: '#ffe857',
        p_radius: 6026800000.0,
        p_distance: 143350000000000.0,
        p_gap: 65490000000000.0
    },
    {
        p_position: 7,
        p_title: 'URANUS',
        p_color: '#72f2ff',
        p_radius: 2555900000.0,
        p_distance: 287250000000000.0,
        p_gap: 143900000000000.0
    },
    {
        p_position: 8,
        p_title: 'NEPTUNE',
        p_color: '#50a3fc',
        p_radius: 2476400000.0,
        p_distance: 449500000000000,
        p_gap: 162250000000000.0
    },
    {
        p_position: 9,
        p_title: 'PLUTO',
        p_color: '#ffdb72',
        p_radius: 118500000.0,
        p_distance: 590600000000000,
        p_gap: 141100000000000
    }   

]

function createPlanets(){
    planets.forEach(planetobj => {
        var planet = new PlanetModel(planetobj)
        planet.save(function(err){
            if (err){
                console.log(err);
            };
        })
    })
}

async.series([
    createPlanets,
    () => mongoose.connection.close()
])


