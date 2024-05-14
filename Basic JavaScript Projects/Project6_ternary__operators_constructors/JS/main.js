function Ride_Function() {
    var Height, Can_Ride; //Declares Height & Can_Ride variables
    Height = document.getElementById("Height").value; //Retrieves the value from the input element in the HTML
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough"; //Sets the logic for the true/false
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride."; //Displays the outcome
} 

function Election_Function() {
    var Age, Can_Vote; //Declares the Age & Can_Vote variables
    Age = document.getElementById("Age").value; //Retrieves the value from the input element in the HTML
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough"; //Sets the logic for the true/false
    document.getElementById("Election").innerHTML = Can_Vote + " to vote."; //Displays the outcome
}

function Vehicle (Make, Model, Year, Color) {
    this.Vehcile_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
} //Created the object and the parameters for the object
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red"); //created a new instance of Vehicle
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black"); //created a new instance of Vehicle
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard"); //created a new instance of Vehicle
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manafactured in " + Erik.Vehicle_Year;
} //concatenates strings with the values above to return a logical sentence

function Dog (Owner, Breed, Color, Age) {
    this.Dog_Owner = Owner;
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
    this.Dog_Age = Age;
}
var Rover = new Dog ("John", "Golden Retriever", "Golden", "6")
var Daisy = new Dog ("Laura & Clayton", "Shepherd Mix", "Tan & Brown", "2")
var Buddy = new Dog ("Bill", "Pug", "Brown", "12")
function dogFunction() {
    document.getElementById("New_and_This").innerHTML = "Daisy is owned by " + Daisy.Dog_Owner + " and is a " + Daisy.Dog_Breed + ", Daisy is " + Daisy.Dog_Color + " and is " + Daisy.Dog_Age + ".";
}

function count_Function() { //Parent Function
    document.getElementById("Counting").innerHTML = Count (); //Returning back to the program and returning the final amount
    function Count() { //First Nested Function
        var Starting_Point = 5; //Sets starting number at 5
        function Plus_One() {Starting_Point += 1;} //Sets the increment of 1
        Plus_One(); //Utilizies the increment
        return Starting_Point; //returns the new "Starting_Point"
    }
}
