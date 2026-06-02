/*
  CONFIGURAÇÃO PLUG AND PLAY

  Para trocar a campanha:
  1. Mude campanhaAtiva para true ou false.
  2. Altere o bloco campanha.
  3. Troque os produtos ou imagens se precisar.

  Quando não tiver data comemorativa:
  campanhaAtiva: false
*/

const WHATSAPP_NUMBER = "5548998279941";
const INSTAGRAM_URL = "https://www.instagram.com/donnacestasfloripa/";

const SITE_CONFIG = {
  campanhaAtiva: true,
  tema: "loja",

  campanha: {
    tag: "Dia dos Namorados 2026",
    titulo: "O presente perfeito para surpreender quem você ama.",
    texto:
      "Cestas românticas, personalizadas e preparadas com carinho para transformar o Dia dos Namorados em um momento inesquecível.",
    imagem: "assets/tabua-casal.jpg",
    preco: "R$ 164,00",
    botao: "Encomendar pelo WhatsApp",
    mensagemWhatsapp:
      "Olá! Quero encomendar uma cesta especial para o Dia dos Namorados.",
    produtosTitulo: "Cestas para o Dia dos Namorados",
    produtosSubtitulo:
      "Escolha uma opção da vitrine e fale direto no WhatsApp com uma mensagem pronta.",
    menuProdutos: "Dia dos Namorados",
    destaques: [
      ["12 de junho", "Campanha especial"],
      ["Personalizada", "Cartão e embalagem"],
      ["Entrega", "Consulte horários"]
    ]
  },

  loja: {
    tag: "Donna Cestas",
    titulo: "Cestas artesanais para momentos especiais.",
    texto:
      "Presentes personalizados para aniversários, datas comemorativas, empresas e momentos únicos.",
    imagem: "assets/cesta-13.jpg",
    preco: null,
    botao: "Falar no WhatsApp",
    mensagemWhatsapp:
      "Olá! Gostaria de conhecer as opções de cestas da Donna Cestas.",
    produtosTitulo: "Catálogo Donna Cestas",
    produtosSubtitulo:
      "Escolha uma opção do catálogo e fale direto no WhatsApp com uma mensagem pronta.",
    menuProdutos: "Catálogo",
    destaques: [
      ["Sob medida", "Monte sua cesta"],
      ["Cartão incluso", "Mensagem especial"],
      ["Presente único", "Feito com carinho"]
    ]
  }
};

const PRODUCTS = [
  {
    nome: "Café Mini",
    categoria: "Café da manhã",
    etiqueta: "Café da manhã",
    selo: "Mini",
    descricao: "Cesta compacta em nicho de acrílico 12cm com croissant, pães de queijo, queijo, nutella, torradas, café e frutas.",
    preco: "R$ 119,00",
    imagem: "assets/cesta-26.jpg",
    mensagem: "Olá! Tenho interesse em Café Mini do catálogo, no valor de R$ 119,00."
  },
  {
    nome: "Café P",
    categoria: "Café da manhã",
    etiqueta: "Café da manhã",
    selo: "P",
    descricao: "Café da manhã em nicho de madeira 25cm com croissant, mini baguete, charcutaria, queijos, suco, café e frutas.",
    preco: "R$ 218,00",
    imagem: "assets/cesta-13.jpg",
    mensagem: "Olá! Tenho interesse em Café P do catálogo, no valor de R$ 218,00."
  },
  {
    nome: "Café M",
    categoria: "Café da manhã",
    etiqueta: "Café da manhã",
    selo: "M",
    descricao: "Cesta em nicho de madeira 30cm com itens de café, caseirinho, queijos, charcutaria, suco, cappuccino e frutas.",
    preco: "R$ 284,00",
    imagem: "assets/cesta-14.jpg",
    mensagem: "Olá! Tenho interesse em Café M do catálogo, no valor de R$ 284,00."
  },
  {
    nome: "Café G",
    categoria: "Café da manhã",
    etiqueta: "Café da manhã",
    selo: "G",
    descricao: "Cesta maior em nicho de madeira 35cm com variedade de pães, queijos, charcutarias, suco, café, chá e frutas.",
    preco: "R$ 358,00",
    imagem: "assets/cesta-15.jpg",
    mensagem: "Olá! Tenho interesse em Café G do catálogo, no valor de R$ 358,00."
  },
  {
    nome: "Feliz Aniversário",
    categoria: "Aniversário",
    etiqueta: "Aniversário",
    selo: "Especial",
    descricao: "Cesta em nicho de madeira 35cm com mini bolinho bentô, croissant, queijos, charcutaria, suco, café e frutas.",
    preco: "R$ 290,00",
    imagem: "assets/cesta-17.jpg",
    mensagem: "Olá! Tenho interesse em Feliz Aniversário do catálogo, no valor de R$ 290,00."
  },
  {
    nome: "Box Corporativa",
    categoria: "Corporativas",
    etiqueta: "Corporativa",
    selo: "Empresas",
    descricao: "Box de madeira com mini espumante, chocolate importado e opção de amêndoas ou queijo.",
    preco: "R$ 180,00",
    imagem: "assets/cesta-21.jpg",
    mensagem: "Olá! Tenho interesse em Box Corporativa do catálogo, no valor de R$ 180,00."
  },
  {
    nome: "Box Wine",
    categoria: "Vinhos",
    etiqueta: "Vinho",
    selo: "Premium",
    descricao: "Cesto de palha com vinho 750ml, queijo, salame italiano, amêndoas defumadas, geleia de pimenta e chocolate importado.",
    preco: "R$ 389,00",
    imagem: "assets/cesta-20.jpg",
    mensagem: "Olá! Tenho interesse em Box Wine do catálogo, no valor de R$ 389,00."
  },
  {
    nome: "Tábua Mimo",
    categoria: "Tábuas",
    etiqueta: "Tábua",
    selo: "1 pessoa",
    descricao: "Tábua de MDF redonda ideal para uma pessoa, com queijos, charcutaria, frutas, pepita de mel e geleia.",
    preco: "R$ 159,00",
    imagem: "assets/tabua-mimo.jpg",
    mensagem: "Olá! Tenho interesse em Tábua Mimo do catálogo, no valor de R$ 159,00."
  },
  {
    nome: "Tábua Casal",
    categoria: "Tábuas",
    etiqueta: "Tábua",
    selo: "Casal",
    descricao: "Tábua de MDF redonda ideal para até duas pessoas, com queijos, charcutaria, frutas, pepita de mel, geleia e nuts.",
    preco: "R$ 249,00",
    imagem: "assets/tabua-casal.jpg",
    mensagem: "Olá! Tenho interesse em Tábua Casal do catálogo, no valor de R$ 249,00."
  },
  {
    nome: "Box Presentear",
    categoria: "Presentes",
    etiqueta: "Presente",
    selo: "Especial",
    descricao: "Caixa cartonada com vinho ou espumante, queijo, geleia de pimenta e chocolate importado.",
    preco: "R$ 315,00",
    imagem: "assets/presentes.jpg",
    mensagem: "Olá! Tenho interesse em Box Presentear do catálogo, no valor de R$ 315,00."
  },
  {
    nome: "Mini bolinho bentô cake",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Bentô",
    descricao: "Mini bolinho bentô cake personalizado para complementar a cesta.",
    preco: "R$ 100,00",
    imagem: "assets/bento-cake.png",
    mensagem: "Olá! Tenho interesse no adicional Mini bolinho bentô cake, no valor de R$ 100,00."
  },
  {
    nome: "Balão bubble",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Balão",
    descricao: "Balão bubble para deixar o presente ainda mais especial.",
    preco: "R$ 80,00",
    imagem: "assets/balao.png",
    mensagem: "Olá! Tenho interesse no adicional Balão bubble, no valor de R$ 80,00."
  },
  {
    nome: "Orquídea uma haste",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Flor",
    descricao: "Orquídea de uma haste para complementar a cesta com um toque elegante.",
    preco: "R$ 110,00",
    imagem: "assets/orquidea.png",
    mensagem: "Olá! Tenho interesse no adicional Orquídea uma haste, no valor de R$ 110,00."
  },
  {
    nome: "Girassol",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Flor",
    descricao: "Girassol para complementar o presente com delicadeza e carinho.",
    preco: "R$ 50,00",
    imagem: "assets/girassol.png",
    mensagem: "Olá! Tenho interesse no adicional Girassol, no valor de R$ 50,00."
  },
  {
    nome: "Foto polaroid",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Foto",
    descricao: "Foto polaroid para deixar o presente mais pessoal e afetivo.",
    preco: "R$ 12,00",
    imagem: "assets/polaroid.png",
    mensagem: "Olá! Tenho interesse no adicional Foto polaroid, no valor de R$ 12,00."
  },
  {
    nome: "Buquê P flores do campo",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Flores",
    descricao: "Buquê pequeno de flores do campo para complementar a cesta.",
    preco: "R$ 120,00",
    imagem: "assets/buque.png",
    mensagem: "Olá! Tenho interesse no adicional Buquê P flores do campo, no valor de R$ 120,00."
  }
];

const CAMPAIGN_PRODUCTS = [
  {
    nome: "Amour Royale",
    categoria: "Dia dos Namorados",
    etiqueta: "Dia dos Namorados",
    selo: "1 pessoa",
    descricao: "Croissant, mini baguete, cruffin recheado com doce de leite, pães de queijo recheados, bolacha decorada, salame, queijo Minas meia cura, geleia francesa, manteiga francesa, torradas finas, suco 300ml, café drip coffee, frutas da estação e cartão personalizado. Disposto em nicho de 20cm.",
    preco: "R$ 239,00",
    imagem: "assets/cesta-14.jpg",
    ilustrativo: true,
    aviso: "Foto ilustrativa. A composição e a montagem podem variar.",
    mensagem: "Olá! Tenho interesse no Amour Royale do catálogo de Dia dos Namorados, no valor de R$ 239,00."
  },
  {
    nome: "Cesta Romance",
    categoria: "Dia dos Namorados",
    etiqueta: "Dia dos Namorados",
    selo: "2 pessoas",
    descricao: "Croissant, mini baguetes, cruffin recheado com doce de leite, pães de queijo recheados, chipa, bolachas decoradas, salame, queijo Minas meia cura, geleia francesa, manteiga francesa, torradas finas, suco 300ml, cafés drip coffee, frutas da estação e cartão personalizado. Disposta em nicho de 25cm.",
    preco: "R$ 289,00",
    imagem: "assets/romance.png",
    ilustrativo: true,
    aviso: "Foto ilustrativa. A composição e a montagem podem variar.",
    mensagem: "Olá! Tenho interesse na Cesta Romance do catálogo de Dia dos Namorados, no valor de R$ 289,00."
  },
  {
    nome: "Tábua Laços de Amor",
    categoria: "Tábuas especiais",
    etiqueta: "Tábua",
    selo: "1-2 pessoas",
    descricao: "Queijo brie, queijo Minas meia cura, salame italiano, baguete, pretzel, bolachas decoradas, pepita de mel, damasco, geleia de pimenta em ramekin de coração, pasta de damasco com cream cheese, frutas da estação, decoração de Dia dos Namorados e cartão personalizado. Disposta em tábua de 30cm.",
    preco: "R$ 306,00",
    imagem: "assets/lacos.jpeg",
    ilustrativo: true,
    aviso: "Foto ilustrativa. A composição e a montagem podem variar.",
    mensagem: "Olá! Tenho interesse na Tábua Laços de Amor do catálogo de Dia dos Namorados, no valor de R$ 306,00."
  },
  {
    nome: "Amor Perfeito",
    categoria: "Tábuas especiais",
    etiqueta: "Tábua + Fondue",
    selo: "2 pessoas",
    descricao: "Tábua de frios Laços de Amor acompanhada de mini fondue cristal com ganache de chocolate ao leite, marshmallow e frutas da estação. Disposta em tábua de 30cm com fondue em box 750ml formato de coração.",
    preco: "R$ 381,00",
    imagem: "assets/amorperfeito.jpeg",
    ilustrativo: true,
    aviso: "Foto ilustrativa. A composição e a montagem podem variar.",
    mensagem: "Olá! Tenho interesse no Amor Perfeito do catálogo de Dia dos Namorados, no valor de R$ 381,00."
  },
  {
    nome: "Box Fondue",
    categoria: "Fondue",
    etiqueta: "Fondue",
    selo: "1-2 pessoas",
    descricao: "Ganache de chocolate servido em ramekin, morangos, uvas sem sementes, gomos de bergamota, mini brownies, marshmallow e cartão personalizado. Disposto em lata dourada de 15cm com laço vermelho.",
    preco: "R$ 164,00",
    imagem: "assets/fondue.png",
    ilustrativo: true,
    aviso: "Foto ilustrativa. A composição e a montagem podem variar.",
    mensagem: "Olá! Tenho interesse no Box Fondue do catálogo de Dia dos Namorados, no valor de R$ 164,00."
  },
  {
    nome: "Box Love",
    categoria: "Boxes especiais",
    etiqueta: "Box",
    selo: "1 pessoa",
    descricao: "Vinho, chocolate importado, mini tábua com frios, balão coração Te Amo e cartão personalizado. Disposto em box cartonada off white ou preta de 12cm.",
    preco: "R$ 299,00",
    imagem: "assets/boxlove.jpeg",
    ilustrativo: true,
    aviso: "Foto ilustrativa. A composição e a montagem podem variar.",
    mensagem: "Olá! Tenho interesse no Box Love do catálogo de Dia dos Namorados, no valor de R$ 299,00."
  },
  {
    nome: "Cesta Encanto",
    categoria: "Boxes especiais",
    etiqueta: "Cesta",
    selo: "1 pessoa",
    descricao: "Urso Te Amo, caneca com inicial, café drip coffee, potiche de vidro com bolachas caseiras, balão coração Dia dos Namorados e cartão personalizado. Disposta em caixa com visor e adesivo Te Amo, embalada em saco transparente com laço vermelho.",
    preco: "R$ 329,00",
    imagem: "assets/encanto.jpeg",
    ilustrativo: true,
    aviso: "Foto ilustrativa. A composição e a montagem podem variar.",
    mensagem: "Olá! Tenho interesse na Cesta Encanto do catálogo de Dia dos Namorados, no valor de R$ 329,00."
  },
  {
    nome: "Foto polaroid com suporte de coração",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Foto",
    descricao: "Foto polaroid com suporte de coração para deixar o presente mais pessoal.",
    preco: "R$ 15,00",
    imagem: "assets/polaroide-c-base.png",
    mensagem: "Olá! Tenho interesse no adicional Foto polaroid com suporte de coração, no valor de R$ 15,00."
  },
  {
    nome: "Balão coração",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Balão",
    descricao: "Balão em formato de coração vendido por unidade.",
    preco: "R$ 12,00",
    imagem: "assets/baloes.png",
    mensagem: "Olá! Tenho interesse no adicional Balão coração, no valor de R$ 12,00."
  },
  {
    nome: "Vinho chileno",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Vinho",
    descricao: "Vinho chileno vendido por unidade para complementar o presente.",
    preco: "R$ 79,00",
    imagem: "assets/vinho.png",
    mensagem: "Olá! Tenho interesse no adicional Vinho chileno, no valor de R$ 79,00."
  }
];


const $ = (selector) => document.querySelector(selector);

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function applyCampaign() {
  const data = SITE_CONFIG.campanhaAtiva ? SITE_CONFIG.campanha : SITE_CONFIG.loja;
  const activeTheme = SITE_CONFIG.campanhaAtiva ? "dia-dos-namorados" : "loja";

  document.body.dataset.theme = activeTheme;

  const navProductsLink = $("#navProductsLink");
  if (navProductsLink && data.menuProdutos) {
    navProductsLink.textContent = data.menuProdutos;
  }

  const campaignTag = $("#campaignTag");
  const campaignTitle = $("#campaignTitle");
  const campaignText = $("#campaignText");
  const campaignImage = $("#campaignImage");
  const campaignVideo = $("#campaignVideo");
  const productsTitle = $("#productsTitle");
  const productsSubtitle = $("#productsSubtitle");

  if (campaignTag) campaignTag.textContent = data.tag;
  if (campaignTitle) campaignTitle.textContent = data.titulo;
  if (campaignText) campaignText.textContent = data.texto;

  if (campaignImage) {
    campaignImage.src = data.imagem;
    campaignImage.alt = data.titulo;
  }

  if (campaignVideo) {
    campaignVideo.setAttribute("aria-label", data.titulo);
  }

  if (productsTitle) productsTitle.textContent = data.produtosTitulo;
  if (productsSubtitle) productsSubtitle.textContent = data.produtosSubtitulo;

  const promoTag = $("#promoTag");
  const promoTitle = $("#promoTitle");
  const promoText = $("#promoText");
  const promoRules = $("#promoRules");

  if (promoTag && promoTitle && promoText && promoRules) {
    if (SITE_CONFIG.campanhaAtiva) {
      promoTag.textContent = "informações importantes";
      promoTitle.textContent = "Atenção aos prazos e condições da campanha";
      promoText.textContent =
        "Para garantir uma entrega organizada e um presente preparado com cuidado, confira as informações da campanha especial de Dia dos Namorados.";
      promoRules.classList.remove("hidden");
    } else {
      promoTag.textContent = "campanha limitada";
      promoTitle.textContent = "Garanta sua cesta com antecedência";
      promoText.textContent =
        "Em datas comemorativas, nossas quantidades são limitadas. Entre em contato pelo WhatsApp, escolha a sua cesta e garanta o seu presente.";
      promoRules.classList.add("hidden");
    }
  }

  const mainLinks = [
    "#heroWhatsapp",
    "#promoWhatsapp",
    "#finalWhatsapp",
    "#floatWhatsapp",
    "#headerWhatsapp"
  ];

  mainLinks.forEach((selector) => {
    const link = $(selector);
    if (link) link.href = whatsappLink(data.mensagemWhatsapp);
  });

  const heroWhatsapp = $("#heroWhatsapp");
  if (heroWhatsapp) {
    heroWhatsapp.textContent = data.botao;
  }

  const campaignPrice = $("#campaignPrice");
  const priceBadge = $("#priceBadge");

  if (campaignPrice && priceBadge) {
    if (data.preco) {
      campaignPrice.textContent = data.preco;
      priceBadge.classList.remove("hidden");
    } else {
      priceBadge.classList.add("hidden");
    }
  }

  const campaignHighlights = $("#campaignHighlights");

  if (campaignHighlights) {
    campaignHighlights.innerHTML = data.destaques
      .map(([title, subtitle]) => `
        <div>
          <strong>${title}</strong>
          <span>${subtitle}</span>
        </div>
      `)
      .join("");
  }
}

function getActiveProducts() {
  return SITE_CONFIG.campanhaAtiva ? CAMPAIGN_PRODUCTS : PRODUCTS;
}

function getCategories() {
  return ["Todos", ...new Set(getActiveProducts().map((product) => product.categoria))];
}

function renderCategories() {
  const tabs = $("#categoryTabs");
  tabs.innerHTML = getCategories()
    .map((category, index) => `
      <button class="${index === 0 ? "active" : ""}" data-category="${category}">
        ${category}
      </button>
    `)
    .join("");

  tabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      tabs.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderProducts(button.dataset.category);
    });
  });
}

function renderProducts(category = "Todos", search = "") {
  const grid = $("#productsGrid");
  const searchTerm = search.trim().toLowerCase();

  const filtered = getActiveProducts().filter((product) => {
    const matchCategory = category === "Todos" || product.categoria === category;
    const matchSearch =
      !searchTerm ||
      product.nome.toLowerCase().includes(searchTerm) ||
      product.categoria.toLowerCase().includes(searchTerm) ||
      product.descricao.toLowerCase().includes(searchTerm);

    return matchCategory && matchSearch;
  });

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>Nenhuma cesta encontrada</h3>
        <p>Tente buscar por outro termo ou fale direto pelo WhatsApp.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map((product, index) => {
      const detailsId = `product-details-${index}`;

      return `
        <article class="product-card">
          <div class="product-image">
            <img src="${product.imagem}" alt="${product.nome}">
            ${product.ilustrativo ? '<span class="product-illustrative-badge">Foto ilustrativa</span>' : ''}
            <div class="product-tags">
              <span>${product.etiqueta}</span>
              <span>${product.selo}</span>
            </div>
          </div>

          <div class="product-content">
            <h3>${product.nome}</h3>

            <button
              class="product-details-toggle"
              type="button"
              aria-expanded="false"
              aria-controls="${detailsId}"
            >
              <span>Ver itens</span>
              <span class="product-details-arrow" aria-hidden="true">⌄</span>
            </button>

            <div class="product-details" id="${detailsId}">
              <p class="product-description">${product.descricao}</p>
            </div>

            ${product.aviso ? `<p class="product-note">${product.aviso}</p>` : '<p class="product-note product-note-placeholder">Foto real do produto.</p>'}

            <strong class="product-price">${product.preco}</strong>

            <a
              class="product-button"
              href="${whatsappLink(product.mensagem)}"
              target="_blank"
              rel="noopener"
            >
              Pedir no WhatsApp
            </a>
          </div>
        </article>
      `;
    })
    .join("");

  grid.querySelectorAll(".product-details-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".product-card");
      const isOpen = card.classList.toggle("details-open");

      button.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });
}

function setupMenu() {
  const button = $("#menuButton");
  const nav = $("#nav");

  button.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

function setupSearch() {
  const form = $("#searchForm");
  const input = $("#searchInput");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    document.querySelectorAll("#categoryTabs button").forEach((button, index) => {
      button.classList.toggle("active", index === 0);
    });

    renderProducts("Todos", input.value);
    document.querySelector("#produtos").scrollIntoView({ behavior: "smooth" });
  });
}

function setupInstitutionalPages() {
  const main = document.querySelector("main");
  const institutionalPage = $("#institutionalPage");
  const backHomeButton = $("#backHomeButton");
  const pageLinks = document.querySelectorAll("[data-page-link]");
  const pages = document.querySelectorAll(".institutional-content");

  if (!main || !institutionalPage || !backHomeButton || !pageLinks.length) return;

  function openPage(pageName) {
    main.classList.add("hidden");
    institutionalPage.classList.remove("hidden");

    pages.forEach((page) => page.classList.add("hidden"));

    const selectedPage = document.querySelector(`#page-${pageName}`);

    if (selectedPage) {
      selectedPage.classList.remove("hidden");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function backHome() {
    institutionalPage.classList.add("hidden");
    main.classList.remove("hidden");

    pages.forEach((page) => page.classList.add("hidden"));

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  pageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const pageName = link.dataset.pageLink;
      openPage(pageName);

      const nav = $("#nav");
      if (nav) nav.classList.remove("open");
    });
  });

  backHomeButton.addEventListener("click", backHome);
}

function setupInstitutionalPages() {
  const main = document.querySelector("main");
  const institutionalPage = $("#institutionalPage");
  const backHomeButton = $("#backHomeButton");
  const pageLinks = document.querySelectorAll("[data-page-link]");
  const pages = document.querySelectorAll(".institutional-content");

  if (!main || !institutionalPage || !backHomeButton || !pageLinks.length) return;

  function openPage(pageName) {
    main.classList.add("hidden");
    institutionalPage.classList.remove("hidden");

    pages.forEach((page) => {
      page.classList.add("hidden");
    });

    const selectedPage = document.querySelector(`#page-${pageName}`);

    if (selectedPage) {
      selectedPage.classList.remove("hidden");
    }

    const nav = $("#nav");
    if (nav) nav.classList.remove("open");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function backHome() {
    institutionalPage.classList.add("hidden");
    main.classList.remove("hidden");

    pages.forEach((page) => {
      page.classList.add("hidden");
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  pageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const pageName = link.dataset.pageLink;
      openPage(pageName);
    });
  });

  backHomeButton.addEventListener("click", backHome);
}

function setupCompactHeaderOnScroll() {
  const header = document.querySelector(".site-header");
  const hero = document.querySelector("#inicio");

  if (!header || !hero) return;

  function updateHeaderState() {
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > heroBottom - 160) {
      header.classList.add("header-compact");
    } else {
      header.classList.remove("header-compact");
    }
  }

  updateHeaderState();

  window.addEventListener("scroll", updateHeaderState);
  window.addEventListener("resize", updateHeaderState);
}

applyCampaign();
renderCategories();
renderProducts();
setupMenu();
setupSearch();
setupInstitutionalPages();
setupCompactHeaderOnScroll();

const instagramLinks = document.querySelectorAll("[data-instagram]");

instagramLinks.forEach((link) => {
  link.href = INSTAGRAM_URL;
});

const socialToggle = document.querySelector("#socialToggle");
const socialOptions = document.querySelector("#socialOptions");

socialToggle.addEventListener("click", () => {
  socialOptions.classList.toggle("open");
  socialToggle.classList.toggle("active");
});
