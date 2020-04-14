/**
 * Guess The Number Game
 * TODO 1: Get user value from input and save it to variable numberGuess
 * TODO 2: Generate a random number 1 to 100 and save it to variable correctNumber
 * TODO 3: Console whether the guess is too high, too low, or is correct inside playGame function
 * TODO 4: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * TODO 5: Complete the showYouWon, showNumberAbove, showNumberBelow
 * TODO 6: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO 7: Save the guess history in a variable called guess
 * TODO 8: Display the guess history using displayHistory() function
 * TODO 9: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 
let guesses = [];
// Variable for store the correct random number 
let correctNumber = getRandomNumber();

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}

function playGame(){
  let numberGuess = document.getElementById('number-guess').value; // Todo 1
  displayResult(numberGuess);
  saveGuessHistory(numberGuess); // Todo 7
  displayHistory(); 
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 * The displayResult funtion is Todo 4
 */
function displayResult(numberGuess) {
    // Todo 3
    if (numberGuess > correctNumber) {
      showNumberAbove(); // Todo 6
    } else if (numberGuess < correctNumber) {
      showNumberBelow(); // Todo 6
    } else {
      showYouWon(); // Todo 6
    } 
}


/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  // Reset the correctNumber
  correctNumber = getRandomNumber();
  // Reset the result display 
  document.getElementById("result").innerHTML = "";
  // Reset the gusses array
  guesses = [];
  // Reset the history display 
  document.getElementById("history").innerHTML = "";
  // Reset the number inside the input field
  document.getElementById('number-guess').value = "";
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random to get random number 
 * HINT: Use Math.floor() to make the float to intiger number
 * Todo 2
 */
function getRandomNumber(){
  let randomNumber = Math.floor(Math.random() * 100) + 1; 
  return randomNumber;
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 * Todo 7
 */
function saveGuessHistory(guess) {
  console.log(guesses.push(guess), guesses);
  
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li>
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 * Todo 8
 */
function displayHistory() {
  let index = guesses.length - 1; // TODO
  let list = "<ul class='list-group'>";
  while(index >= 0){
    list += "<li class='list-group-item'>" + 
    "You guessed " + guesses[index] + "</li>";
    index -= 1;
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' or 'warning' and text parameters 
   * The alert shows in the middle not below the buttons or up the numbers
   * That is because we defined it as result in the document below 
   * First, we get the dialog html link, then the text, and then end it by html
   * After that, we can send it to the indeex.html file to make change. 
   */

function showYouWon(){
  const text = "Awesome job, you got it!" + " You got the right answer from the "
  + (guesses.length + 1) + " trilal!! " + "Restart the game to get a better result"
  let dialog = getDialog("won", text) // Todo 5
  document.getElementById("result").innerHTML = dialog; 
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog = getDialog("warning", text) // Todo 5
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  let dialog = getDialog("warning", text) // Todo 5
  document.getElementById("result").innerHTML = dialog;
}
