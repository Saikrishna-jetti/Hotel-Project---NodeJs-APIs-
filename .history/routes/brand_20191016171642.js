
const {Brand, vaildBrand} = require('../models/brand');
const Company = require('../models/company');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async(req,res) => {

    const { error } = vaildBrand(req.body);
    if( error ) return res.status(400).send(error.details[0].message);

    const company = await Company.findById(req.body.companyId);
    if (!company) return res.status(400).send('Invalid genre.');
  
    let brand = new Brand({
        brandName : req.body.brandName,
        company : {
            _id : company._id
        }
    });

    brand = await brand.save();
    res.send(brand);

});

module.exports = router;    

