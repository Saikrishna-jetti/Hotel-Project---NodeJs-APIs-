const {Company, vaildCompany} = require('../models/company');
const mongoose = require('mongoose');
const express = require('express');
const router = express.router();

router.post('/', async(req,res) => {
    const { error } = validate(req.body);
    if( error ) return res.status(400).send(error.details[0].message);

    let customer = new Company({
        companyName : req.body.companyName,
        ownerName : req.body.ownerName
    });

});

router.post('/', async (req, res) => {
  
    let customer = new Customer({ 
      name: req.body.name,
      isGold: req.body.isGold,
      phone: req.body.phone
    });
    customer = await customer.save();
    
    res.send(customer);
  });
  


