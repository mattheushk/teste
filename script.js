document.addEventListener("DOMContentLoaded", () => {
  // ====== MODO ESCURO / CLARO ======
  const botaoTema = document.getElementById("botao-tema");
  botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("escuro");
    botaoTema.textContent = document.body.classList.contains("escuro") ? "🌙" : "☀️";
  });

  // ====== CARROSSEL ======
  const imagens = document.querySelectorAll(".imagens-carrossel img");
  const setaEsquerda = document.querySelector(".seta-esquerda");
  const setaDireita = document.querySelector(".seta-direita");

  let indice = 0;

  function mostrarImagem(i) {
    imagens.forEach(img => img.classList.remove("ativo"));
    imagens[i].classList.add("ativo");
  }

  function proximo() {
    indice = (indice + 1) % imagens.length;
    mostrarImagem(indice);
  }

  function anterior() {
    indice = (indice - 1 + imagens.length) % imagens.length;
    mostrarImagem(indice);
  }

  setaDireita.addEventListener("click", proximo);
  setaEsquerda.addEventListener("click", anterior);

  // Troca automática a cada 5s
  setInterval(proximo, 5000);
});
