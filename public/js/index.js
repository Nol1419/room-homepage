/*Menu */

let btnOpen = document.querySelector('.btnOpen');
let contanier_links = document.querySelector('.contanier_links');
let btnClose  =  document.querySelector('.btnClose')

btnOpen.addEventListener('click', () => {
  contanier_links.style.top = '75px';
  contanier_links.style.left = '-1px';
})

btnClose.addEventListener('click', () => {
  contanier_links.style.top = '-75px';
})


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