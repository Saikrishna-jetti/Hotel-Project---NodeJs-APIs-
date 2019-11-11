const mongoose = require('mongoose');
const Joi = require('jio');

const Company = new mongoose.Schema({
    companyName : {
        type : String,
        required :  true
    },
    ownerName : {
        type : String,
        required :  true
    }
});

