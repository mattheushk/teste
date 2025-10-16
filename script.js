// Alternar modo claro/escuro
const botaoTema = document.getElementById("botao-tema");
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("escuro");
  botaoTema.textContent = document.body.classList.contains("escuro") ? "☀️" : "🌙";
});

// Carrossel
const alunosContainer = document.querySelector(".alunos");
const btnEsquerda = document.querySelector(".seta.esquerda");
const btnDireita = document.querySelector(".seta.direita");

let scroll = 0;
const passo = 400;

btnDireita.addEventListener("click", () => {
  scroll -= passo;
  if (Math.abs(scroll) >= alunosContainer.scrollWidth - alunosContainer.parentElement.offsetWidth) {
    scroll = 0;
  }
  alunosContainer.style.transform = `translateX(${scroll}px)`;
});

btnEsquerda.addEventListener("click", () => {
  scroll += passo;
  if (scroll > 0) scroll = -(alunosContainer.scrollWidth - alunosContainer.parentElement.offsetWidth);
  alunosContainer.style.transform = `translateX(${scroll}px)`;
});
