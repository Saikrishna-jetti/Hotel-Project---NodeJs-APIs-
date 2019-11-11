const {Company, vaildCompany} = require('../models/company');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async(req,res) => {

    const { error } = vaildCompany(req.body);
    if( error ) return res.status(400).send(error.details[0].message);

    let company = new Company({
        companyName : req.body.companyName,
        ownerName : req.body.ownerName
    });

    company = await company.save();
    res.send(company);

});

router.get('/:id', async (req, res) => {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).send('The genre with the given ID was not found.');
    res.send(company);
});
  

module.exports = router;    

