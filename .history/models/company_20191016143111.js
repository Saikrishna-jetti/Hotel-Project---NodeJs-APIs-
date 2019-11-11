const mongoose = require('mongoose');
const Joi = require('joi');

const companySchema=  new mongoose.Schema({
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
}));

const Company = mongoose.model('Company', companySchema);
function vaildCompany(company) {

    const schema = {
        companyName : Joi.string().min(5).max(50).required(),
        ownerName : Joi.string().min(5).max(50).required()
    };
    return Joi.validate(company, schema);
}

exports.Company = Company;
exports.vaildCompany = vaildCompany;
