let numberOfFaces = 5;
const theLeftSide = document.getElementById("leftSide");
const theRightSide = document.getElementById("rightSide");
let count = 0;
window.addEventListener('load', generateFaces);

function generateFaces() {
    for (let x = 0; x < numberOfFaces; x++) {
        let face = document.createElement('img');
        face.src = '../../Week 1/images/smile.png';


        const randomTop = Math.floor(Math.random() * 400) + 1
        const randomLeft = Math.floor(Math.random() * 400) + 1

        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        theLeftSide.appendChild(face);
        //document.getElementById("leftSide").appendChild(node); 


    }
    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    let correctFace = theLeftSide.lastChild;
    console.log(correctFace);
    correctFace.addEventListener('click', nextLevel);
    theRightSide.appendChild(leftSideImages);
    document.body.addEventListener('click', gameOver);

  

}

function nextLevel(event) {
    console.log("count");
    event.stopPropagation();
    numberOfFaces += 5;
    while (theLeftSide.firstChild) {
        let childToRemove = theLeftSide.firstChild;
        theLeftSide.removeChild(childToRemove);

    }
    while (theRightSide.firstChild) {
        let childToRemove = theRightSide.firstChild;
        theRightSide.removeChild(childToRemove);

    }




    generateFaces();


}

function gameOver() {
    count += 1;
    alert("Game Over, you made " + count + " wrong choices so far");
    docutment.body.removeEventListener('click', gameOver);
    theLeftSide.lastChild.removeEventListener('click', nextLevel);
}