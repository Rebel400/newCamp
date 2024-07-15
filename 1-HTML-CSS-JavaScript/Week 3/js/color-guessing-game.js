function runGame() {
    //const target = Math.floor(Math.randomInterger) * 101;
    document.body.style.background = "white";
    const colorList = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
    const target = Math.floor(Math.random() * colorList.length);

    let targetColor = colorList[target];

    let guessString = '';
    let guessColor = '';
    let correct = false;
    let numTries = 0;
    console.log(targetColor);

    function checkGuess(color, target) {

         if (!colorList.includes(color) ) {
            alert('Sorry I dont recognize your color')
           return false;
        }
        if (color === target) {
            document.body.style.background = color;
            return true;

        }else if(color > target){
            alert('The correct color is higher in the alphabet');
        }else if(color < target){
            alert('The correct color is lower in the alphabet');
        }
         else {
            return false;
        }


    }

    do {
        guessString = prompt('I am thinking of one of these colors \n\n' + colorList.join(', ') + '\n\n  What color am I thinking of?');
        if(!guessString){
            return;
        }
        guessNumber = +guessString;
        correct = checkGuess(guessString, targetColor);
        numTries += 1;

    } while (!correct);
    alert('You got it! The number was ' + target + '.\n\ It took you ' + numTries + ' tries to guess correctly');
}