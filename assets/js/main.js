const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white/10', 'backdrop-blur-md', 'shadow-lg');
  } else {
    navbar.classList.remove('bg-white/10', 'backdrop-blur-md', 'shadow-lg');
  }
});
