/* ==========================================================
   1. BASE DE DADOS (Extraída da Planilha Excel - Preços c/ IVA Inteiros)
   ========================================================== */
const productsDatabase = [
  {
    id: 1,
    name: "SABÃO LÍQUIDO 400ML",
    img: "prod24.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 65,
    priceBox: 780,
  },
  {
    id: 2,
    name: "SABÃO LÍQUIDO 750ML",
    img: "prod24.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 105,
    priceBox: 1261,
  },
  {
    id: 3,
    name: "SABÃO LÍQUIDO 1.5L",
    img: "prod12.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 180,
    priceBox: 2163,
  },
  {
    id: 6,
    name: "LIMPA TUDO LAVANDA 1.5L",
    img: "prod2.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 135,
    priceBox: 1620,
  },
  {
    id: 7,
    name: "LIMPA TUDO ROSY 1.5L",
    img: "prod5.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 135,
    priceBox: 1620,
  },
  {
    id: 7,
    name: "LIMPA TUDO MAÇÃ 1.5L",
    img: "prod38.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 135,
    priceBox: 1620,
  },
  {
    id: 8,
    name: "LIMPA TUDO TUTI FRUIT 1.5L",
    img: "prod3.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 135,
    priceBox: 1620,
  },

  {
    id: 11,
    name: "LIMPA TUDO BLUEBERRY 1.5L",
    img: "prod1.png",
    category: "especial",
    qtyBox: 12,
    priceUnit: 135,
    priceBox: 1620,
  },
  {
    id: 12,
    name: "LIMPA TUDO LIMÃO 1.5L",
    img: "prod4.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 135,
    priceBox: 1620,
  },
  {
    id: 12,
    name: "LIMPA TUDO TOP FRESH 1.5L",
    img: "prod36.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 135,
    priceBox: 1620,
  },
  {
    id: 15,
    name: "LIMPA TUDO TUTI FRUIT 5L",
    img: "prod31.png",
    category: "casa",
    qtyBox: 4,
    priceUnit: 425,
    priceBox: 1700,
  },
  {
    id: 18,
    name: "LIMPA TUDO BLUEBERRY 5L",
    img: "prod30.png",
    category: "especial",
    qtyBox: 4,
    priceUnit: 425,
    priceBox: 1700,
  },
  {
    id: 14,
    name: "LIMPA TUDO ROSY 5L",
    img: "prod23.png",
    category: "casa",
    qtyBox: 4,
    priceUnit: 425,
    priceBox: 1700,
  },

  {
    id: 16,
    name: "LIMPA TUDO TOP FRESH 5L",
    img: "prod19.png",
    category: "casa",
    qtyBox: 4,
    priceUnit: 425,
    priceBox: 1700,
  },
  {
    id: 17,
    name: "LIMPA TUDO MAÇÃ 5L",
    img: "prod22.png",
    category: "casa",
    qtyBox: 4,
    priceUnit: 425,
    priceBox: 1700,
  },
  {
    id: 17,
    name: "LIMPA TUDO LIMÃO  5L",
    img: "prod39.png",
    category: "casa",
    qtyBox: 4,
    priceUnit: 425,
    priceBox: 1700,
  },

  {
    id: 19,
    name: "JAVEL LIXÍVIA 750ML",
    img: "prod6.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 75,
    priceBox: 905,
  },
  {
    id: 20,
    name: "JAVEL LIXÍVIA 1L",
    img: "prod26.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 100,
    priceBox: 1201,
  },
  {
    id: 22,
    name: "ÁCIDO SAIS DE ESPÍRITO 1L",
    img: "prod8.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 215,
    priceBox: 2582,
  },
  {
    id: 23,
    name: "ÁCIDO SAIS DE ESPÍRITO 5L",
    img: "prod15.png",
    category: "casa",
    qtyBox: 4,
    priceUnit: 770,
    priceBox: 3081,
  },
  {
    id: 24,
    name: "GEL PINHO 1KG",
    img: "prod28.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 175,
    priceBox: 2102,
  },
  {
    id: 25,
    name: "GEL PINHO 5KG",
    img: "prod34.png",
    category: "casa",
    qtyBox: 4,
    priceUnit: 800,
    priceBox: 3202,
  },
  {
    id: 26,
    name: "GEL PINHO 500G",
    img: "prod11.png",
    category: "casa",
    qtyBox: 18,
    priceUnit: 90,
    priceBox: 1620,
  },
  {
    id: 27,
    name: "DESENTUPIDOR DE CANOS 1L",
    img: "prod7.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 151,
    priceBox: 1810,
  },
  {
    id: 28,
    name: "SABONETE DAS MÃOS 500ML",
    img: "prod32.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 122,
    priceBox: 1462,
  },
  {
    id: 29,
    name: "SABONETE DAS MÃOS 5L",
    img: "prod16.png",
    category: "casa",
    qtyBox: 4,
    priceUnit: 644,
    priceBox: 2575,
  },
  {
    id: 30,
    name: "CLORO EM GEL 1L",
    img: "prod35.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 168,
    priceBox: 2018,
  },
  {
    id: 4,
    name: "SABÃO LÍQUIDO 5L",
    img: "prod21.png",
    category: "casa",
    qtyBox: 4,
    priceUnit: 450,
    priceBox: 1800,
  },
  {
    id: 31,
    name: "CLORO EM GEL 5L",
    img: "prod18.png",
    category: "casa",
    qtyBox: 4,
    priceUnit: 620,
    priceBox: 2480,
  },
  {
    id: 32,
    name: "LIMPA VIDROS 750ML",
    img: "prod33.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 105,
    priceBox: 1261,
  },
  {
    id: 33,
    name: "LIMPA VIDROS 5L",
    img: "prod27.png",
    category: "casa",
    qtyBox: 4,
    priceUnit: 452,
    priceBox: 1810,
  },
  {
    id: 33,
    name: "LIMPA TUDO LAVANDA 5L",
    img: "prod37.png",
    category: "casa",
    qtyBox: 4,
    priceUnit: 452,
    priceBox: 1810,
  },
  {
    id: 34,
    name: "ÁLCOOL ETÍLICO 1L",
    img: "prod25.png",
    category: "casa",
    qtyBox: 12,
    priceUnit: 220,
    priceBox: 2640,
  },
  {
    id: 21,
    name: "JAVEL LIXÍVIA 5L",
    img: "prod17.png",
    category: "casa",
    qtyBox: 4,
    priceUnit: 430,
    priceBox: 1721,
  },
  {
    id: 35,
    name: "ÁLCOOL ETÍLICO 5L",
    img: "prod13.png",
    category: "casa",
    qtyBox: 4,
    priceUnit: 1200,
    priceBox: 4800,
  },
  {
    id: 36,
    name: "CRÈME DE LIMPEZA 5L",
    img: "prod14.png",
    category: "casa",
    qtyBox: 4,
    priceUnit: 632,
    priceBox: 2529,
  },
  {
    id: 37,
    name: "SHAMPO AUTO 5L",
    img: "prod40.png",
    category: "auto",
    qtyBox: 4,
    priceUnit: 450,
    priceBox: 1800,
  },
];

/* ==========================================================
   2. VARIÁVEIS DE ESTADO (Carrinho e Filtros)
   ========================================================== */
let cart = [];
let currentCategory = "all";
let searchTerm = "";

/* ==========================================================
   3. RENDERIZAÇÃO DO CATÁLOGO DE PRODUTOS
   ========================================================== */
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const noProductsMsg = document.getElementById("noProductsFound");
  grid.innerHTML = "";

  let visibleCount = 0;

  productsDatabase.forEach((product) => {
    // Filtragem
    const matchesCategory =
      currentCategory === "all" || product.category === currentCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (matchesCategory && matchesSearch) {
      visibleCount++;

      // Mapeia rótulo de categoria visual
      let catLabel = "Limpeza Casa";
      if (product.category === "auto") catLabel = "Linha Automotiva";
      if (product.category === "especial") catLabel = "Edição Especial";

      // Montagem do HTML do Produto
      const col = document.createElement("div");
      col.className = "col product-card-item";
      col.innerHTML = `
                <div class="premium-product-card">
                    <div class="product-img-wrapper">
                        <img src="${product.img}" alt="${product.name}" onerror="this.src='logo-amm.png'">
                    </div>
                    <div class="d-flex flex-column flex-grow-1">
                        <span class="product-category-label">${catLabel}</span>
                        <h3 class="product-card-title">${product.name}</h3>
                        
                        <div class="type-selector mt-auto">
                            <input type="radio" name="type-${product.id}" id="unit-${product.id}" value="unit" checked onchange="updatePriceDisplay(${product.id})">
                            <label for="unit-${product.id}">1 Unid.</label>
                            
                            <input type="radio" name="type-${product.id}" id="box-${product.id}" value="box" onchange="updatePriceDisplay(${product.id})">
                            <label for="box-${product.id}">Cx (${product.qtyBox})</label>
                        </div>
                        
                        <div class="price-display text-center" id="price-display-${product.id}">
                            ${product.priceUnit} MT
                        </div>

                        <div class="qty-btn-group mx-auto mb-3" style="width: 100px;">
                            <button type="button" onclick="changeCatalogQty(${product.id}, -1)">-</button>
                            <input type="number" id="qty-${product.id}" value="1" min="1" readonly>
                            <button type="button" onclick="changeCatalogQty(${product.id}, 1)">+</button>
                        </div>

                        <button class="btn-add-cart" onclick="addToCart(${product.id})">
                            <i class="fa-solid fa-cart-plus me-1"></i> Adicionar
                        </button>
                    </div>
                </div>
            `;
      grid.appendChild(col);
    }
  });

  noProductsMsg.classList.toggle("d-none", visibleCount > 0);
}

// Atualizar preço exibido ao trocar Unidade/Caixa
window.updatePriceDisplay = function (id) {
  const product = productsDatabase.find((p) => p.id === id);
  const type = document.querySelector(`input[name="type-${id}"]:checked`).value;
  const priceDisplay = document.getElementById(`price-display-${id}`);

  if (type === "unit") {
    priceDisplay.innerText = `${product.priceUnit} MT`;
  } else {
    priceDisplay.innerText = `${product.priceBox} MT`;
  }
};

// Alterar quantidade no input do catálogo
window.changeCatalogQty = function (id, delta) {
  const input = document.getElementById(`qty-${id}`);
  let newVal = parseInt(input.value) + delta;
  if (newVal >= 1) {
    input.value = newVal;
  }
};

/* ==========================================================
   4. LÓGICA DO CARRINHO DE COMPRAS
   ========================================================== */
window.addToCart = function (id) {
  const product = productsDatabase.find((p) => p.id === id);
  const qtyInput = document.getElementById(`qty-${id}`);
  const qty = parseInt(qtyInput.value);
  const type = document.querySelector(`input[name="type-${id}"]:checked`).value;

  const price = type === "unit" ? product.priceUnit : product.priceBox;
  const typeLabel =
    type === "unit" ? "Unidade" : `Caixa (${product.qtyBox} un)`;
  const uniqueCartId = `${id}-${type}`; // Identificador único considerando produto + tipo

  // Verifica se já existe no carrinho com o mesmo tipo
  const existingItem = cart.find((item) => item.cartId === uniqueCartId);

  if (existingItem) {
    existingItem.qty += qty;
  } else {
    cart.push({
      cartId: uniqueCartId,
      productId: product.id,
      name: product.name,
      img: product.img,
      type: type,
      typeLabel: typeLabel,
      price: price,
      qty: qty,
    });
  }

  // Reseta o seletor para 1
  qtyInput.value = 1;
  updateCartUI();

  // Pequeno feedback visual (abre a aba lateral)
  const cartOffcanvas = new bootstrap.Offcanvas(
    document.getElementById("cartOffcanvas"),
  );
  cartOffcanvas.show();
};

window.removeFromCart = function (cartId) {
  cart = cart.filter((item) => item.cartId !== cartId);
  updateCartUI();
};

window.changeCartQty = function (cartId, delta) {
  const item = cart.find((i) => i.cartId === cartId);
  if (item) {
    let newQty = item.qty + delta;
    if (newQty >= 1) {
      item.qty = newQty;
      updateCartUI();
    }
  }
};

function updateCartUI() {
  const container = document.getElementById("cartItemsContainer");
  const countBadge = document.getElementById("cartCount");
  const subtotalEl = document.getElementById("cartSubtotal");
  const totalEl = document.getElementById("cartTotal");

  // Total de Itens (quantidade física total ou apenas registros. Optamos por soma de qty)
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  countBadge.innerText = totalItems;

  if (cart.length === 0) {
    container.innerHTML = `
            <div class="text-center text-muted mt-5">
                <i class="fa-solid fa-basket-shopping fs-1 mb-3 opacity-50"></i>
                <p>O seu carrinho está vazio.</p>
            </div>
        `;
    subtotalEl.innerText = "0 MT";
    totalEl.innerText = "0 MT";
    return;
  }

  let html = "";
  let totalValue = 0;

  cart.forEach((item) => {
    const itemSubtotal = item.price * item.qty;
    totalValue += itemSubtotal;

    html += `
            <div class="cart-item">
                <button class="btn-remove-item" onclick="removeFromCart('${item.cartId}')"><i class="fa-solid fa-times"></i></button>
                <img src="${item.img}" alt="${item.name}" onerror="this.src='logo-amm.png'">
                <div class="cart-item-info flex-grow-1">
                    <h6>${item.name}</h6>
                    <small class="text-danger fw-bold">${item.typeLabel}</small><br>
                    <small class="text-muted">${item.price} MT / un</small>
                    
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <div class="qty-btn-group" style="width: 80px;">
                            <button onclick="changeCartQty('${item.cartId}', -1)">-</button>
                            <input type="text" value="${item.qty}" readonly>
                            <button onclick="changeCartQty('${item.cartId}', 1)">+</button>
                        </div>
                        <span class="fw-bold">${itemSubtotal} MT</span>
                    </div>
                </div>
            </div>
        `;
  });

  container.innerHTML = html;
  subtotalEl.innerText = `${totalValue} MT`;
  totalEl.innerText = `${totalValue} MT`;
}

/* ==========================================================
   5. FILTRAGEM E BUSCA
   ========================================================== */
document.querySelectorAll(".btn-filter").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".btn-filter")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
    currentCategory = this.getAttribute("data-category");
    renderProducts();
  });
});

document.getElementById("productSearch").addEventListener("input", function () {
  searchTerm = this.value;
  renderProducts();
});

/* ==========================================================
   6. CHECKOUT: PDF E WHATSAPP
   ========================================================== */
window.processCheckout = function () {
  if (cart.length === 0) {
    alert("O seu carrinho está vazio!");
    return;
  }

  const name = document.getElementById("clientName").value.trim();
  const phone = document.getElementById("clientPhone").value.trim();
  const company = document.getElementById("clientCompany").value.trim();
  const notes = document.getElementById("clientNotes").value.trim();

  if (!name || !phone) {
    alert("Por favor, preencha o Nome Completo e o Telefone para prosseguir.");
    return;
  }

  // Calcula Total
  const totalGeral = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // 1. GERAR PDF (Usando jsPDF + AutoTable)
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Configuração de Cabeçalho do PDF
  doc.setFontSize(18);
  doc.setTextColor(227, 28, 36); // Vermelho AMM
  doc.text("Pedido de Produtos - Amm", 14, 20);

  doc.setFontSize(11);
  doc.setTextColor(50, 50, 50);
  const dateStr = new Date().toLocaleDateString("pt-BR");
  doc.text(`Data do Pedido: ${dateStr}`, 14, 30);
  doc.text(`Cliente: ${name}`, 14, 37);
  doc.text(`Telefone: ${phone}`, 14, 44);
  if (company) doc.text(`Empresa: ${company}`, 14, 51);

  // Tabela de Itens
  const tableData = cart.map((item) => [
    item.name,
    item.typeLabel,
    item.qty.toString(),
    `${item.price} MT`,
    `${item.price * item.qty} MT`,
  ]);

  let startY = company ? 58 : 51;

  doc.autoTable({
    startY: startY,
    head: [["Produto", "Tipo de Compra", "Qtd", "Preço Unit.", "Subtotal"]],
    body: tableData,
    theme: "striped",
    headStyles: { fillColor: [227, 28, 36] },
    styles: { fontSize: 10 },
  });

  const finalY = doc.lastAutoTable.finalY || startY + 20;

  // Resumo de Totais no PDF
  doc.setFontSize(12);
  doc.setFont(undefined, "bold");
  doc.text(`Total Geral: ${totalGeral} MT`, 14, finalY + 15);

  doc.setFontSize(9);
  doc.setFont(undefined, "normal");
  doc.text(
    "Observação: Todos os preços apresentados já incluem IVA.",
    14,
    finalY + 22,
  );
  if (notes) {
    doc.text(`Notas do Cliente: ${notes}`, 14, finalY + 30);
  }

  // Salva o PDF localmente
  doc.save(`Pedido_Amm_${name.replace(/\s+/g, "_")}.pdf`);

  // 2. ENVIAR PARA WHATSAPP
  const numeroEmpresa = "258841636187";
  let msgText = `*Olá, gostaria de solicitar o seguinte pedido:*\n\n`;
  msgText += `*Cliente:* ${name}\n`;
  msgText += `*Telefone:* ${phone}\n`;
  if (company) msgText += `*Empresa:* ${company}\n`;
  msgText += `--------------------------------
*ITENS DO PEDIDO:*
`;

  cart.forEach((item) => {
    msgText += `• *${item.name}*\n`;
    msgText += `  Tipo: ${item.typeLabel}\n`;
    msgText += `  Qtd: ${item.qty} | Sub: ${item.price * item.qty} MT\n`;
  });

  msgText += `--------------------------------
*Total Geral: ${totalGeral} MT*
_(Todos os preços incluem IVA)_
`;

  if (notes) {
    msgText += `\n*Observações:* ${notes}\n`;
  }

  msgText += `\nObrigado.`;

  // Converte a mensagem para formato de URL segura
  const msgEncoded = encodeURIComponent(msgText);

  // Abre a aba do WhatsApp Web / App
  window.open(`https://wa.me/${numeroEmpresa}?text=${msgEncoded}`, "_blank");
};

/* ==========================================================
   7. INICIALIZAÇÃO
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});
