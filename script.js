// ============================
// 1️⃣ Troca automática de banners (carrossel simples)
// ============================
let banners = [
  "paragrafo_1_banner.jpg",
  "paragrafo_2_banner.jpg",
  "paragrafo_3_banner.jpg"
];
let bannerIndex = 0;

function mudarBanner() {
  const banner = document.querySelector(".banner1 img");
  if (!banner) return; // segurança
  bannerIndex = (bannerIndex + 1) % banners.length;
  banner.src = banners[bannerIndex];
}

setInterval(mudarBanner, 4000); // muda a cada 4 segundos


// ============================
// 2️⃣ Destaque do estudante ao passar o mouse
// ============================
function destacarImagem() {
  const imagens = document.querySelectorAll(".estudante-imagem");
  imagens.forEach(img => {
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.1)";
      img.style.transition = "0.3s";
      img.style.boxShadow = "0 0 10px #333";
    });
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
      img.style.boxShadow = "none";
    });
  });
}


// ============================
// 3️⃣ Ordenar estudantes por nome
// ============================
function ordenarEstudantes() {
  const container = document.querySelectorAll(".estudantes_todos");
  container.forEach(secao => {
    let divs = Array.from(secao.children);
    divs.sort((a, b) => {
      const nomeA = a.querySelector(".estudante-nome").textContent.trim();
      const nomeB = b.querySelector(".estudante-nome").textContent.trim();
      return nomeA.localeCompare(nomeB);
    });
    divs.forEach(div => secao.appendChild(div));
  });
  alert("Estudantes organizados por nome!");
}


// ============================
// 4️⃣ Exibe nome do estudante ao clicar na foto
// ============================
function mostrarNomeAoClicar() {
  const imagens = document.querySelectorAll(".estudante-imagem");
  imagens.forEach(img => {
    img.addEventListener("click", () => {
      const nome = img.parentElement.querySelector(".estudante-nome").textContent;
      alert("Este é o " + nome + "!");
    });
  });
}


// ============================
// 5️⃣ Alternar tema claro/escuro
// ============================
function alternarTema() {
  document.body.classList.toggle("modo-escuro");
}


// ============================
// Botões dinâmicos (criados no topo da página)
// ============================
function criarBotoes() {
  const botaoTema = document.createElement("button");
  botaoTema.textContent = "🌗 Alternar Tema";
  botaoTema.style.margin = "10px";
  botaoTema.style.padding = "10px 20px";
  botaoTema.style.cursor = "pointer";
  botaoTema.addEventListener("click", alternarTema);

  const botaoOrdenar = document.createElement("button");
  botaoOrdenar.textContent = "🔤 Organizar Alunos por Nome";
  botaoOrdenar.style.margin = "20px";
  botaoOrdenar.style.padding = "10px 20px";
  botaoOrdenar.style.cursor = "pointer";
  botaoOrdenar.addEventListener("click", ordenarEstudantes);

  // Adiciona ambos ao início do body
  document.body.prepend(botaoOrdenar);
  document.body.prepend(botaoTema);
}


// ============================
// Inicialização ao carregar a página
// ============================
document.addEventListener("DOMContentLoaded", () => {
  destacarImagem();
  mostrarNomeAoClicar();
  criarBotoes();
});
