const mongoose = require('mongoose');
module.exports = mongoose.model(
    'Meetings',{
        ID: String,
        Fach: String,
        Link:String,
        Datum: String,
        Uhrzeit: String,
        Plattform: String,
    },

)