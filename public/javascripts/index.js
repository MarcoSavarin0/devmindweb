
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


const servicesElement = document.getElementById('services');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      servicesElement.classList.add('show');
      observer.unobserve(entry.target); 
    }
  });
});

observer.observe(servicesElement);


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




document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menuList = document.getElementById('menu-list');
  const close = document.getElementById('close-button')
  menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('show-menu');
    menuList.classList.toggle('show-items');
    close.classList.toggle('show-cruz')
  });

  document.addEventListener('click', (event) => {
    if (!menuList.contains(event.target) && !menuToggle.contains(event.target)) {
      menuList.classList.remove('show-menu');
      menuList.classList.remove('show-items');
      close.classList.remove('show-cruz')
    }
  });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (window.innerWidth <= 767) {
            scrollToTopBtn.style.display = "block";
        }
    } else {
        scrollToTopBtn.style.display = "none";
    }
});
scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

