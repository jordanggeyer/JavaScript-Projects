function sentence_Concat() { //Shows the concatenate method
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concat").innerHTML = whole_sentence;
}

function slice_method() { //Shows the slice method which allows you to extract pieces of strings
    var sentence = "Your mother was a hamster and your father smelt of elderberries.";
    var section = sentence.slice (18,25)
    document.getElementById("slice").innerHTML = section.toUpperCase();
}

function search_method() { //Shows the Search Method which allows yout to find the index of certain patterns within strings
    var str = "Your mother was a hamster and your father smelt of elderberries.";
    var pattern = /elderberries/;
    var index = str.search(pattern);
    document.getElementById("search").innerHTML = index;
}

function string_method() { //Shows the String Method which allows you to convert data types to string
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_method() { //Shows the precision method which allows you to specify the amount of digits to display a number
    var X = 1346851.0165106516165544506516
    document.getElementById("precision").innerHTML = X.toPrecision(7)
}

function fixed_method() { //Shows the fixed method which allows you to specify the mount of digits to display AFTER the decimal
    var X = 1346851.1051
    document.getElementById("fixed").innerHTML = X.toFixed(2)
}

function valueof_method() { //Shows the ValueOf Method which allows you to display the primitive value of a value
    var X = 42
    document.getElementById('valueof').innerHTML = X.valueOf();
}