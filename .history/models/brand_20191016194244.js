const mongoose = require('mongoose');
const Joi = require('joi');

const brandSchema = new mongoose.Schema({
    brandName : {
        type : String,
        required :  true,
        minlength : 2,
        maxlength : 50
    },
    company : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Company'
    }

});

const Brand= mongoose.model('Brand', brandSchema);

function vaildBrand(brand) {

    const schema = {
        brandName : Joi.string().min(2).max(50).required(),
        companyId: Joi.string().required()
    };
    return Joi.validate(brand, schema);
}

exports.Brand = Brand;
exports.vaildBrand = vaildBrand;
