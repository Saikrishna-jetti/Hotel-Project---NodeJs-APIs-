const mongoose = require('mongoose');
const Joi = require('joi');
const { companySchema } = require('./company');
const Brand =mongoose.model('Brand', new mongoose.Schema({
    
    brandName : {
        type : String,
        required :  true,
        minlength : 3,
        maxlength : 50
    },
    // company : {
    //     type : companySchema,
    //     required : true
    // }
}));

function vaildBrand(brand) {

    const schema = {
        brandName : Joi.string().min(5).max(50).required(),
        companyId: Joi.string().required()
    };
    return Joi.validate(brand, schema);
}

exports.Brand = Brand;
exports.vaildBrand = vaildBrand;
