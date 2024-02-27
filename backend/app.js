const express = require('express');
const bodyParser = require('body-parser');
const placeRoute = require('./routes/placelists');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    // Attach CORS headers
    // Required when using a detached backend (that runs on a different domain)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use('/placelists-api', placeRoute);

app.listen(3000);