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


/* Source - https://stackoverflow.com/questions/14004117/create-div-and-append-div-dynamically*/
window.addEventListener('load', function() {
  /*Add back to top button*/
  const BackToTop = document.createElement('div');
  BackToTop.classList.add('back-to-top');
  document.body.appendChild(BackToTop);

  /* Show and hide button based on scroll location - Source: https://stackoverflow.com/questions/28547200/show-hide-menu-based-on-scroll-position & https://codepen.io/matthewcain/pen/ZepbeR*/
  window.addEventListener('scroll', function() {
      if (window.pageYOffset > 20) {
          BackToTop.classList.add('show');
      } else {
          BackToTop.classList.remove('show');
      }
  });

  /* Functionality to take user back to the top of the site */
  document.body.addEventListener('click', function(event) {
      if (event.target.classList.contains('back-to-top')) {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      }
  });

  /*Scroll to anchor when clicking a button with an anchor - helpfull ref: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link & https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2*/
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener('click', function(event) {
          const link = event.target.getAttribute('href');
          if (link.indexOf('#') > -1) {
              const rawLink = link.split('#')[0];
              const hash = link.split('#')[1];
              const pageUrl = window.location.href.split('#')[0];
              if (rawLink == pageUrl || rawLink == '') {
                  event.preventDefault();
                  const targetElement = document.getElementById(hash);
                  if (targetElement) {
                      const hashPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                      window.scrollTo({
                          top: hashPosition,
                          behavior: 'smooth'
                      });
                  }
              }
          }
      });
  }
});