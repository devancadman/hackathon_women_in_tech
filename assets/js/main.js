var myCarousel = document.querySelector('#myCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 8000 // set interval to 15 seconds
});

// Show the first slide initially
carousel.to(0);

// Create an array of all the modals
var modals = document.querySelectorAll('.modal');

// Loop through each modal
modals.forEach(function(modal, index) {
  // Show the modal when the corresponding slide is shown
  myCarousel.addEventListener('slide.bs.carousel', function(event) {
    if (event.to === index) {
      var modalId = modal.getAttribute('id');
      var modalInstance = new bootstrap.Modal(document.querySelector(`#${modalId}`));
      setTimeout(function() {
        modalInstance.show();
        carousel.pause();
      }, 3000); // show modal after 4 seconds
    }
  });

  // Hide the modal and restart the carousel when the modal is closed
  modal.addEventListener('hidden.bs.modal', function() {
    carousel.cycle();
  });
});



// Get all the slides
var slides = document.querySelectorAll('.carousel-item');

// Loop through each slide
slides.forEach(function(slide, index) {
  // Get the cable-energy element for this slide
  var cable = slide.querySelector('.cable-energy');

  // If the slide is the active slide, show the cable
  if (slide.classList.contains('active')) {
    cable.style.opacity = '1';
  } else {
    // Otherwise, hide the cable
    cable.style.opacity = '0';
  }
});

// Show the cable when the slide is slid
var myCarousel = document.querySelector('#myCarousel');
var timeoutId;

myCarousel.addEventListener('slid.bs.carousel', function() {
  // Get the active slide
  var activeSlide = myCarousel.querySelector('.carousel-item.active');

  // Get the cable-energy element for the active slide
  var cable = activeSlide.querySelector('.cable-energy');

  // Hide the cable for the non-active slides
  slides.forEach(function(slide, index) {
    if (slide !== activeSlide) {
      var cable = slide.querySelector('.cable-energy');
      cable.style.opacity = '0';
    }
  });

  // Show the cable with a 2-second delay
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(function() {
    cable.style.opacity = '1';
  }, 2000);
});


