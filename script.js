window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

(function () {
  // Cria o canvas dinamicamente para não afetar o HTML estrutural
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.pointerEvents = "none"; // Não bloqueia cliques em botões/links
  canvas.style.zIndex = "9999"; // Fica por cima visualmente
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const bubbles = [];
  const mouse = { x: -1000, y: -1000, radius: 180 }; // Aumentado o raio de afastamento para bolhas maiores

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseout", () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  class SoapBubble {
    constructor(initialY = false) {
      this.reset();
      if (initialY) {
        this.y = Math.random() * height;
      }
    }

    reset() {
      // AJUSTE DE TAMANHO: Agora as bolhas têm um raio entre 15px e 40px (diâmetro de até 80px)
      this.radius = Math.random() * 25 + 15;
      this.x = Math.random() * width;
      this.y = height + this.radius + Math.random() * 40;
      this.vx = Math.random() * 0.4 - 0.2; // Movimento lateral mais suave para bolhas maiores
      this.vy = -(Math.random() * 0.6 + 0.4); // Velocidade de subida leve
      this.opacity = Math.random() * 0.25 + 0.1; // Transparência suave para não poluir o design
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Interação de repulsão com o rato
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouse.radius) {
        const force = (mouse.radius - distance) / mouse.radius;
        this.x += (dx / distance) * force * 5;
        this.y += (dy / distance) * force * 5;
      }

      if (
        this.y < -this.radius ||
        this.x < -this.radius ||
        this.x > width + this.radius
      ) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;

      // Corpo principal da bolha de sabão
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.1);";

      // Cria um efeito de reflexo realista nas bordas
      const gradient = ctx.createRadialGradient(
        this.x,
        this.y,
        this.radius * 0.7,
        this.x,
        this.y,
        this.radius,
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.05)");
      gradient.addColorStop(0.9, "rgba(255, 255, 255, 0.25)");
      gradient.addColorStop(1, "rgba(227, 28, 36, 0.15)"); // Leve tom avermelhado na borda

      ctx.fillStyle = gradient;
      ctx.fill();

      // Contorno sutil
      ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Ponto de luz interno (brilho esférico proporcional ao tamanho)
      ctx.beginPath();
      ctx.arc(
        this.x - this.radius * 0.35,
        this.y - this.radius * 0.35,
        this.radius * 0.18,
        0,
        Math.PI * 2,
      );
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.fill();

      ctx.restore();
    }
  }

  // Mantido em 30 bolhas na tela para o visual continuar limpo e elegante
  for (let i = 0; i < 30; i++) {
    bubbles.push(new SoapBubble(true));
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].update();
      bubbles[i].draw();
    }
    requestAnimationFrame(render);
  }

  render();
})();
document.addEventListener("DOMContentLoaded", function () {
  // 1. Seleciona TODOS os containers de carrossel na página
  const carouselContainers = document.querySelectorAll(
    ".products-carousel-container",
  );

  // 2. Faz um loop para aplicar a lógica em CADA UM deles individualmente
  carouselContainers.forEach((container) => {
    // Busca o slider e os botões DENTRO deste container específico
    const slider = container.querySelector(".products-slider");
    const prevBtn = container.querySelector(".carousel-control-prev");
    const nextBtn = container.querySelector(".carousel-control-next");

    // Se por acaso não achar o slider, ignora e pula para o próximo
    if (!slider) return;

    // Remove a rolagem suave via CSS para a animação contínua funcionar
    slider.style.scrollBehavior = "auto";

    // Duplica os itens para criar o loop infinito
    slider.innerHTML += slider.innerHTML;

    let isPaused = false;
    let scrollSpeed = 1.2;
    let animationId;

    // Função de scroll contínuo isolada para este carrossel
    function continuousScroll() {
      if (!isPaused) {
        slider.scrollLeft += scrollSpeed;

        // Quando chega na metade, reseta para o começo silenciosamente
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(continuousScroll);
    }

    // Inicia o motor de rolagem deste carrossel
    animationId = requestAnimationFrame(continuousScroll);

    // Eventos de pausa (Mouse e Touch)
    slider.addEventListener("mouseenter", () => (isPaused = true));
    slider.addEventListener("mouseleave", () => (isPaused = false));
    slider.addEventListener("touchstart", () => (isPaused = true));
    slider.addEventListener("touchend", () => (isPaused = false));

    // Eventos dos botões (só adiciona se os botões existirem neste bloco)
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        slider.scrollLeft += 250;
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        slider.scrollLeft -= 250;
        if (slider.scrollLeft <= 0) {
          slider.scrollLeft = slider.scrollWidth / 2;
        }
      });
    }
  });
});

/* ==========================================================
   FUNCIONALIDADE: FILTRAGEM E PESQUISA DE PRODUTOS DINÂMICA
   ========================================================== */
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".btn-filter");
  const productItems = document.querySelectorAll(".product-card-item");
  const searchInput = document.getElementById("productSearch");
  const noProductsMsg = document.getElementById("noProductsFound");

  let currentCategory = "all";
  let setSearchTerm = "";

  function filterProducts() {
    let visibleCount = 0;

    productItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");
      const itemName = item.getAttribute("data-name").toLowerCase();

      const matchesCategory =
        currentCategory === "all" || itemCategory === currentCategory;
      const matchesSearch = itemName.includes(setSearchTerm);

      if (matchesCategory && matchesSearch) {
        item.classList.remove("fade-out");
        // Força o display grid padrão do Bootstrap col
        item.style.display = "block";
        visibleCount++;
      } else {
        item.classList.add("fade-out");
        // Remove do fluxo após o término da animação sutil
        setTimeout(() => {
          if (item.classList.contains("fade-out")) {
            item.style.display = "none";
          }
        }, 250);
      }
    });

    // Controla exibição de mensagem caso nenhum produto coincida
    if (visibleCount === 0) {
      noProductsMsg.classList.remove("d-none");
    } else {
      noProductsMsg.classList.add("d-none");
    }
  }

  // Evento de clique nos botões de Categoria
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      currentCategory = this.getAttribute("data-category");
      filterProducts();
    });
  });

  // Evento de digitação na Barra de Pesquisa (com verificação imediata)
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      setSearchTerm = this.value.toLowerCase().trim();
      filterProducts();
    });
  }
});
