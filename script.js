// 🌗 Alternar tema claro/escuro
const botaoTema = document.createElement("button");
botaoTema.id = "botao-tema";
botaoTema.textContent = "🌗 Alternar Tema";
document.body.appendChild(botaoTema);

botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("modo-escuro");
  botaoTema.textContent = document.body.classList.contains("modo-escuro")
    ? "☀️ Modo Claro"
    : "🌙 Modo Escuro";
});

// 👨‍🎓 Nomes fixos para estudantes
const nomesMeninos = ["João", "Matheus", "Pedro", "Thiago", "Junior", "André"];
const nomesMeninas = ["Ana", "Maria", "Sofia", "Júlia", "Estefany", "Andressa"];

document.addEventListener("DOMContentLoaded", () => {
  const divs = document.querySelectorAll(".estudante-div");

  divs.forEach((div, i) => {
    const nomeEl = div.querySelector(".estudante-nome");

    if (div.querySelector("img").src.includes("menino")) {
      nomeEl.textContent = nomesMeninos[i % nomesMeninos.length];
    } else if (div.querySelector("img").src.includes("menina")) {
      nomeEl.textContent = nomesMeninas[i % nomesMeninas.length];
    }
  });
});

// 🍔 Cardápio de Hambúrgueres
const botaoCardapio = document.createElement("button");
botaoCardapio.id = "botao-cardapio";
botaoCardapio.textContent = "🍔 Ver Cardápio de Hambúrgueres";
document.body.appendChild(botaoCardapio);

const cardapioDiv = document.createElement("div");
cardapioDiv.className = "cardapio";

const imagensCardapio = [
  "hamburguer1.jpg",
  "hamburguer2.jpg",
  "hamburguer3.jpg",
  "hamburguer4.jpg"
];

imagensCardapio.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Hambúrguer delicioso";
  cardapioDiv.appendChild(img);
});

document.body.appendChild(cardapioDiv);

botaoCardapio.addEventListener("click", () => {
  const visivel = cardapioDiv.style.display === "flex";
  cardapioDiv.style.display = visivel ? "none" : "flex";
  botaoCardapio.textContent = visivel
    ? "🍔 Ver Cardápio de Hambúrgueres"
    : "❌ Fechar Cardápio";
});
 unction menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}