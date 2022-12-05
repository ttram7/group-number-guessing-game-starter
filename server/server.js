const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5002;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

const checkNumber = require('./module/guesses');

// GET & POST Routes go here


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

app.post('/guesses', function(req, res){
  console.log(`${req.body.guess1}, ${req.body.guess2}, ${req.body.guess3}`);
  checkNumber.checkNumbers(req.body.guess1, req.body.guess2, req.body.guess3);
  res.sendStatus(201);
})

app.get('/guesses', function(req, res){
  console.log('request for /guesses was made');
  res.send(checkNumber.guessesArray);
})



