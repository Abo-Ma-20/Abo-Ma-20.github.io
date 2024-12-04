/*
reference: https://www.w3schools.com/howto/howto_js_read_more.asp
*/
let readMoreBtn = document.getElementsByClassName("readMore"); // getting a list of all read more buttons
let dots = document.getElementsByClassName("dots"); // getting a list of the span dots elements
let moreText = document.getElementsByClassName("more"); // getting a list of the span more elements
for(let i=0; i < readMoreBtn.length; i++){ // looping through read more elements based on its length
    readMoreBtn[i].addEventListener("click", function readMore(){ // assigning a click eventlistener funtion to the button based on the button index in the list
        if (dots[i].style.display === "none") { // checking if the relevant dots element is hidden
            dots[i].style.display = "inline"; // showing the relevant dots element
            readMoreBtn[i].innerHTML = "Read more"; // setting the button text
            moreText[i].style.display = "none"; // setting the display of the span relevant to more text to none when the button is clicked to read less 
          } else {
            dots[i].style.display = "none"; // dots span display is set to none
            readMoreBtn[i].innerHTML = "Read less"; // button text changed to read less
            moreText[i].style.display = "inline"; // more text is set to show the rest of the text when the button is clicked to read more
          }
    });
}

let inquireBtn = document.getElementsByClassName("inquire"); // get a list of all the inquire button elements 
let url = "../contact_us/contact_us.html" // setting the url of the contact_us page where the button shall lead to
for(let i=0; i < inquireBtn.length; i++){ // for loop similar to the above one
  inquireBtn[i].addEventListener("click", function readMore(){ // assigning a click eventlistener to navigate to the contact_us page when button is clicked
    location.replace(url); // reference: https://www.w3schools.com/jsref/met_loc_replace.asp
  });
}
