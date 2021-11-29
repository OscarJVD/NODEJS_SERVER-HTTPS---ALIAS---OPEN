//archivo index.js
const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();

https.createServer({
  cert: fs.readFileSync('localhost.crt'),
  key: fs.readFileSync('localhost.key')
}, app).listen(50000, function () {
  console.log('Servidor https correindo en el puerto 50000');
});

app.get('/', function (req, res) {
  res.send('Hola, estas en la pagina inicial');
  console.log('Se recibio una petición get a través de https');
});

app.get('/oscar', function (req, res) {
  res.send('Hola, estas en la pagina sdfsdfsdf');
  console.log('Se recibio una petición get a través de https');
});