/*
reference: https://www.w3schools.com/howto/howto_js_read_more.asp
*/
let readMoreBtn = document.getElementsByClassName("readMore");
let dots = document.getElementsByClassName("dots");
let moreText = document.getElementsByClassName("more");
for(let i=0; i < readMoreBtn.length; i++){
    readMoreBtn[i].addEventListener("click", function readMore(){
        if (dots[i].style.display === "none") {
            dots[i].style.display = "inline";
            readMoreBtn[i].innerHTML = "Read more";
            moreText[i].style.display = "none";
          } else {
            dots[i].style.display = "none";
            readMoreBtn[i].innerHTML = "Read less";
            moreText[i].style.display = "inline";
          }
    });
}

let inquireBtn = document.getElementsByClassName("inquire");
let url = "../contact_us/contact_us.html"
for(let i=0; i < inquireBtn.length; i++){
  inquireBtn[i].addEventListener("click", function readMore(){
    location.replace(url); // reference: https://www.w3schools.com/jsref/met_loc_replace.asp
  });
}