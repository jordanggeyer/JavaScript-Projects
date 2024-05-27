function validateForm() {
    let x = document.forms["basic-form"]["fname"].value;
    if (x == "") {
      alert("Please fill out ALL fields.");
      return false;
    }
    let y = document.forms["basic-form"]["lname"].value;
    if (y== "") {
        alert("Please fill out ALL fields.");
        return false;
    }
    let z = document.forms["basic-form"]["email"].value;
    if (z== "") {
        alert("Please fill out ALL fields.");
        return false;
    }
    else {
        alert("Thank you for your submission!");
    }
  }