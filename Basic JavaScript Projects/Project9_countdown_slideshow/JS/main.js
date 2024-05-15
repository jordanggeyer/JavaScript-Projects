function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick,1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}
//Sets slide index to the first image
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i; //Set as a loop counter
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} //if the slide index is higher than 1, it sets it back to 1 - used when passing the last image in the slideshow
  if (n < 1) {slideIndex = slides.length} //if the slide inex is less than 1, it sets it back to the last index (4) - used when backing into the first image of the slide show
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //This makes the dots not appear "active" and hides the image associated with them
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //This activates the dot and the darken affect as well as displays the image
  }
  slides[slideIndex-1].style.display = "block"; //This makes the dots not appear "active" and hides the image associated with them
  dots[slideIndex-1].className += " active"; //This activates the dot and the darken affect as well as displays the image
}