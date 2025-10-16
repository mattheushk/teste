document.addEventListener("DOMContentLoaded", () => {
  // Tema
  const botao = document.getElementById("botao-tema");
  botao.addEventListener("click", () => {
    const ativo = document.body.classList.toggle("modo-escuro");
    botao.textContent = ativo ? "☀️" : "🌙";
  });

  // Carrossel
  const slides = document.querySelectorAll(".slide");
  const bolinhas = document.querySelectorAll(".bolinha");
  const setaEsq = document.querySelector(".seta.esquerda");
  const setaDir = document.querySelector(".seta.direita");

  let idx = 0;

  function mostrarSlide(i) {
    slides.forEach((s, j) => s.classList.toggle("ativo", j === i));
    bolinhas.forEach((b, j) => b.classList.toggle("ativa", j === i));
    idx = i;
  }

  function proximo() { mostrarSlide((idx + 1) % slides.length); }
  function anterior() { mostrarSlide((idx - 1 + slides.length) % slides.length); }

  setaDir.addEventListener("click", () => { proximo(); reset(); });
  setaEsq.addEventListener("click", () => { anterior(); reset(); });
  bolinhas.forEach((b, i) => b.addEventListener("click", () => { mostrarSlide(i); reset(); }));

  let intervalo = setInterval(proximo, 4000);
  function reset() { clearInterval(intervalo); intervalo = setInterval(proximo, 4000); }

  mostrarSlide(0);
});
