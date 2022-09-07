/*MENU*/ 

/* width: 100%;
top: 75px;
font-size: 1rem;
margin: -75px 0 0 0;
*/

// contanier_links

const btnOpen = document.getElementsByClassName('btnOpen');

//top: 0;
const btnClose  =  document.getElementsByClassName('btnClose')



/*CARRUSEL*/

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
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "grid";
}