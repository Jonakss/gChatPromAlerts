const express = require('express');
const app = express();
app.use(express.json());
const port = 3333;
const fetch = require('node-fetch');
const gchat = require('@googleapis/chat');
const { google } = require('googleapis');
const gkeys = require('./googlekeys.json');
const unirest = require('unirest');


function getJWT() {
  return new Promise(function(resolve, reject) {
    let jwtClient = new google.auth.JWT(
      gkeys.client_email,
      null,
      gkeys.private_key, ['https://www.googleapis.com/auth/chat.bot']
    );

    jwtClient.authorize(function(err, tokens) {
      if (err) {
        console.log('Error create JWT hangoutchat');
        reject(err);
      } else {
        resolve(tokens.access_token);
      }
    });
  });
};

function postMessage(count) {
  return new Promise(function(resolve, reject) {
      getJWT().then(function(token) {
          unirest.post('https://chat.googleapis.com/v1/spaces/AAAASGYz1ug/messages/')
              .headers({
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " + token
              })
              .send(JSON.stringify({
                  'text': 'Hello! This is message number ' + count,
              }))
              .end(function(res) {
		      console.log(res);
                  resolve();
              });
      }).catch(function(err) {
          reject(err);
      });
  });
}

const webhookURL = 'https://chat.googleapis.com/v1/spaces/AAAAaTQ2dEU/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=LKZL7-70E66a2JRzNWxdIIjn8ZMsK43tg7R3xgzlMTA%3D';
const apiURL = 'https://chat.googleapis.com/v1/spaces/AAAAaTQ2dEU/messages';

const data = JSON.stringify({
  "cards": [
    {
      "header": {
        "title": "Pizza Bot Customer Support",
        "subtitle": "pizzabot@example.com",
        "imageUrl": "https://goo.gl/aeDtrS",
        "imageStyle": "IMAGE"
      },
    }
  ]
});

app.get('/', (req, res) => {
	// fetch(webhookURL, {
  //method: 'POST',
  //headers: {
  //  'Content-Type': 'application/json; charset=UTF-8',
  //},
 // body: data,
 //}).then((response) => {
  //console.log(response);
 //})
 postMessage(1);
 res.send('Hello World!')
})

app.post('/', (req, res) => {
	console.log(req.body);
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
