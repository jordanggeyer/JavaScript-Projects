function Call_Loop() {
    var inputelement = document.getElementById("number_input"); //retrieves input
    var inputvalue = inputelement.value; //transforms that input into a value for use
    var digit = "";  //declares the digit variable
    var x = 1; //starts the loop at 1
    while (x <= (inputvalue)) { //if less than the input
        digit += "<br>" + x; //outputs the value for the countdown
        x++; //adds to the output value for use on the next loop
    } 
    document.getElementById("Loop").innerHTML = digit;  //displays the outputs
}

function str_length() { //function used to declare the character length of a string
    var originalele = document.getElementById("stringlength");
    var originalstr = originalele.textContent;
    var strlength = originalstr.length;
    document.getElementById("lengthvalue").innerHTML = strlength;
}

    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    function for_Loop() { //uses the "For Loop" method and also the use of an array in a loop
        for (Y = 0; Y < Instruments.length; Y++) {
            Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
    }

function array_Function() { //Displays how you can cherrypick information out of arrays for use
    var vehicle = [];
    vehicle[0] = "Mustang";
    vehicle[1] = "Camaro";
    vehicle[2] = "Silverado";
    vehicle[3] = "Malibu";
    document.getElementById("Array").innerHTML = "The vehicle in front of you is a " + vehicle[0] + ".";
}

function constant_Function() { //Uses a constant
    const Vehicle = {type:"Coupe", Make:"Toyota", Model: "GR86", Color: "Silver"}; //Constant Variable
    Vehicle.Color = "Red"; //Changed Color
    Vehicle.Price = 25000; //Added Price as an element
    document.getElementById("constant").innerHTML = "The color of the " + Vehicle.Make + " " + Vehicle.Model + " was " + Vehicle.Color + ", it is priced at " + Vehicle.Price + ".";
}

function let_keyword() { //displays the diffrerence of Var and Let
    var X = 22;
    document.getElementById("let_keyword1").innerHTML = X; 
    {
        let X = 44;
        document.getElementById("let_keyword2").innerHTML = X;
    }
    document.getElementById("let_keyword3").innerHTML = X;
}

function add(a , b) {
    return a + b; //return and how it is used
} 
 let result = add (12, 9);
 console.log(result);

 let basketball_team = {
    city: "Phoenix",
    teamname: "Suns",
    mascot: "Gorilla",
    pwr_rank: "4th",
    description: function() {
        return "The " + this.city + " " + this.teamname + " is currently ranked " + this.pwr_rank + "."; //using the "this" statement to work in a block context
    }
}; 

document.getElementById("basketball_team").innerHTML = basketball_team.description();


function break_statement() {
    let numbers = [1, 2, 3 ,4 ,5]
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 5) {
            console.log(numbers);
            break;    //using the break statement to exit the loop once the criteria is met
        }
        console.log(numbers[i])
    }
}

function continue_statement() {
    let i = 0;

    while (i < 10) {
        i++;
        if (i % 2 === 0) {
            continue; //using the continue statement to skip different parts of the loop once a criteria is met
        }
        console.log(i);
    }
}    