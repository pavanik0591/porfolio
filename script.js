// Automatic slideshow
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length; // loop back
}

// Change slide every 5 seconds
setInterval(showSlide, 5000);

// Show first slide immediately
showSlide();
