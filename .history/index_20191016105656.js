const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/hotel_db')
    .then(() => console.log('Connectedd to Mongodb'))
    .catch(err => console.error('Could not connect to MongoDB'));

app.use(express.json());
const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on the port ${port}...`));