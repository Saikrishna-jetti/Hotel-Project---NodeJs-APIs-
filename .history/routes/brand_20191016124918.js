
const {Brand, vaildBrand} = require('../models/brand');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async(req,res) => {

    const { error } = vaildBrand(req.body);
    if( error ) return res.status(400).send(error.details[0].message);

    let brand = new Brand({
        companyId : req.body.companyId,
        brandName : req.body.brandName
    });

    brand = await brand.save();
    res.send(brand);

});

module.exports = router;    

