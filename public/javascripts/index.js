// Obtener el elemento del header/navbar
const header = document.querySelector('header');

// Obtener la altura después de la cual se cambia el color de fondo (ajústalo según tus necesidades)
const scrollThreshold = 100;

// Función para agregar el efecto de fade in
function fadeInNavbarBackground() {
  header.style.transition = 'background-color 0.5s ease'; // Establece la transición para el fade in
  header.style.backgroundColor = 'black'; // Cambia el color a negro
}

// Función para agregar el efecto de fade out
function fadeOutNavbarBackground() {
  header.style.transition = 'background-color 0.5s ease'; // Establece la transición para el fade out
  header.style.backgroundColor = 'transparent'; // Cambia el color a transparente
}

// Función para cambiar el color de fondo del header/navbar
function updateNavbarBackground() {
  if (window.innerWidth >= 768) {
    if (window.scrollY >= scrollThreshold) {
      fadeInNavbarBackground();
    } else {
      fadeOutNavbarBackground();
    }
  }
}

// Agregar el evento de scroll para ejecutar la función cuando se hace scroll
window.addEventListener('scroll', updateNavbarBackground);

// Ejecutar la función al cargar la página para establecer el color de fondo inicial
updateNavbarBackground();
// Código para mostrar el título después de cargar la página
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