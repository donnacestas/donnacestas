/*
  CONFIGURAÇÃO

  Para editar o catálogo, altere a lista PRODUCTS abaixo
  (nome, categoria, descrição, preço e imagem de cada cesta).

  ORIGEM DA CAMPANHA (Google Ads):
  Quando o visitante chega por um anúncio pago, a mensagem do WhatsApp
  ganha um prefixo diferente para a Marina identificar o lead no WhatsApp.
  A detecção é automática pelo parâmetro "gclid" (o Google Ads adiciona
  sozinho quando o auto-tagging está ligado — padrão da conta) e também
  aceita UTMs (utm_source=google + utm_medium=cpc) como reforço.
  Para mudar o texto da campanha, edite CAMPAIGN_GREETING abaixo.
*/

const WHATSAPP_NUMBER = "5548998279941";
const INSTAGRAM_URL = "https://www.instagram.com/donnacestasfloripa/";
const WHATSAPP_MESSAGE =
  "Olá! Gostaria de conhecer as opções de cestas da Donna Cestas.";

// Prefixo aplicado às mensagens quando o lead vem de campanha paga.
const CAMPAIGN_GREETING = "Oii! Vi a campanha da Donna Cestas no Google.";

const PRODUCTS = [
  {
    nome: "Café Cristal",
    categoria: "Café da manhã",
    etiqueta: "Café da manhã",
    selo: "Mini",
    descricao: "Cesta compacta em nicho de acrílico 12cm com croissant, pães de queijo, queijo, nutella, torradas, café e frutas.",
    preco: "R$ 119,00",
    imagem: "assets/cesta-26.jpg",
    mensagem: "Olá! Tenho interesse em Café Mini do catálogo, no valor de R$ 119,00."
  },
  {
    nome: "Cesta Amanhecer",
    categoria: "Café da manhã",
    etiqueta: "Café da manhã",
    selo: "P",
    descricao: "Café da manhã em nicho de madeira 25cm com croissant, mini baguete, charcutaria, queijos, suco, café e frutas.",
    preco: "R$ 218,00",
    imagem: "assets/cesta-13.jpg",
    mensagem: "Olá! Tenho interesse em Café P do catálogo, no valor de R$ 218,00."
  },
  {
    nome: "Cesta Encanto",
    categoria: "Café da manhã",
    etiqueta: "Café da manhã",
    selo: "M",
    descricao: "Cesta em nicho de madeira 30cm com itens de café, caseirinho, queijos, charcutaria, suco, cappuccino e frutas.",
    preco: "R$ 284,00",
    imagem: "assets/cesta-14.jpg",
    mensagem: "Olá! Tenho interesse em Café M do catálogo, no valor de R$ 284,00."
  },
  {
    nome: "Cesta Elegance",
    categoria: "Café da manhã",
    etiqueta: "Café da manhã",
    selo: "G",
    descricao: "Cesta maior em nicho de madeira 35cm com variedade de pães, queijos, charcutarias, suco, café, chá e frutas.",
    preco: "R$ 358,00",
    imagem: "assets/cesta-15.jpg",
    mensagem: "Olá! Tenho interesse em Café G do catálogo, no valor de R$ 358,00."
  },
  {
    nome: "Cesta Feliz Aniversário",
    categoria: "Aniversário",
    etiqueta: "Aniversário",
    selo: "Especial",
    descricao: "Cesta em nicho de madeira 35cm com mini bolinho bentô, croissant, queijos, charcutaria, suco, café e frutas.",
    preco: "R$ 290,00",
    imagem: "assets/cesta-17.jpg",
    mensagem: "Olá! Tenho interesse em Feliz Aniversário do catálogo, no valor de R$ 290,00."
  },
  {
    nome: "Executive Box",
    categoria: "Corporativas",
    etiqueta: "Corporativa",
    selo: "Empresas",
    descricao: "Box de madeira com mini espumante, chocolate importado e opção de amêndoas ou queijo.",
    preco: "R$ 180,00",
    imagem: "assets/cesta-21.jpg",
    mensagem: "Olá! Tenho interesse em Box Corporativa do catálogo, no valor de R$ 180,00."
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
    if (link) link.href = whatsappLink(buildWhatsappMessage(WHATSAPP_MESSAGE));
  });
}

function getCategories() {
  return ["Todos", ...new Set(PRODUCTS.map((product) => product.categoria))];
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

  const filtered = PRODUCTS.filter((product) => {
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
