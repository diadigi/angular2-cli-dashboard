var express = require('express'),
    _       = require('lodash'),
    jwt     = require('jsonwebtoken'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var users = [{
  id: 1,
  email: 'jane@doe.com',
  password: 'jane123'
}];

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), 'secret stuff here', { expiresIn: '60m' });
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.post('/sessions/create', function(req, res) {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send("You must send the email and the password");
  }

  var user = _.find(users, {email: req.body.email});
  if (!user) {
    return res.status(401).send("The email or password don't match");
  }

  if (!(user.password === req.body.password)) {
    return res.status(401).send("The email or password don't match");
  }

  res.status(201).send({
    id_token: createToken(user)
  });
});
