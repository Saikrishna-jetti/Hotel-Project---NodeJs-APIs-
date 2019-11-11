const {Company, vaildCompany} = require('../models/company');
const mongoose = require('mongoose');
const express = require('express');
const router = express.router();

router.post('/', async(req,res) => {

    const { error } = validate(req.body);
    if( error ) return res.status(400).send(error.details[0].message);

    let company = new Company({
        companyName : req.body.companyName,
        ownerName : req.body.ownerName
    });

    company = await company.save();
    res.send(company);

});

module.exports = router;    

