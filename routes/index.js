const express = require('express');
const router = express.Router();

// sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Wraith",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Dominic",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

// GET form
router.get('/new', function(req, res, next) {
  res.render('form');
});

// POST for /new
router.post('/new', function(req, res, next) {
  let user = req.body.user;
  let message = req.body.message;
  messages.push({
    text: message,
    user: user,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
