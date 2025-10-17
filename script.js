// Alternar tema
const botaoTema = document.getElementById("botao-tema");
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("escuro");
  botaoTema.textContent = document.body.classList.contains("escuro") ? "🌙" : "☀️";
});

// Carrossel de imagem (banner)
const imagens = ["paragrafo_1_banner.jpg"];
let indiceAtual = 0;
const imagemCarrossel = document.getElementById("imagem-carrossel");

document.querySelector(".seta-esquerda").addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  imagemCarrossel.src = imagens[indiceAtual];
});

document.querySelector(".seta-direita").addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  imagemCarrossel.src = imagens[indiceAtual];
});
