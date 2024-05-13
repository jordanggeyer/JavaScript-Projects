function addition_function() {                                                      
    var addition = 2 + 2;
    document.getElementById("add").innerHTML = "2 + 2 = " + addition;
}
//Shows addition and only shows the sum of the numbers provided in the variable declaration

function subtraction_function() {                       
    var subtraction = 10 - 9;
    document.getElementById("subtract").innerHTML = "10 - 9 = " + subtraction;
}
//Shows subtraction and only shows the difference of the numbers provided in the variable declaration

function multiplication_function() {
    var multiplication = 520 * 9;
    document.getElementById("multiply").innerHTML= "520 x 9 = " + multiplication;
}
//Shows multplication but is not able to receive input, only displays the answer to the numbers proivded in the variable declaration

function division_function() {
    var division = 45 / 9;
    document.getElementById("divide").innerHTML= "45 / 9 = " + division;
}
//Shows division but is not able to receive input, only displays the answer to the numbers proivded in the variable declaration

function multiple_function() {
    var operations = (1 + 2) * 10 / 2 - 5;
    document.getElementById("multioperation").innerHTML= "1 plut 2, multiplied by 10, divided in half and then subtracted by 5 equals " + operations;
}
//Shows the use of multiple operations in one argument but is not able to receive input, only displays the answer to the numbers proivded in the variable declaration

function modulus_function() {
    var modulus_math = 25 % 6;
    document.getElementById("modulus").innerHTML= "When you divide 25 by 6 you have a remainder of: " + modulus_math;
}
//Displays the ability to do complex division problems while displaying the remainder of the division problem

function flipsign_function() {
    var x = 10;
    document.getElementById("flipsign").innerHTML= -x;
}
//Displays the ability to flip the sign of any number

function increment_function() {
    var x = 5;
    x++;
    document.getElementById("increment").innerHTML= x;
}
//Displays the ability to add to a number in set increments

function decrement_function() {
    var x = 5;
    x--;
    document.getElementById("decrement").innerHTML= x;
}
//Displays the ability to subtract to a number in set increments

function randomnumber() {
    x = (Math.random() * 100); //Sets X to a random number between 0-100
    window.alert(Math.round(x)); //Rounds X to the 'closest' whole number
}
//Displays the math object, also utilized the "math.random" object and the "math.round" object