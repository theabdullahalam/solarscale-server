var mongoose = require('mongoose')

// THE SCHEMA
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

// VIRTUALS
planet_schema
.virtual('title')
.get(function(){
    return this.p_title;
});

// EXPORT IT
module.exports = mongoose.model('planets', planet_schema)