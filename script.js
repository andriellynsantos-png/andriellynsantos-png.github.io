const topo = document.getElementById("topo");
const header = document.querySelector("header");

function aoRolar() {
  topo.classList.toggle("mostrar", window.scrollY > 500);
  header.classList.toggle("rolado", window.scrollY > 20);
}
window.addEventListener("scroll", aoRolar, { passive: true });
aoRolar();
topo.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Seções aparecem ao rolar
if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("show"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll("section:not(.hero)").forEach(s => { s.classList.add("hidden"); obs.observe(s); });
}

let cliquesNaFoto = 0;
const fotoPerfil = document.getElementById('foto-perfil');

if (fotoPerfil) {
  fotoPerfil.style.cursor = 'pointer';
  fotoPerfil.addEventListener('click', () => {
    cliquesNaFoto++;
    if (cliquesNaFoto > 3) {
      fotoPerfil.src = 'img/ratinho.jpg';
      fotoPerfil.alt = 'Um ratinho apareceu!';
      fotoPerfil.classList.add('susto-ratinho');
    }
  });
}
