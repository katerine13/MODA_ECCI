
let idiomaActual = 'es';

function cambiarIdioma() {
  idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
  const btn = document.getElementById('btnIdioma');

  // Cambiar texto de todos los elementos con data-es / data-en
  document.querySelectorAll('[data-es]').forEach(el => {
    el.textContent = el.getAttribute('data-' + idiomaActual);
  });

  // Actualizar botón
  btn.textContent = idiomaActual === 'es' ? '🇺🇸 English' : '🇨🇴 Español';

  // Cambiar lang del html
  document.documentElement.lang = idiomaActual;
}

function mostrarReflexion() {
  const div = document.getElementById('reflexion');
  const btn = document.getElementById('btnReflexion');
  if (div.style.display === 'none') {
    div.style.display = 'block';
    div.style.opacity = '0';
    setTimeout(() => { div.style.transition = 'opacity 0.5s'; div.style.opacity = '1'; }, 10);
    btn.textContent = idiomaActual === 'es' ? 'Ocultar reflexión' : 'Hide reflection';
  } else {
    div.style.display = 'none';
    btn.textContent = idiomaActual === 'es' ? 'Ver reflexión personal' : 'See personal reflection';
  }
}

// Cerrar menú móvil al hacer clic en enlace
document.addEventListener('DOMContentLoaded', () => {
  const collapse = document.querySelector('.navbar-collapse');
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (collapse && collapse.classList.contains('show')) {
        document.querySelector('.navbar-toggler').click();
      }
    });
  });

  // Animación de entrada por scroll
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('section').forEach(sec => {
    sec.style.opacity = '0';
    sec.style.transform = 'translateY(18px)';
    sec.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    obs.observe(sec);
  });
});
