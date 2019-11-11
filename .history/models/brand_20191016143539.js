const mongoose = require('mongoose');
const Joi = require('joi');
const { companySchema } = require('./company');

const Brand =mongoose.model('Brand', new mongoose.Schema({
    company : {
        type : companySchema,
        required : true
    },
    brandName : {
        type : String,
        required :  true,
        minlength : 3,
        maxlength : 50
    }
}));

function vaildBrand(brand) {

    const schema = {
        companyId: Joi.string().required(),
        brandName : Joi.string().min(5).max(50).required()
    };
    return Joi.validate(brand, schema);
}

exports.Brand = Brand;
exports.vaildBrand = vaildBrand;
