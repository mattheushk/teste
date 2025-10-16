document.addEventListener("DOMContentLoaded", () => {
  /* ========================
     MODO ESCURO / CLARO
  ========================= */
  const botaoTema = document.createElement("button");
  botaoTema.id = "botao-tema";
  botaoTema.textContent = "🌙 Modo Escuro";
  botaoTema.setAttribute("aria-pressed", "false");
  botaoTema.style.position = "fixed";
  botaoTema.style.bottom = "20px";
  botaoTema.style.right = "20px";
  botaoTema.style.padding = "10px 15px";
  botaoTema.style.border = "none";
  botaoTema.style.borderRadius = "6px";
  botaoTema.style.backgroundColor = "#424e61";
  botaoTema.style.color = "white";
  botaoTema.style.cursor = "pointer";
  botaoTema.style.zIndex = "1000";
  document.body.appendChild(botaoTema);

  botaoTema.addEventListener("click", () => {
    const ativo = document.body.classList.toggle("modo-escuro");
    botaoTema.textContent = ativo ? "☀️ Modo Claro" : "🌙 Modo Escuro";
    botaoTema.setAttribute("aria-pressed", String(ativo));
  });

  /* Estilo modo escuro (injetado dinamicamente) */
  const estiloEscuro = document.createElement("style");
  estiloEscuro.textContent = `
    body.modo-escuro {
      background-color: #1f1f1f;
      color: #f0f0f0;
    }
    body.modo-escuro header {
      background-color: #2e2e2e;
    }
    body.modo-escuro .estudante {
      background-color: #2b2b2b;
    }
    body.modo-escuro .escola {
      background-image: linear-gradient(#222, #333);
    }
    body.modo-escuro .estudante-div {
      background-color: #3a3a3a;
    }
    body.modo-escuro a.link {
      color: #a7d3ff;
    }
  `;
  document.head.appendChild(estiloEscuro);

  /* ========================
        CARROSSEL SIMPLES
  ========================= */
  const slides = document.querySelectorAll(".slides img");
  let idx = 0;

  function mostrarSlide(i) {
    const total = slides.length;
    idx = (i + total) % total; // para looping infinito
    const deslocamento = -idx * 100;
    document.querySelector(".slides").style.transform = `translateX(${deslocamento}%)`;
  }

  function proximoSlide() {
    mostrarSlide(idx + 1);
  }

  let intervalo = setInterval(proximoSlide, 4000);

  const carrossel = document.querySelector(".carousel");
  if (carrossel) {
    carrossel.addEventListener("mouseenter", () => clearInterval(intervalo));
    carrossel.addEventListener("mouseleave", () => {
      clearInterval(intervalo);
      intervalo = setInterval(proximoSlide, 4000);
    });
  }

  /* ========================
      VALIDAÇÃO DE IMAGENS
  ========================= */
  const imgs = document.querySelectorAll("img");
  imgs.forEach((img) => {
    img.addEventListener("error", () => {
      img.src =
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(
          `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'>
            <rect width='100%' height='100%' fill='#ddd'/>
            <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#666' font-size='20'>
              Imagem não encontrada
            </text>
          </svg>`
        );
    });
  });
});
