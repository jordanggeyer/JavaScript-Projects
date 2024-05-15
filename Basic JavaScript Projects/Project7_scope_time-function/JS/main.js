var x = 10 //Shows the use of a global variable
function Add_numbers_1() {
    document.write(20 + x + "<br>")
}

function Add_numbers_2() {
    document.write(x + 100 + "<br>")
}    

Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var y = 9 //Shows use of local Variable
    document.write(20 + y + "<br>");
}

function Add_numbers_4() {
    document.write(y + 100 + "<br>")
}

Add_numbers_3();
Add_numbers_4();

function Add_numbers_5() {
    var y = 9
    console.log(20 + y + "<br>");
}

function Add_numbers_6() {
    console.log(y + 100 + "<br>")
}

Add_numbers_5();
Add_numbers_6();
//Displays an error that is identified using console.log                        
if (1 < 2) {
    document.write("The left number is smaller than the number on the right")
}//Displaying use of a basic IF function

function get_Date() {
    if (new Date().getHours() < 22) {
        document.getElementById("Greeting").innerHTML = "How are you today?"
    }
} //Displaying the use of an IF function using TIME

function myIF() {
    var z = 26
    if (z < 24) {
        console.log("X is less than 24!")
    }
}

myIF();


function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You are old enough to drink in the state of Arizona!";
    }
    else {
        Drink = "You are not old enough to drink in the state of Arizona!";
    }
    document.getElementById("How_old_are_you").innerHTML = Drink;
} //Shows the use of an ELSE function

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
} //Displays the use of an ELSE IF Function
