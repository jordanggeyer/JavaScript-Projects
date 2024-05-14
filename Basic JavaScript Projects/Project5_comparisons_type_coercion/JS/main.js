document.write(typeof 12); //Displaying the data tyoe of the number 12

document.write(12 + "9"); //Displaying the ability to combine numbers with a string through coercion

console.log(9-3) //Displaying the difference of 9 and 3 in the console

console.log(9<2) //Displaying a False function int he console

function NaNFunction() {
    document.getElementById("NaNDisplay").innerHTML = 0/0;
} //Displaying NAN (Not a Number) data type

function isTrue() {
    document.getElementById("isTrue").innerHTML = isNaN('This is a string');
} //Displaying the isNaN function that is true

function isFalse() {
    document.getElementById("isFalse").innerHTML = isNaN('007');
} //Displaying the isNaN function that is false

function infinity() {
    document.getElementById("infinity").innerHTML = 2E310;
} //Displays a number larger than what JS is able to compute and is considered "infinity"

function negInfinity() {
    document.getElementById("negInfinity").innerHTML = -3E310;
} //Displays a number larger/negative than JS is able to compute and is considered "-infinity"

function booleantrue() {
    document.getElementById("booleantrue").innerHTML = 5>2;
} //Showing the "Boolean True"

function booleanfalse() {
    document.getElementById("booleanfalse").innerHTML = 5<2;
} //Showing the "Boolean False"

function doubleTrue() {
    document.getElementById("doubleTrue").innerHTML = 5 == 5
} //Showing the "==" as a means to compare values - True

function doubleFalse() {
    document.getElementById("doubleFalse").innerHTML = 6 == 5
} //Showing the "==" as a means to compare values - False

function doubleMatch() {
    document.getElementById("doubleMatch").innerHTML = (5 === 5)
} //Showing the "===" as a means to compare values and data types - True

function noMatch() {
    document.getElementById("noMatch").innerHTML = ("nine" === 5)
} //Showing the "===" as a means to compare values and data types - False

function sameValue() {
    document.getElementById("sameValue").innerHTML = ("five" === 5)
} //Demonstrates that although the values are the same, the data types are different therefore it returns False

function sameType() {
    document.getElementById("sameType").innerHTML = (9 === 5)
} //Demonstrates that if the value and type are the same it will return True

function showANDT() {
    document.getElementById("showANDT").innerHTML = (1 < 2 && 2 < 9)
} //Displaying a "True" using the AND (&&) operator

function showANDF() {
    document.getElementById("showANDF").innerHTML = (1 > 2 && 2 < 9)
} //Displaying a "False using the AND (&&) operator

function showORT() {
    document.getElementById("showORT").innerHTML = (1 > 2 || 2 < 9)
} //Displaying a "True" using the OR (||) operator

function showORF() {
    document.getElementById("showORF").innerHTML = (1 > 2 || 2 > 9)
} //Displaying a "False" using the OR (||) operator

function showNOTT() {
    document.getElementById("showNOTT").innerHTML = !(5 > 10)
} //Displaying the use of the NOT (!) operator, this displays a True argument as the argument evaluated is False

function showNOTF() {
    document.getElementById("showNOTF").innerHTML = !(20 > 10)
} //Displaying the use of the NOT (!) operator, this displays a False argument as the argument evaluated is True