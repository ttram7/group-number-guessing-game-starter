let max = 25;
let min = 0;
let randomNumber = Math.floor(Math.random() * (1 + max - min) + min); 
console.log('The random number: ', randomNumber);

let guessesArray = [];

let checkNumbers = {
    guessesArray: guessesArray,
    checkNumbers: 
function checkNumbers (num1, num2, num3){
  // console.log(randomNumber);
  // if (num1 || num2 || num3 == randomNumber){
  // } 
  
  if (randomNumber == num1){
    guessesArray.push(`Tina Wins with ${num1}`);
    // $('#correct-guess').append(`<p>Tina Wins!!!</p>`);
      // return "Tina Wins!!!";
    } if (num1 > randomNumber) {
        guessesArray.push(`Tina, your guess of ${num1} is too high`);
    // return "Tina, your guess is too high!"
      } if(num1 < randomNumber) {
        guessesArray.push(`Tina, your guess of ${num1} is too low!`);
  //  return "Tina, your guess is too low!"
  }
  
  if (randomNumber == num2){
    guessesArray.push(`Jade Wins with ${num2}`);
    // return "Jade Wins!!!";
    } if (num2 > randomNumber) {
      guessesArray.push(`Jade, your guess of ${num2} is too high!`);
    // return "Jade, your guess is too high!"
      } if(num2 < randomNumber) {
        guessesArray.push(`Jade, your guess of ${num2} is too low`);
    // return "Jade, your guess is too low!"
    // console.log('Jade, your guess is too low!');
  }      
  
  if (randomNumber == num3){
    guessesArray.push(`Bryan Wins with ${num3}`);
      // return "Bryan Wins!!!";
    } if (num3 > randomNumber) {
      guessesArray.push(`Bryan, your guess of ${num3} is too high!`);
    // return "Bryan, your guess is too high!"
      } if(num3 < randomNumber) {
        guessesArray.push(`Bryan, your guess of ${num3} is too low`);
    // return "Bryan, your guess is too low!"
    // console.log('Bryan, your guess is too low!');
  }

  console.log(`guesses array: ${guessesArray}`);
  }
}


module.exports = checkNumbers;