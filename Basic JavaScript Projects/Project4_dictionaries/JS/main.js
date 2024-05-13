function my_Dictionary()  {
    var Vehicle = {
        Make:"Ford",
        Model:"Mustang",
        Trim:"Ecoboost",
        Year:2020,
        Color:"Black",
        Transmission:"Automatic"
    };
//Dictionary displaying one object and multiple KVPs    
    delete Vehicle.Model; //Deletes the vehicle model from the Dictionary
    document.getElementById("dictionary").innerHTML = Vehicle.Model; //Displays as undefined as that KVP was removed via the previous line of code
}