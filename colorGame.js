var numSquares = 6;
var colors = [];
var pickedColor;
// This is called in the function
// var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
// This is changed to an open variable
// var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

// This is used to clean up the code and start the code that needs to run right away
function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        // Ternary opperator - same as the if statement that is commented out.
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        // if(this.textContent === "Easy") {
        //     numSquares = 3;
        // } else {
        //     numSquares = 6;
        reset();
        });
    }
}

function setupSquares() {
    for(var i = 0; i < squares.length; i++) {
        // This would be deleted because it is in the reset function
        // Add initial color to squares
        //squares[i].style.backgroundColor = colors[i];
    
        // Add click listeners to squares
        squares[i].addEventListener("click", function() {
            // Grab color of clicked square
            var clickedColor = this.style.backgroundColor;
    
            // Compare color to pickedColor
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

// This code gets moved up to the function init section
// for(var i = 0; i < modeButtons.length; i++) {
//     modeButtons[i].addEventListener("click", function() {
//         modeButtons[0].classList.remove("selected");
//         modeButtons[1].classList.remove("selected");
//         this.classList.add("selected");
//         // Ternary opperator - same as the if statement that is commented out.
//         this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
//         // if(this.textContent === "Easy") {
//         //     numSquares = 3;
//         // } else {
//         //     numSquares = 6;
//         reset();
//     });
// }

function reset() {
    // Generate all new colors
    colors = generateRandomColors(numSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // Change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
    } else {
        squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function() {
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     messageDisplay.textContent = "";
//     resetButton.textContent = "New Colors";
//     for(var i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function() {
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     messageDisplay.textContent = "";
//     resetButton.textContent = "New Colors";
//     for(var i = 0; i < squares.length; i++) {
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//     }
// });

// Refactoring to use the function that we just created. Normally this code would be deleted not just commented out.
resetButton.addEventListener("click", function() {
    reset();
})
// resetButton.addEventListener("click", function() {
//     // Generate all new colors
//     colors = generateRandomColors(numSquares);
//     // Pick a new random color from array
//     pickedColor = pickColor();
//     // Change colorDisplay to match picked Color
//     colorDisplay.textContent = pickedColor;
//     resetButton.textContent = "New Colors";
//     messageDisplay.textContent = "";
//     // Change colors of squares
//     for(var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//     }
//     h1.style.backgroundColor = "steelblue";
// });

// This line is removed due to it getting changed in the init function which is calling reset
// colorDisplay.textContent = pickedColor;

// This code gets moved into the init function
// for(var i = 0; i < squares.length; i++) {
//     // Add initial color to squares
//     squares[i].style.backgroundColor = colors[i];

//     // Add click listeners to squares
//     squares[i].addEventListener("click", function() {
//         // Grab color of clicked square
//         var clickedColor = this.style.backgroundColor;

//         // Compare color to pickedColor
//         if(clickedColor === pickedColor) {
//             messageDisplay.textContent = "Correct!";
//             resetButton.textContent = "Play Again?";
//             changeColors(clickedColor);
//             h1.style.backgroundColor = clickedColor;
//         } else {
//             this.style.backgroundColor = "#232323";
//             messageDisplay.textContent = "Try Again";
//         }
//     });
// }

function changeColors(color) {
    // Loop through all squares
    for(var i = 0; i < squares.length; i++) {

    // Change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // Make an array
    var arr = []

    // Add num random colors to array
    for(var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    // Return that array
    return arr;
}

function randomColor() {
    // Pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);

    // Pick "green" from 0-255
    var g = Math.floor(Math.random() * 256);

    // Pick "blue" from 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}