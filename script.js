document.addEventListener("DOMContentLoaded", () => {
  const botaoTema = document.getElementById("botao-tema");
  botaoTema.addEventListener("click", () => {
    const escuro = document.body.classList.toggle("modo-escuro");
    botaoTema.textContent = escuro ? "☀️" : "🌙";
  });

  const slides = Array.from(document.querySelectorAll(".slide"));
  const bolinhas = Array.from(document.querySelectorAll(".bolinha"));
  const setaEsq = document.querySelector(".seta.esquerda");
  const setaDir = document.querySelector(".seta.direita");
  let index = 0;

  function mostrarSlide(i) {
    slides.forEach(s => s.classList.remove("ativo"));
    bolinhas.forEach(b => b.classList.remove("ativa"));
    slides[i].classList.add("ativo");
    bolinhas[i].classList.add("ativa");
    index = i;
  }

  function proximo() { mostrarSlide((index + 1) % slides.length); }
  function anterior() { mostrarSlide((index - 1 + slides.length) % slides.length); }

  setaDir.addEventListener("click", () => { proximo(); resetTimer(); });
  setaEsq.addEventListener("click", () => { anterior(); resetTimer(); });
  bolinhas.forEach((b, i) => b.addEventListener("click", () => { mostrarSlide(i); resetTimer(); }));

  let timer = setInterval(proximo, 5000);
  const carrossel = document.querySelector(".carrossel");
  carrossel.addEventListener("mouseenter", () => clearInterval(timer));
  carrossel.addEventListener("mouseleave", () => timer = setInterval(proximo, 5000));

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(proximo, 5000);
  }
});
