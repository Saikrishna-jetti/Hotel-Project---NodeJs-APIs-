const mongoose = require('mongoose');
const Joi = require('joi');

const Company = new mongoose.Schema({
    companyName : {
        type : String,
        minlength : 3,
        maxlength : 50
    },
    ownerName : {
        type : String,
        required :  true,
        minlength : 3,
        maxlength : 50
    }
});

function vaildCompany(company) {

    const schema = {
        companyName : Joi.string().min(3).max(50).required(),
        ownerName : Joi.string().min(3).max(50).required()
    };
    return Joi.validate(Company, schema);

}

exports.Company = Company;
exports.vaildCompany = vaildCompany;
