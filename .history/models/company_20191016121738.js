const mongoose = require('mongoose');
const Joi = require('jio');

const Company = new mongoose.Schema({
    companyName : {
        type : String,
        required :  true,
        minlength : 6,
        maxlength : 50
    },
    ownerName : {
        type : String,
        required :  true,
        minlength : 6,
        maxlength : 50
    }
});

function vaildCompany(company) {

    const schema = {
        companyName : Joi.string().min(5).max(50).required(),
        ownerName : Joi.string().min(5).max(50).required()
    }
    return Joi.validate(Company, schema);

}

exports.Company = Company;
exports.vaildCompany = vaildCompany;
