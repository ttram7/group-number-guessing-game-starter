$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#submit-btn').on('click', submitFunction);
}

function submitFunction () {
  console.log('submit button has been clicked');
  $.ajax({
    method: 'POST',
    url: '/guesses',
    data: {
      guess1: $('#tina-guess').val(), 
      guess2: $('#jade-guess').val(),
      guess3: $('#bryan-guess').val(),
    }
 }).then(function(response) {
  getGuesses();
 })
}

 function getGuesses(){
 $.ajax({
  method: 'GET',
  url: '/guesses',
 }).then(function(response) {
  console.log(response);
  appendToDom(response);
  // getGuessesArray();
 })
}

function appendToDom(array) {
    $('#tina-guess-history').append(array[0]);
    $('#jade-guess-history').append(array[1]);
    $('#bryan-guess-history').append(array[2]);
}
  

