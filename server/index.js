'use strict';

const express = require('express');
const app = express();
const server = app.listen(4000);

const bodyParser = require('body-parser');
const ejs = require('ejs');

app.set('views', __dirname + '/../views');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  res.send(req.body);
  const toNumber = req.body.number;
  const text = req.body.text;
  nexmo.message.sendSms(
    12017012099, toNumber, text, {type: 'unicode'},
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
        console.log('hello');
        // Optional: add socket.io -- will explain later
      }
    }
  );
 });

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '3daa8bc7',
  apiSecret: '3b14d1ff2c0a9407',
}, {debug: true});