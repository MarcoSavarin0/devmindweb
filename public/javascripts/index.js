
const header = document.querySelector('header');


const scrollThreshold = 100;


function fadeInNavbarBackground() {
  header.style.transition = 'background-color 0.5s ease'; 
  header.style.backgroundColor = 'black'; 
}


function fadeOutNavbarBackground() {
  header.style.transition = 'background-color 0.5s ease'; 
  header.style.backgroundColor = 'transparent'; 
}


function updateNavbarBackground() {
  if (window.innerWidth >= 768) {
    if (window.scrollY >= scrollThreshold) {
      fadeInNavbarBackground();
    } else {
      fadeOutNavbarBackground();
    }
  }
}


window.addEventListener('scroll', updateNavbarBackground);


updateNavbarBackground();

window.addEventListener('load', function() {
  const title = document.querySelector('.welcome-h1');
  title.classList.add('show');
});

document.addEventListener('scroll', function() {
  const aboutSection = document.getElementById('about');
  if (isElementInViewport(aboutSection)) {
    aboutSection.classList.add('show');
  }
});

$(document).ready(function() {

  $('a[href="#about-link"]').click(function(e) {
      e.preventDefault();
     
      var aboutOffset = $("#about").offset().top;
     
      $('html, body').animate({ scrollTop: aboutOffset }, 1000);
  });

 
  $(window).scroll(function() {
      var viewportTop = $(window).scrollTop();
      var aboutOffset = $("#about").offset().top;
      var showOffset = aboutOffset - ($(window).height() / 2);
      if (viewportTop > showOffset) {
          $("#about").addClass("show");
      }
  });
});

$(document).ready(function() {

  $(window).scroll(function() {

    var viewportTop = $(window).scrollTop();
  
    var developersOffset = $("#developers").offset().top;
    var showOffset = developersOffset - ($(window).height() / 2);
    if (viewportTop > showOffset) {
      $(".developers").addClass("show");
    }
  });
});
