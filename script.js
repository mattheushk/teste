// 🌗 Alternar tema claro/escuro
document.addEventListener("DOMContentLoaded", () => {
  const botaoTema = document.createElement("button");
  botaoTema.id = "botao-tema";
  botaoTema.textContent = "🌙 Modo Escuro";
  document.body.appendChild(botaoTema);

  botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
    botaoTema.textContent = document.body.classList.contains("modo-escuro")
      ? "☀️ Modo Claro"
      : "🌙 Modo Escuro";
  });

  // 👨‍🎓 Adiciona nomes fixos aos estudantes
  const nomesMeninos = ["João", "Matheus", "Pedro", "Thiago", "Junior", "André"];
  const nomesMeninas = ["Ana", "Maria", "Sofia", "Júlia", "Estefany", "Andressa"];

  const divsEstudantes = document.querySelectorAll(".estudantes_todos");
  const primeiraLinha = divsEstudantes[0]?.querySelectorAll(".estudante-div");
  const segundaLinha = divsEstudantes[1]?.querySelectorAll(".estudante-div");

  // Primeira linha = meninos
  if (primeiraLinha) {
    primeiraLinha.forEach((div, i) => {
      const nome = div.querySelector(".estudante-nome");
      if (nome) nome.textContent = nomesMeninos[i] || "Aluno";
    });
  }

  // Segunda linha = meninas
  if (segundaLinha) {
    segundaLinha.forEach((div, i) => {
      const nome = div.querySelector(".estudante-nome");
      if (nome) nome.textContent = nomesMeninas[i] || "Aluna";
    });
  }

  // 🔢 Corrigir número do WhatsApp (exemplo)
  const icones = document.querySelectorAll(".estudante-icone");
  icones.forEach(icon => {
    if (icon.src.includes("whatsapp")) {
      // Exemplo de número novo
      const linkPai = icon.closest("a");
      if (linkPai) {
        linkPai.href = "https://wa.me/5598999999999"; // <--- altere aqui seu número
      }
    }
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
});
