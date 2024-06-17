function getReceipt() { //Allows the program to reiterate the final result back to the end user with a total
    var text1 = "<h3>You Ordered:</h3>"; //Shows a header that that precedes the actual receipt
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) { //Checks that a size is selected
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") { //Declares cost for each size
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; //Adds the cost of the size declared above to the running total
    console.log(selectedSize+" = $" + sizeTotal + ".00"); //Shows the total on the console for the size
    console.log("size text1: "+text1); //shows the receipt text including the size
    console.log("subtotal: $" + runningTotal + ".00"); //formats the subtotal
    getTopping(runningTotal,text1); //Calls below function to add the topping total to the running total to be displayed in the receipt           
};

function getTopping(runningTotal,text1) { //Gathers the topping selections and adds the cost to running total
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) { //Checks to see if topping is selected
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value); //Pushes value of toppings selected
            console.log("selected topping item: ("+toppingArray[j].value+")"); //Displays total for toppings
            text1 = text1 + toppingArray[j].value + "<br>"; //Shows total formatted
        }    
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); //Allows for first topping free
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); //Adds topping total to the running total
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1; //Displays the text via the HTML
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"; //Displays the total text via HTML
};