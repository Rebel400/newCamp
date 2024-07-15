function runGame() {
   //const target = Math.floor(Math.randomInterger) * 101;
    const target=Math.floor(Math.random() *100) +1


    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;
   // let chalStringOne= 'apple'
   // let chalStringtwo='pie'



    // let cost = GENERAL_ADMISSION_TICKET_COST;
   console.log (target);
    //console.log(chalStringOne+chalStringtwo); 
   // console.log(chalStringOne=chalStringtwo); 
   // console.log(chalStringOne);


    do {
        guessString = prompt('I am thinking of a number in the range 1 to 100. \n\nWhat is the number?');
        guessNumber = +guessString;
        correct = checkGuess(guessNumber, target);
        numTries += 1;

    } while (!correct);
    alert ('You got it! The number was ' +target+ '.\n\ It took you ' + numTries + ' tries to guess correctly');

    function checkGuess(guessNumber, target) {
        let correct = false;
        if (isNaN(guessNumber)) {

            alert('You have not entered a number. \n\n Please enter a number in the 1-100 range.');
        } else if ((guessNumber < 1) || (guessNumber > 100)) {
            alert('Please enter an integer in the 1-100 range.');
        }
        else if (guessNumber > target) {
            alert('Your number is too large!');
        }
        else if (guessNumber < target) {
            alert('Your number is too small');

        } else {
            correct = true;
        } return correct;

    }


}
