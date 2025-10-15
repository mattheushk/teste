document.addEventListener("DOMContentLoaded", () => {
  /* 🌗 Alternar tema */
  const botaoTema = document.getElementById("botao-tema");
  botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
    botaoTema.textContent = document.body.classList.contains("modo-escuro")
      ? "☀️ Modo Claro"
      : "🌙 Modo Escuro";
  });

  /* 🎞️ Carrossel */
  const slides = document.querySelectorAll(".slides img");
  const bolinhas = document.querySelectorAll(".bolinha");
  const setaEsquerda = document.querySelector(".seta.esquerda");
  const setaDireita = document.querySelector(".seta.direita");
  let indice = 0;

  function mostrarSlide(n) {
    slides.forEach(s => s.classList.remove("ativo"));
    bolinhas.forEach(b => b.classList.remove("ativa"));
    slides[n].classList.add("ativo");
    bolinhas[n].classList.add("ativa");
  }

  function proximoSlide() {
    indice = (indice + 1) % slides.length;
    mostrarSlide(indice);
  }

  function slideAnterior() {
    indice = (indice - 1 + slides.length) % slides.length;
    mostrarSlide(indice);
  }

  setaDireita.addEventListener("click", proximoSlide);
  setaEsquerda.addEventListener("click", slideAnterior);
  bolinhas.forEach((b, i) => b.addEventListener("click", () => {
    indice = i;
    mostrarSlide(indice);
  }));

  setInterval(proximoSlide, 5000); // troca automática a cada 5s
});
