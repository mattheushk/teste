document.addEventListener("DOMContentLoaded", () => {
  /* TEMA */
  const botaoTema = document.getElementById("botao-tema");
  botaoTema.addEventListener("click", () => {
    const ativo = document.body.classList.toggle("modo-escuro");
    botaoTema.textContent = ativo ? "☀️ Modo Claro" : "🌙 Modo Escuro";
    botaoTema.setAttribute("aria-pressed", String(ativo));
  });

  /* CARROSSEL */
  const slides = Array.from(document.querySelectorAll(".slides .slide"));
  const bolinhas = Array.from(document.querySelectorAll(".bolinha"));
  const setaEsq = document.querySelector(".seta.esquerda");
  const setaDir = document.querySelector(".seta.direita");
  if (slides.length === 0) return;

  let idx = slides.findIndex(s => s.classList.contains("ativo"));
  if (idx < 0) idx = 0;
  let intervalo = null;

  function mostrar(i) {
    slides.forEach(s => s.classList.remove("ativo"));
    bolinhas.forEach(b => b.classList.remove("ativa"));
    slides[i].classList.add("ativo");
    if (bolinhas[i]) bolinhas[i].classList.add("ativa");
    idx = i;
  }

  function proximo() { mostrar((idx + 1) % slides.length); }
  function anterior() { mostrar((idx - 1 + slides.length) % slides.length); }

  // setas
  if (setaDir) setaDir.addEventListener("click", () => { proximo(); resetIntervalo(); });
  if (setaEsq) setaEsq.addEventListener("click", () => { anterior(); resetIntervalo(); });

  // bolinhas
  bolinhas.forEach((b, i) => b.addEventListener("click", () => { mostrar(i); resetIntervalo(); }));

  // autoplay
  function startIntervalo() { intervalo = setInterval(proximo, 5000); }
  function clearIntervalo() { if (intervalo) { clearInterval(intervalo); intervalo = null; } }
  function resetIntervalo() { clearIntervalo(); startIntervalo(); }

  // pausar ao passar o mouse sobre o carrossel
  const carrossel = document.querySelector(".carrossel");
  if (carrossel) {
    carrossel.addEventListener("mouseenter", clearIntervalo);
    carrossel.addEventListener("mouseleave", startIntervalo);
  }

  // inicializa
  mostrar(idx);
  startIntervalo();

  /* LINKS REDES SOCIAIS — handlers extras (opcional) */
  const linkInsta = document.getElementById("link-instagram");
  const linkFace = document.getElementById("link-facebook");
  const linkWhats = document.getElementById("link-whatsapp");
  // se quiser tratar clique via JS para rastrear ou abrir em nova janela, já temos os anchors no HTML;
  // aqui só garantimos que existem e são seguros
  [linkInsta, linkFace, linkWhats].forEach(a => {
    if (a) a.addEventListener("click", (e) => {
      // nada obrigatório — apenas exemplo de prevenção se quiser abrir em nova janela segura
      // a.target já usa _blank + rel via HTML; deixamos o comportamento padrão
    });
  });

  /* DEBUG: se alguma imagem estiver com erro de carregamento, substitui por placeholder */
  const imgs = document.querySelectorAll("img");
  imgs.forEach(img => {
    img.addEventListener("error", () => {
      // substitui por placeholder embutido (data URI) simples — evita ícone quebrado
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='#ddd'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#666' font-size='20'>Imagem não encontrada</text></svg>`
      );
    });
  });
});
