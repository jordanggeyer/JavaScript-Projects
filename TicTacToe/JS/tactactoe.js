let activePlayer = 'X'; //Initialized variable for active player
let selectedSquares = []; //Initialized variable for selected squares

function placeXOrO(squareNumber) {
    if(!selectedSquares.some(element => element.includes(squareNumber))) { //if selected squares variable includes 0-8 then process the boolean logic below
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') { //if active player equals 'X' then display an 'X'
            select.style.backgroundImage = 'url("./IMG/x.png")';
        } 
        else { //if active player equals 'O' then display an 'O'
            select.style.backgroundImage = 'url("./IMG/o.png")';
        }

        selectedSquares.push(squareNumber + activePlayer);

        checkWinConditions(); //Check win condition, if true then end otherwise keep going

        if (activePlayer === 'X') { //if active player currently equal 'X' set variable to 'O'
            activePlayer = 'O';
        }
        else {
            activePlayer = 'X'; //if active player equals 'O' set variable to 'X'
        }
        audio('./Media/place.mp3'); //Place audio

        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () {computersTurn(); }, 1000); //if active player equals 'O' then disableClick enduser click and allow 'computersTurn'
        }
        return true;
    }

    function computersTurn() {
        let success = false;
        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9)); //computer selects a random number 1-9
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}    

function checkWinConditions() { //Lists all win conditions as well the coordinates for each line drawn
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 550, 100)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0X', '3X', "6X")) {drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
    else if (selectedSquares.length >= 9) { //if number of squares are exceeded
        audio('./Media/tie.mp3'); //play tie audio
        setTimeout(function() {resetGame();}, 500); //reset game function
    }  
    function arrayIncludes(squareA, squareB, squareC) { //defines function used in prior step, allows for win conditions to be checked
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) {return true;}
    }
}

function disableClick() { //disables click during computer turn
    body.style.pointerEvents = 'none'; //disables any pointer events that are pre-existing
    setTimeout(function () {body.style.pointerEvents = 'auto';}, 1000); //disables the events until computer as selected the square
}

function audio(audiURL) { //creates action for audio to plau
    let audio = new Audio(audiURL); //creates a new audio object
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { //defines functions for use in check win conditions
    const canvas = document.getElementById('win-lines'); //targets the win lines in the canvas in HTML
    const c = canvas.getContext('2d'); //creates a 2d rendering instead of 3d
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    function animateLineDrawing() { //used to slowly draw the line across the canvas
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608); //clears the canvas
        c.beginPath(); //sets beginning of line given the variables in Check win condition
        c.moveTo(x1, y1); //begins to move the line down the path
        c.lineTo(x, y); //sets the end of the path
        c.lineWidth = 10; //sets line width
        c.strokeStyle = 'rgba(70, 255, 33, .8)'; //sets color of the line
        c.stroke();
        if (x1 <= x2 && y1 <= y2) { //moves line from top left to bottom right and vice versa
            if (x < x2) {x += 10; } //ensures that the line should continue horizontally, increments by 10 if it has not reached the destination
            if (y < y2) {y += 10; } //ensures that the line should continue vertically, increments by 10 if it has not reached the destination
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); }  
        }
    }

    function clear() { //if win line is drawn clear the board
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0 , 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick(); //once win condition is met, disable click
    audio('./Media/winGame.mp3'); //play win audio
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

function resetGame() { //reset game
    for (let i = 0; i < 9; i++ ) { //resets counter to 0
        let square = document.getElementById(String(i));
        square.style.backgroundImage = ''; //resets all images to blank squares
    }
    selectedSquares = []; //all squares unselected
}
