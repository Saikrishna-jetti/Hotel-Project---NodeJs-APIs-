const mongoose = require('mongoose');
const express = require('express');
const company = require('./routes/company');
const brand = require('./routes/brand');
const bodyparser  = require('body-parser');
const app = express();

// connection for mongoDB
mongoose.connect('mongodb://localhost/hotel_db', {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('Connectedd to Mongodb'))
    .catch(err => console.error('Could not connect to MongoDB'));

app.use(express.json());
app.use(bodyparser.json());
app.use('/api/company', company);
app.use('/api/brand', brand);

// Port allow
const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on the port ${port}...`));