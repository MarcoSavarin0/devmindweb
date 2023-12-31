
const header = document.querySelector('header');


const scrollThreshold = 100;

window.addEventListener('load', function() {
  document.querySelector('.loader-container').style.display = 'none';
});


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
      $(".container2").addClass("show");
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


/* Check the location of each element */
$('.content').each( function(i){
  
  var bottom_of_object= $(this).offset().top + $(this).outerHeight();
  var bottom_of_window = $(window).height();
  
  if( bottom_of_object > bottom_of_window){
    $(this).addClass('hidden');
  }
});


$(window).scroll( function(){
    /* Check the location of each element hidden */
    $('.hidden').each( function(i){
      
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
      
        /* If the object is completely visible in the window, fadeIn it */
        if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},700);
        }
    });
});


const languageSelect = document.getElementById("language-select");


console.log(languageSelect.href)

const languageFromPath = window.location.pathname.split("/")[1];

const navhome = document.getElementsByClassName('nav-home')[0]

const navAbout = document.getElementsByClassName('nav-about')[0]

const navService = document.getElementsByClassName('nav-service')[0]

const navdev = document.getElementsByClassName('nav-dev')[0]

const navcontact = document.getElementsByClassName('nav-contact')[0]

const banderas = document.getElementById('banderas')

const banderaUS = `<img id="banderas" class="bandera" src="/images/banderaUSA.png" alt="Bandera Argentina"> `

if (languageFromPath === "es") {
  navhome.innerText = 'Inicio'
  navAbout.innerText = 'Nosotros'
  navService.innerText = 'Servicios'
  navdev.innerText = 'Desarrolladores'
  navcontact.innerText = 'Contacto'
  languageSelect.innerHTML = banderaUS
  languageSelect.href = "/"
}







console.log('Hola te quiero!');
console.log("   /-_-\\");
console.log("  (     )");
console.log("   \\ *_/");
console.log("    /-\\");
console.log("   /   \\");
let messi = 'The Best'