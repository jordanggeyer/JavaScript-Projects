function number_function() {
    var number_output;
    var numbers = parseInt(document.getElementById("number_input").value);
    var text_string = " is a great choice!";
    switch(numbers) {
        case 0:
            number_output = 0 + text_string;
        break;
        case 1:
            number_output = 1 + text_string;
        break;   
        case 2:
            number_output = 2 + text_string;
        break;   
        case 3:
            number_output = 3 + text_string;
        break;   
        case 4:
            number_output = 4 + text_string;
        break;   
        case 5:
            number_output = 5 + text_string;
        break;   
        case 6:
            number_output = 6 + text_string;
        break;   
        case 7:
            number_output = 7 + text_string;
        break;   
        case 8:
            number_output = 8 + text_string;
        break;   
        case 9:
            number_output = 9 + text_string;
        break;
        default:
            number_output = "Please enter the number only.";
    }
    document.getElementById("output").innerHTML = number_output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "This text has changed!";
}