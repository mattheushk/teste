// Alternar tema
const botaoTema = document.getElementById("botao-tema");
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("escuro");
  botaoTema.textContent = document.body.classList.contains("escuro") ? "🌙" : "☀️";
});

// Carrossel automático com transição suave
const imagens = document.querySelectorAll(".banner-imagem");
let indice = 0;

function mostrarImagem(n) {
  imagens.forEach((img, i) => {
    img.classList.toggle("ativo", i === n);
  });
}

document.querySelector(".seta-esquerda").addEventListener("click", () => {
  indice = (indice - 1 + imagens.length) % imagens.length;
  mostrarImagem(indice);
});

document.querySelector(".seta-direita").addEventListener("click", () => {
  indice = (indice + 1) % imagens.length;
  mostrarImagem(indice);
});

// Troca automática a cada 5 segundos
setInterval(() => {
  indice = (indice + 1) % imagens.length;
  mostrarImagem(indice);
}, 5000);
