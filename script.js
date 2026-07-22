/*
  CONFIGURAÇÃO

  CAMPANHA SAZONAL (ex: Dia dos Avós):
  - Para ATIVAR a campanha, mude SITE_CONFIG.campanhaAtiva para true.
  - Para DESATIVAR e voltar a loja normal, mude para false.
  Quando ativa, o site troca a identidade visual (tema dia-dos-avos),
  os textos e mostra a lista CAMPAIGN_PRODUCTS no lugar do catálogo normal.
  Os textos da campanha ficam no bloco SITE_CONFIG.campanha abaixo.

  Para editar o catálogo normal, altere a lista PRODUCTS.

  ORIGEM DA CAMPANHA PAGA (Google Ads):
  Independente da campanha sazonal, quando o visitante chega por um anúncio
  pago, a mensagem do WhatsApp ganha um prefixo (CAMPAIGN_GREETING) para a
  Marina identificar o lead. Detecção automática por "gclid" (auto-tagging)
  e também por UTMs (utm_source=google + utm_medium=cpc).
*/

const WHATSAPP_NUMBER = "5548998279941";
const INSTAGRAM_URL = "https://www.instagram.com/donnacestasfloripa/";
const WHATSAPP_MESSAGE =
  "Olá! Gostaria de conhecer as opções de cestas da Donna Cestas.";

// Prefixo aplicado às mensagens quando o lead vem de campanha paga (Google Ads).
const CAMPAIGN_GREETING = "Oii! Vi a campanha da Donna Cestas no Google.";

const SITE_CONFIG = {
  // Mude para true para ativar a campanha de Dia dos Avós.
  campanhaAtiva: true,

  campanha: {
    tema: "dia-dos-avos",
    imagem: "assets/avos-cesta-memorias.jpeg",
    tag: "Dia dos Avós · 26 de julho",
    titulo: "Um carinho especial para quem cuidou de você.",
    texto:
      "Cestas artesanais de Dia dos Avós para celebrar quem sempre esteve por perto. Encomendas até 25/07, com entrega no dia 26/07.",
    botao: "Encomendar pelo WhatsApp",
    mensagemWhatsapp:
      "Olá! Gostaria de encomendar uma cesta de Dia dos Avós da Donna Cestas.",
    produtosTitulo: "Catálogo Dia dos Avós",
    produtosSubtitulo:
      "Escolha uma cesta especial e encomende pelo WhatsApp. Pedidos até 25/07.",
    menuProdutos: "Dia dos Avós",
    destaques: [
      ["26 de julho", "Dia dos Avós"],
      ["Pedidos até 25/07", "Pagamento antecipado"],
      ["Entrega 26/07", "6h às 9h · Floripa, São José e Palhoça"]
    ],
    promoTag: "Encomende o seu",
    promoTitulo: "Garanta sua cesta de Dia dos Avós",
    promoTexto:
      "Pedidos limitados pelo WhatsApp até 25/07 (sábado), mediante pagamento integral antecipado. Entregas em Florianópolis, São José e Palhoça no dia 26/07, entre 6h e 9h conforme a rota, devido à alta demanda. Itens pré-estabelecidos, sem alterações. Trabalhamos com PIX ou link de crédito (com acréscimo de taxa)."
  }
};

const PRODUCTS = [
  {
    nome: "Café Cristal",
    categoria: "Café da manhã",
    etiqueta: "Café da manhã",
    selo: "Mini",
    descricao: "Cesta compacta em nicho de acrílico 12cm com croissant, pães de queijo, queijo, nutella, torradas, café e frutas.",
    preco: "R$ 139,00",
    imagem: "assets/cesta-26.jpg",
    mensagem: "Olá! Tenho interesse em Café Cristal do catálogo, no valor de R$ 139,00."
  },
  {
    nome: "Cesta Amanhecer",
    categoria: "Café da manhã",
    etiqueta: "Café da manhã",
    selo: "P",
    descricao: "Café da manhã em nicho de madeira 25cm com croissant, mini baguete, charcutaria, queijos, suco, café e frutas.",
    preco: "R$ 229,00",
    imagem: "assets/cesta-13.jpg",
    mensagem: "Olá! Tenho interesse em Cesta Amanhecer do catálogo, no valor de R$ 229,00."
  },
  {
    nome: "Cesta Encanto",
    categoria: "Café da manhã",
    etiqueta: "Café da manhã",
    selo: "M",
    descricao: "Cesta em nicho de madeira 30cm com itens de café, caseirinho, queijos, charcutaria, suco, cappuccino e frutas.",
    preco: "R$ 289,00",
    imagem: "assets/cesta-14.jpg",
    mensagem: "Olá! Tenho interesse em Cesta Encanto do catálogo, no valor de R$ 289,00."
  },
  {
    nome: "Cesta Elegance",
    categoria: "Café da manhã",
    etiqueta: "Café da manhã",
    selo: "G",
    descricao: "Cesta maior em nicho de madeira 35cm com variedade de pães, queijos, charcutarias, suco, café, chá e frutas.",
    preco: "R$ 399,00",
    imagem: "assets/cesta-15.jpg",
    mensagem: "Olá! Tenho interesse em Cesta Elegance do catálogo, no valor de R$ 399,00."
  },
  {
    nome: "Cesta Feliz Aniversário",
    categoria: "Aniversário",
    etiqueta: "Aniversário",
    selo: "Especial",
    descricao: "Cesta em nicho de madeira 35cm com mini bolinho bentô, croissant, queijos, charcutaria, suco, café e frutas.",
    preco: "R$ 290,00",
    imagem: "assets/cesta-17.jpg",
    mensagem: "Olá! Tenho interesse em Cesta Feliz Aniversário do catálogo, no valor de R$ 290,00."
  },
  {
    nome: "Tábua Glamour",
    categoria: "Tábuas",
    etiqueta: "Tábua",
    selo: "Até 2 pessoas",
    descricao: "Tábua de MDF 30cm com queijo brie, queijo minas, salame, copa, nuts, chocolate, damasco, geleia de pimenta ou frutas vermelhas, baguete rústica e frutas da estação.",
    preco: "R$ 279,00",
    imagem: "assets/glamour.png",
    mensagem: "Olá! Tenho interesse em Tábua Glamour do catálogo, no valor de R$ 279,00."
  },
  {
    nome: "Box Wine",
    categoria: "Presentes",
    etiqueta: "Presente",
    selo: "Especial",
    descricao: "Box cartonada com vinho ou espumante, queijo fino, geleia e chocolate importado. Embalada em celofane e laço, acompanha cartão. Consultar rótulos e cores.",
    preco: "R$ 279,00",
    imagem: "assets/wine.jpeg",
    mensagem: "Olá! Tenho interesse em Box Wine do catálogo, no valor de R$ 279,00."
  },
  {
    nome: "Box Boas Vindas",
    categoria: "Presentes",
    etiqueta: "Presente",
    selo: "Especial",
    descricao: "Box cartonada com cafés drip coffee, chás sachê, bolachas decoradas, amigurumi e adesivo com nome do presenteado. Embalada em celofane e laço, acompanha cartão.",
    preco: "R$ 259,00",
    imagem: "assets/bvindas.jpeg",
    mensagem: "Olá! Tenho interesse em Box Boas Vindas do catálogo, no valor de R$ 259,00."
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

// Produtos exibidos quando a campanha de Dia dos Avós está ativa.
const CAMPAIGN_PRODUCTS = [
  {
    nome: "Cafézinho do Vovô",
    categoria: "Cestas",
    etiqueta: "Dia dos Avós",
    selo: "Mini",
    descricao: "Croissant, stropwaffle, pães de queijo recheados, queijo, charcutaria, nutella, biscoitos finos, torradas finas, café drip coffee e frutas da estação. Montado em um lindo nicho de acrílico quadrado 12cm.",
    preco: "R$ 139,00",
    imagem: "assets/avos-cafezinho-do-vovo.jpeg",
    mensagem: "Olá! Tenho interesse na cesta Cafézinho do Vovô do catálogo de Dia dos Avós, no valor de R$ 139,00."
  },
  {
    nome: "Cafézinho da Vovó",
    categoria: "Cestas",
    etiqueta: "Dia dos Avós",
    selo: "Mini",
    descricao: "Croissant, stropwaffle, pães de queijo recheados, queijo, charcutaria, nutella, biscoitos finos, torradas finas, café drip coffee e frutas da estação. Montado em um lindo nicho de acrílico quadrado 12cm.",
    preco: "R$ 139,00",
    imagem: "assets/avos-cafezinho-da-vovo.jpeg",
    mensagem: "Olá! Tenho interesse na cesta Cafézinho da Vovó do catálogo de Dia dos Avós, no valor de R$ 139,00."
  },
  {
    nome: "Cesta Memórias",
    categoria: "Cestas",
    etiqueta: "Dia dos Avós",
    selo: "1 pessoa",
    descricao: "Croissant, stropwaffle, pães de queijo recheados, charcutaria, queijo, mini baguete rústica, geleia ou nutella, manteiga francesa, pepita de mel, biscoitos finos, torradas finas, suco 300ml, café drip coffee e frutas da estação. Ideal para até 1 pessoa.",
    preco: "R$ 239,00",
    imagem: "assets/avos-cesta-memorias.jpeg",
    mensagem: "Olá! Tenho interesse na Cesta Memórias do catálogo de Dia dos Avós, no valor de R$ 239,00."
  },
  {
    nome: "Cesta Raízes de Amor",
    categoria: "Cestas",
    etiqueta: "Dia dos Avós",
    selo: "2 pessoas",
    descricao: "Croissant, stropwaffle, pães de queijo recheados, mini baguete rústica, muffin, charcutaria, queijos, geleia ou nutella, manteiga francesa, mel, biscoitos finos, folhas de chocolate, torradas finas, suco 300ml, café drip coffee, cappuccino sachê e frutas da estação. Ideal para até 2 pessoas.",
    preco: "R$ 289,00",
    imagem: "assets/avos-cesta-raizes-de-amor.jpeg",
    mensagem: "Olá! Tenho interesse na Cesta Raízes de Amor do catálogo de Dia dos Avós, no valor de R$ 289,00."
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
    nome: "Orquídea uma haste",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Flor",
    descricao: "Orquídea de uma haste para complementar a cesta com um toque elegante.",
    preco: "R$ 110,00",
    imagem: "assets/orquidea.png",
    mensagem: "Olá! Tenho interesse no adicional Orquídea uma haste, no valor de R$ 110,00."
  }
];

const $ = (selector) => document.querySelector(selector);

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Detecta se o acesso veio de uma campanha paga do Google Ads.
// Funciona sozinho via "gclid" (auto-tagging, padrão da conta) e também
// aceita UTMs. A origem fica guardada na sessão para sobreviver à navegação.
function isPaidCampaign() {
  try {
    const params = new URLSearchParams(window.location.search);
    const medium = (params.get("utm_medium") || "").toLowerCase();

    const fromUrl =
      params.has("gclid") ||
      (params.get("utm_source") === "google" && medium === "cpc") ||
      ["cpc", "ppc", "paid", "paidsearch"].includes(medium);

    if (fromUrl) {
      sessionStorage.setItem("donna_campaign", "1");
      return true;
    }

    return sessionStorage.getItem("donna_campaign") === "1";
  } catch (error) {
    return false;
  }
}

// Marca a mensagem com a saudação de campanha quando o lead é pago.
// Como toda mensagem começa com "Olá!", trocamos esse início pelo
// prefixo da campanha, preservando o produto e o preço.
function buildWhatsappMessage(message) {
  if (!isPaidCampaign()) return message;
  return message.replace(/^Olá!\s*/i, `${CAMPAIGN_GREETING} `);
}

// A campanha está ativa se o flag estiver ligado OU se a URL tiver
// ?preview=avos (permite pré-visualizar no site no ar sem afetar os
// visitantes reais, antes de ligar campanhaAtiva de verdade).
function isCampaignActive() {
  if (SITE_CONFIG.campanhaAtiva) return true;
  try {
    return new URLSearchParams(window.location.search).get("preview") === "avos";
  } catch (error) {
    return false;
  }
}

// Produtos exibidos no momento: campanha ou catálogo normal.
function getActiveProducts() {
  return isCampaignActive() ? CAMPAIGN_PRODUCTS : PRODUCTS;
}

// Mensagem padrão dos botões gerais, conforme campanha ativa ou não.
function activeWhatsappMessage() {
  return isCampaignActive()
    ? SITE_CONFIG.campanha.mensagemWhatsapp
    : WHATSAPP_MESSAGE;
}

// Aplica a identidade da campanha (tema + textos) quando ativa.
// Quando inativa, garante o tema da loja e não altera os textos do HTML.
function applyCampaign() {
  if (!isCampaignActive()) {
    document.body.dataset.theme = "loja";
    return;
  }

  const data = SITE_CONFIG.campanha;
  document.body.dataset.theme = data.tema || "dia-dos-avos";

  const setText = (selector, value) => {
    const el = $(selector);
    if (el && value != null) el.textContent = value;
  };

  const heroImage = $("#campaignImage");
  if (heroImage && data.imagem) {
    heroImage.src = data.imagem;
    heroImage.alt = data.titulo || heroImage.alt;
  }

  setText("#navProductsLink", data.menuProdutos);
  setText("#campaignTag", data.tag);
  setText("#campaignTitle", data.titulo);
  setText("#campaignText", data.texto);
  setText("#heroWhatsapp", data.botao);
  setText("#productsTitle", data.produtosTitulo);
  setText("#productsSubtitle", data.produtosSubtitulo);
  setText("#promoTag", data.promoTag);
  setText("#promoTitle", data.promoTitulo);
  setText("#promoText", data.promoTexto);

  const highlights = $("#campaignHighlights");
  if (highlights && Array.isArray(data.destaques)) {
    highlights.innerHTML = data.destaques
      .map(([title, subtitle]) => `
        <div>
          <strong>${title}</strong>
          <span>${subtitle}</span>
        </div>
      `)
      .join("");
  }
}

// Troca as fotos da faixa do header pelas da campanha quando ativa.
// O loop do marquee depende de duas metades idênticas (animação -50%),
// então montamos uma sequência e a duplicamos.
function setupHeaderMarquee() {
  if (!isCampaignActive()) return;

  const track = $("#headerPhotoTrack");
  if (!track) return;

  const imagens = CAMPAIGN_PRODUCTS
    .filter((product) => product.categoria === "Cestas")
    .map((product) => product.imagem);

  if (!imagens.length) return;

  const sequencia = [];
  while (sequencia.length < 12) {
    sequencia.push(...imagens);
  }

  const metade = sequencia.slice(0, 12);
  track.innerHTML = metade
    .concat(metade)
    .map((src) => `<img src="${src}" alt="" />`)
    .join("");
}

function setupWhatsappLinks() {
  const targets = [
    "#headerWhatsapp",
    "#heroWhatsapp",
    "#promoWhatsapp",
    "#finalWhatsapp",
    "#floatWhatsapp"
  ];

  targets.forEach((selector) => {
    const link = $(selector);
    if (link) link.href = whatsappLink(buildWhatsappMessage(activeWhatsappMessage()));
  });
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
        <article class="product-card" style="--card-index: ${index}">
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
              href="${whatsappLink(buildWhatsappMessage(product.mensagem))}"
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

  // Fade suave das fotos conforme carregam (ou de imediato se já em cache).
  grid.querySelectorAll(".product-image img").forEach((img) => {
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add("is-loaded");
    } else {
      img.addEventListener("load", () => img.classList.add("is-loaded"), { once: true });
      img.addEventListener("error", () => img.classList.add("is-loaded"), { once: true });
    }
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
setupHeaderMarquee();
setupWhatsappLinks();
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
