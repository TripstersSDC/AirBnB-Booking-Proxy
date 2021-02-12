const express = require('express');
// const compression = require('compression');
const path = require('path');
const { service1, service2, service3 } = require('./config/services');
const axios = require('axios');
const router = require('./router');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();
const PORT = process.env.PORT || 3000;

// app.use(compression());

//app.use('/bundles', router.bundles);
app.get('/bundles/services1.js', (req, res) => {
  axios.get(`${service1.url}/${service1.bundle}`)
    .then((response) => {
      res.set('Cache-Control', 'public, max-age=31557600'); // one year
      res.type('.js').send(response.data);
    })
    .catch(error => console.log(error));
});

app.get('/bundles/723.bundle.js', (req, res) => {
  axios.get(`${service1.url}/723.bundle.js`)
    .then((response) => {
      res.set('Cache-Control', 'public, max-age=31557600'); // one year
      res.type('.js').send(response.data);
    })
    .catch(error => console.log(error));
});

app.get('/bundles/789.bundle.js', (req, res) => {
  axios.get(`${service1.url}/789.bundle.js`)
    .then((response) => {
      res.set('Cache-Control', 'public, max-age=31557600'); // one year
      res.type('.js').send(response.data);
    })
    .catch(error => console.log(error));
});

app.get('/bundles/services2.js', (req, res) => {
  axios.get(`${service2.url}/${service2.bundle}`)
    .then((response) => {
      res.set('Cache-Control', 'public, max-age=31557600'); // one year
      res.type('.js').send(response.data);
    })
    .catch(error => console.log(error));
});

app.get('/bundles/services3.js', (req, res) => {
  axios.get(`${service3.url}/${service3.bundle}`)
    .then((response) => {
      res.set('Cache-Control', 'public, max-age=31557600'); // one year
      res.type('.js').send(response.data);
    })
    .catch(error => console.log(error));
});

app.use('/api', router.api);

app.use(express.static(PUBLIC_DIR));
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on Port: ${PORT}`);
});
