/*
  CONFIGURAÇÃO

  CAMPANHA SAZONAL (ex: Dia dos Avós):
  - Para ATIVAR a campanha, mude SITE_CONFIG.campanhaAtiva para true.
  - Para DESATIVAR e voltar a loja normal, mude para false.
  Quando ativa, o site troca a identidade visual (tema dia-dos-avos),
  os textos e mostra a lista CAMPAIGN_PRODUCTS no lugar do catálogo normal.
  Os textos da campanha ficam no bloco SITE_CONFIG.campanha abaixo.

  Para editar o catálogo normal, altere a lista PRODUCTS. A mensagem do
  WhatsApp de cada produto é gerada pelo nome (ver productMessage) e não
  inclui preço.

  ESCOLHA POR OCASIÃO ("O que você quer dizer?"):
  A lista OCASIOES define os motivos de presente e quais produtos de
  PRODUCTS aparecem em cada um. Ao renomear um produto, atualize o nome lá.

  ORIGEM DA CAMPANHA PAGA (Google Ads):
  Independente da campanha sazonal, quando o visitante chega por um anúncio
  pago, a mensagem do WhatsApp ganha um prefixo (CAMPAIGN_GREETING) para a
  Marina identificar o lead. Detecção automática por "gclid" (auto-tagging)
  e também por UTMs (utm_source=google + utm_medium=cpc).
*/

const WHATSAPP_NUMBER = "5548998279941";
const INSTAGRAM_URL = "https://www.instagram.com/donnacestasfloripa/";
const WHATSAPP_MESSAGE =
  "Olá! Gostaria de ajuda para escolher um presente da Donna Cestas.";

// Prefixo aplicado às mensagens quando o lead vem de campanha paga (Google Ads).
const CAMPAIGN_GREETING = "Oii! Vi a campanha da Donna Cestas no Google.";

const SITE_CONFIG = {
  // Mude para true para ativar a campanha de Dia dos Pais.
  campanhaAtiva: false,

  campanha: {
    tema: "dia-dos-pais",
    imagem: "assets/amordepai.jpeg",
    tag: "Dia dos Pais · Edição Presença",
    titulo: "Valorizar quem esteve presente em cada fase da vida",
    texto:
      "Neste Dia dos Pais, escolhemos a Presença. Há pessoas que transformam nossa caminhada apenas por estarem presentes. Homenageie quem sempre esteve ao seu lado.",
    botao: "Encomendar pelo WhatsApp",
    mensagemWhatsapp:
      "Olá! Gostaria de encomendar uma cesta de Dia dos Pais da Donna Cestas.",
    produtosTitulo: "Catálogo Dia dos Pais",
    produtosSubtitulo:
      "Escolha uma cesta especial e encomende pelo WhatsApp.",
    menuProdutos: "Dia dos Pais",
    destaques: [
      ["09 de Agosto", "Dia dos Pais"],
      ["Pedidos até 07/08", "Pagamento antecipado"],
      ["Entrega 09/08", "6h às 10h · Floripa, São José e Palhoça"]
    ],
    promoTag: "Informações Importantes",
    promoTitulo: "Pedidos Limitados",
    promoTexto:
      "Pedidos através do WhatsApp até 07/08 (ou conforme disponibilidade), mediante pagamento integral antecipado. Não será possível realizar alterações nos itens pré-estabelecidos. Entregas em Florianópolis, São José e Palhoça somente domingo (09/08) entre 6h-10h. Trabalhamos com PIX ou link de crédito (com acréscimo de taxa)."
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
  },
  {
    nome: "Cesta Amanhecer",
    categoria: "Café da manhã",
    etiqueta: "Café da manhã",
    selo: "P",
    descricao: "Café da manhã em nicho de madeira 25cm com croissant, mini baguete, charcutaria, queijos, suco, café e frutas.",
    preco: "R$ 229,00",
    imagem: "assets/cesta-13.jpg",
  },
  {
    nome: "Cesta Encanto",
    categoria: "Café da manhã",
    etiqueta: "Café da manhã",
    selo: "M",
    descricao: "Cesta em nicho de madeira 30cm com itens de café, caseirinho, queijos, charcutaria, suco, cappuccino e frutas.",
    preco: "R$ 289,00",
    imagem: "assets/cesta-14.jpg",
  },
  {
    nome: "Cesta Elegance",
    categoria: "Café da manhã",
    etiqueta: "Café da manhã",
    selo: "G",
    descricao: "Cesta maior em nicho de madeira 35cm com variedade de pães, queijos, charcutarias, suco, café, chá e frutas.",
    preco: "R$ 399,00",
    imagem: "assets/cesta-15.jpg",
  },
  {
    nome: "Cesta Feliz Aniversário",
    categoria: "Aniversário",
    etiqueta: "Aniversário",
    selo: "Especial",
    descricao: "Cesta em nicho de madeira 35cm com mini bolinho bentô, croissant, queijos, charcutaria, suco, café e frutas.",
    preco: "R$ 290,00",
    imagem: "assets/cesta-17.jpg",
  },
  {
    nome: "Tábua Glamour",
    categoria: "Tábuas",
    etiqueta: "Tábua",
    selo: "Até 2 pessoas",
    descricao: "Tábua de MDF 30cm com queijo brie, queijo minas, salame, copa, nuts, chocolate, damasco, geleia de pimenta ou frutas vermelhas, baguete rústica e frutas da estação.",
    preco: "R$ 279,00",
    imagem: "assets/glamour.png",
  },
  {
    nome: "Box Wine",
    categoria: "Presentes",
    etiqueta: "Presente",
    selo: "Especial",
    descricao: "Box cartonada com vinho ou espumante, queijo fino, geleia e chocolate importado. Embalada em celofane e laço, acompanha cartão. Consultar rótulos e cores.",
    preco: "R$ 279,00",
    imagem: "assets/wine.jpeg",
  },
  {
    nome: "Box Boas Vindas",
    categoria: "Presentes",
    etiqueta: "Presente",
    selo: "Especial",
    descricao: "Box cartonada com cafés drip coffee, chás sachê, bolachas decoradas, amigurumi e adesivo com nome do presenteado. Embalada em celofane e laço, acompanha cartão.",
    preco: "R$ 259,00",
    imagem: "assets/bvindas.jpeg",
  },
  {
    nome: "Mini bolinho bentô cake",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Bentô",
    descricao: "Mini bolinho bentô cake personalizado para complementar a cesta.",
    preco: "R$ 100,00",
    imagem: "assets/bento-cake.png",
  },
  {
    nome: "Balão bubble",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Balão",
    descricao: "Balão bubble para deixar o presente ainda mais especial.",
    preco: "R$ 80,00",
    imagem: "assets/balao.png",
  },
  {
    nome: "Orquídea uma haste",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Flor",
    descricao: "Orquídea de uma haste para complementar a cesta com um toque elegante.",
    preco: "R$ 110,00",
    imagem: "assets/orquidea.png",
  },
  {
    nome: "Girassol",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Flor",
    descricao: "Girassol para complementar o presente com delicadeza e carinho.",
    preco: "R$ 50,00",
    imagem: "assets/girassol.png",
  },
  {
    nome: "Foto polaroid",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Foto",
    descricao: "Foto polaroid para deixar o presente mais pessoal e afetivo.",
    preco: "R$ 12,00",
    imagem: "assets/polaroid.png",
  },
  {
    nome: "Buquê P flores do campo",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Flores",
    descricao: "Buquê pequeno de flores do campo para complementar a cesta.",
    preco: "R$ 120,00",
    imagem: "assets/buque.png",
  }
];

// Produtos exibidos quando a campanha de Dia dos Pais está ativa.
const CAMPAIGN_PRODUCTS = [
  {
    nome: "Amor de Pai",
    categoria: "Cestas",
    etiqueta: "Dia dos Pais",
    selo: "1 pessoa",
    descricao: "Croissant, Mini Baguete, Cruffin recheado com doce de leite, Pães de Queijo recheados, Bolachas decorada Dia dos Pais, Salame, Queijo Minas Meia Cura, Geléia, Manteiga francesa, Torradas finas, Suco 300ml, Café drip coffee, Frutas da estação, Cartão Personalizado. Ideal para 1 pessoa.",
    preco: "R$ 249,00",
    imagem: "assets/amordepai.jpeg",
  },
  {
    nome: "Essência de Pai",
    categoria: "Cestas",
    etiqueta: "Dia dos Pais",
    selo: "2-3 pessoas",
    descricao: "Croissant, Mini Baguetes, Cruffin recheado com doce de leite, Pães de Queijo recheados, Bolachas decoradas Dia dos Pais, Crostatine, Waffle, Chocolate, Salame, Queijo Minas Meia Cura, Geléia, Manteiga francesa, Torradas finas, Suco 300ml, Cafés drip coffee, Capuccino, Frutas da estação, Cartão Personalizado. Ideal para 2-3 pessoas.",
    preco: "R$ 379,00",
    imagem: "assets/essencia.jpeg",
  },
  {
    nome: "Pai e Filhos",
    categoria: "Cestas",
    etiqueta: "Dia dos Pais",
    selo: "3-4 pessoas",
    descricao: "Croissants, Mini Baguetes, Cruffin recheado com doce de leite, Pães de Queijo recheados, Bolacha decoradas Dia dos Pais, Waffle, Crostatines, Chocolate, Salame, Queijo Minas Meia Cura, Geléia, Nutella, Manteiga francesa, Torradas finas, Suco 500ml, Cafés drip coffee, Capuccino, Frutas da estação, Cartão Personalizado. Ideal para 3-4 pessoas.",
    preco: "R$ 489,00",
    imagem: "assets/essencia.jpeg",
  },
  {
    nome: "Foto polaroid",
    categoria: "Adicionais",
    etiqueta: "Adicional",
    selo: "Foto",
    descricao: "Foto polaroid para deixar o presente mais pessoal e afetivo.",
    preco: "R$ 12,00",
    imagem: "assets/polaroid.png",
  }
];

/*
  "O QUE VOCÊ QUER DIZER?" — escolha do presente pelo motivo.
  Cada ocasião lista, pelo NOME exato do card em PRODUCTS, o que aparece
  quando o visitante escolhe aquele motivo (na ordem da lista). Adicionais
  vão para o bloco "Complete o presente". Sem "produtos", mostra todas as
  cestas e presentes (sem adicionais).
  A ocasião com "urgente: true" vira a faixa de destaque abaixo dos cards.
  Link direto (bom para anúncios): ?ocasiao=te-amo, ?ocasiao=aniversario...
*/
const OCASIOES = [
  {
    id: "te-amo",
    emoji: "❤️",
    frase: "Quero dizer “te amo”",
    resumo: "Presentes românticos",
    titulo: "Para dizer “te amo”",
    subtitulo:
      "Presentes românticos para quem faz o seu dia melhor. Complete com flores ou uma foto de vocês.",
    produtos: [
      "Box Wine",
      "Tábua Glamour",
      "Cesta Encanto",
      "Cesta Amanhecer",
      "Café Cristal",
      "Buquê P flores do campo",
      "Foto polaroid",
      "Balão bubble",
      "Orquídea uma haste"
    ],
    mensagem:
      "Olá! Quero um presente romântico para dizer “te amo”. Pode me ajudar a escolher?"
  },
  {
    id: "aniversario",
    emoji: "🎂",
    frase: "Quero desejar feliz aniversário",
    resumo: "Cestas e bentô cake",
    titulo: "Para desejar feliz aniversário",
    subtitulo:
      "Uma surpresa logo cedo ou um mimo para celebrar o dia. Bentô cake e balão deixam tudo mais festivo.",
    produtos: [
      "Cesta Feliz Aniversário",
      "Cesta Amanhecer",
      "Cesta Encanto",
      "Box Wine",
      "Mini bolinho bentô cake",
      "Balão bubble",
      "Foto polaroid"
    ],
    mensagem:
      "Olá! Quero presentear alguém de aniversário. Pode me ajudar a escolher?"
  },
  {
    id: "agradecer",
    emoji: "💐",
    frase: "Quero agradecer",
    resumo: "Mimos para dizer obrigado",
    titulo: "Para agradecer",
    subtitulo:
      "Para a mãe, a amiga ou quem te ajudou: um jeito carinhoso de dizer obrigado.",
    produtos: [
      "Café Cristal",
      "Box Boas Vindas",
      "Cesta Amanhecer",
      "Box Wine",
      "Orquídea uma haste",
      "Girassol",
      "Buquê P flores do campo"
    ],
    mensagem:
      "Olá! Quero um presente para agradecer alguém. Pode me ajudar a escolher?"
  },
  {
    id: "surpreender",
    emoji: "☕",
    frase: "Quero surpreender alguém",
    resumo: "Café da manhã e box",
    titulo: "Para surpreender alguém",
    subtitulo:
      "Café da manhã entregue na porta ou um box especial: a surpresa que ninguém espera.",
    produtos: [
      "Café Cristal",
      "Cesta Amanhecer",
      "Cesta Encanto",
      "Cesta Elegance",
      "Box Boas Vindas",
      "Box Wine",
      "Balão bubble",
      "Girassol"
    ],
    mensagem:
      "Olá! Quero surpreender alguém com um presente. Pode me ajudar a escolher?"
  },
  {
    id: "casal",
    emoji: "🥂",
    frase: "Quero presentear um casal",
    resumo: "Tábuas e box para dois",
    titulo: "Para presentear um casal",
    subtitulo:
      "Para aproveitar a dois: tábuas, vinho e cestas pensadas para dividir.",
    produtos: [
      "Tábua Glamour",
      "Box Wine",
      "Cesta Encanto",
      "Cesta Elegance",
      "Foto polaroid"
    ],
    mensagem: "Olá! Quero presentear um casal. Pode me ajudar a escolher?"
  },
  {
    id: "colaborador",
    emoji: "💼",
    frase: "Quero presentear um colaborador",
    resumo: "Presentes corporativos",
    titulo: "Para presentear colaboradores",
    subtitulo:
      "Boas-vindas, datas especiais e agradecimentos para a equipe ou clientes. Pedidos em quantidade? Peça um orçamento.",
    produtos: ["Box Boas Vindas", "Café Cristal", "Box Wine"],
    mensagem:
      "Olá! Quero presentes para colaboradores da minha empresa. Pode me passar um orçamento?",
    botao: "Pedir orçamento no WhatsApp"
  },
  {
    id: "esqueci",
    urgente: true,
    emoji: "😅",
    frase: "Esqueci a data",
    resumo:
      "Calma, a gente te ajuda. Chame no WhatsApp e vemos na hora o que ainda dá para entregar.",
    titulo: "Esqueceu a data? A gente te ajuda",
    subtitulo:
      "Chame no WhatsApp: vemos na hora o que conseguimos entregar e no melhor horário.",
    mensagem:
      "Olá! Esqueci a data 😅 Preciso de um presente o quanto antes. O que vocês conseguem entregar?",
    botao: "Chamar agora no WhatsApp"
  }
];

const $ = (selector) => document.querySelector(selector);

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Detecta se o acesso veio de uma campanha paga do Google Ads.
// Funciona sozinho via "gclid" (auto-tagging, padrão da conta) e também
// aceita UTMs. Olha só a URL atual: o site é de página única, então os
// parâmetros continuam na URL durante a visita. Não usar sessionStorage —
// no celular a aba fica aberta por dias e marcava visitas orgânicas
// seguintes como se fossem do anúncio.
function isPaidCampaign() {
  try {
    const params = new URLSearchParams(window.location.search);
    const medium = (params.get("utm_medium") || "").toLowerCase();

    return (
      params.has("gclid") ||
      (params.get("utm_source") === "google" && medium === "cpc") ||
      ["cpc", "ppc", "paid", "paidsearch"].includes(medium)
    );
  } catch (error) {
    return false;
  }
}

// Mensagem do botão "Pedir no WhatsApp" de cada produto, montada a partir
// do nome — assim nunca desalinha do card nem leva preço. Para um texto
// específico, defina "mensagem" no produto (deve começar com "Olá!").
function productMessage(product) {
  if (product.mensagem) return product.mensagem;
  return product.categoria === "Adicionais"
    ? `Olá! Tenho interesse no adicional ${product.nome}.`
    : `Olá! Tenho interesse em ${product.nome} do catálogo.`;
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
  // O usuário solicitou que as imagens do header continuem as originais, 
  // mesmo durante a campanha. 
  // if (!isCampaignActive()) return;
  // ...
  return;
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

  const filtered = activeOcasiao
    ? getOcasiaoProducts(activeOcasiao)
    : getActiveProducts().filter((product) => {
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

  const cards = filtered
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


            <a
              class="product-button"
              href="${whatsappLink(buildWhatsappMessage(productMessage(product)))}"
              target="_blank"
              rel="noopener"
            >
              Pedir no WhatsApp
            </a>
          </div>
        </article>
      `;
    });

  // Na escolha por ocasião, os adicionais ganham um título próprio.
  const firstAddon = activeOcasiao
    ? filtered.findIndex((product) => product.categoria === "Adicionais")
    : -1;

  if (firstAddon > 0) {
    cards.splice(firstAddon, 0, `
      <div class="products-subheading">
        <strong>Complete o presente</strong>
        <span>Um detalhe a mais que deixa tudo ainda mais especial.</span>
      </div>
    `);
  }

  grid.innerHTML = cards.join("");

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

// Ocasião escolhida em "O que você quer dizer?" (null = catálogo completo).
let activeOcasiao = null;
let catalogDefaults = null;

// Produtos da ocasião na ordem configurada, com os adicionais sempre no fim.
function getOcasiaoProducts(ocasiao) {
  const list = ocasiao.produtos
    ? ocasiao.produtos
        .map((nome) => {
          const product = PRODUCTS.find((item) => item.nome === nome);
          if (!product) {
            console.warn(`Ocasião "${ocasiao.id}": produto "${nome}" não existe em PRODUCTS.`);
          }
          return product;
        })
        .filter(Boolean)
    : PRODUCTS.filter((product) => product.categoria !== "Adicionais");

  return [
    ...list.filter((product) => product.categoria !== "Adicionais"),
    ...list.filter((product) => product.categoria === "Adicionais")
  ];
}

function selectOcasiao(id, { scroll = false } = {}) {
  activeOcasiao = OCASIOES.find((item) => item.id === id) || null;

  const heading = activeOcasiao
    ? {
        eyebrow: "selecionamos para você",
        title: activeOcasiao.titulo,
        subtitle: activeOcasiao.subtitulo
      }
    : catalogDefaults;

  $("#productsEyebrow").textContent = heading.eyebrow;
  $("#productsTitle").textContent = heading.title;
  $("#productsSubtitle").textContent = heading.subtitle;

  $("#categoryTabs").classList.toggle("hidden", Boolean(activeOcasiao));
  $("#intentBar").classList.toggle("hidden", !activeOcasiao);

  document.querySelectorAll(".ocasiao-card").forEach((card) => {
    const pressed = Boolean(activeOcasiao) && card.dataset.ocasiao === activeOcasiao.id;
    card.setAttribute("aria-pressed", pressed ? "true" : "false");
  });

  if (activeOcasiao) {
    const link = $("#intentWhatsapp");
    link.href = whatsappLink(buildWhatsappMessage(activeOcasiao.mensagem));
    link.textContent = activeOcasiao.botao || "Quero uma sugestão no WhatsApp";
    link.dataset.ocasiao = activeOcasiao.id;
  } else {
    document.querySelectorAll("#categoryTabs button").forEach((button, index) => {
      button.classList.toggle("active", index === 0);
    });
  }

  renderProducts();
  updateOcasiaoUrl();

  if (scroll) scrollToSection($("#produtos"));
}

// Mantém ?ocasiao= na URL (preservando gclid/UTMs) para o link poder ser
// compartilhado ou usado como página de destino de anúncio.
function updateOcasiaoUrl() {
  try {
    const url = new URL(window.location.href);
    if (activeOcasiao) url.searchParams.set("ocasiao", activeOcasiao.id);
    else url.searchParams.delete("ocasiao");
    history.replaceState(null, "", url);
  } catch (error) {
    // URL é só conveniência; a escolha funciona sem ela.
  }
}

function setupOcasioes() {
  const section = $("#ocasioes");
  if (!section) return;

  // Em campanha sazonal o catálogo é outro: esconde a escolha por ocasião.
  if (isCampaignActive()) {
    section.classList.add("hidden");
    $("#navOcasioesLink").classList.add("hidden");
    const heroLink = $("#heroHelpLink");
    heroLink.textContent = "Ver opções de cestas";
    heroLink.href = "#produtos";
    return;
  }

  const clean = (el) => el.textContent.replace(/\s+/g, " ").trim();
  catalogDefaults = {
    eyebrow: clean($("#productsEyebrow")),
    title: clean($("#productsTitle")),
    subtitle: clean($("#productsSubtitle"))
  };

  $("#ocasioesGrid").innerHTML = OCASIOES.filter((item) => !item.urgente)
    .map((item) => `
      <button class="ocasiao-card" type="button" data-ocasiao="${item.id}" aria-pressed="false">
        <span class="ocasiao-emoji" aria-hidden="true">${item.emoji}</span>
        <span class="ocasiao-frase">${item.frase}</span>
        <span class="ocasiao-resumo">${item.resumo}</span>
        <span class="ocasiao-arrow" aria-hidden="true">→</span>
      </button>
    `)
    .join("");

  const urgente = OCASIOES.find((item) => item.urgente);
  const urgentBox = $("#ocasiaoUrgente");

  if (urgente && urgentBox) {
    urgentBox.innerHTML = `
      <span class="ocasiao-emoji" aria-hidden="true">${urgente.emoji}</span>
      <div>
        <strong>${urgente.frase}</strong>
        <p>${urgente.resumo}</p>
      </div>
      <div class="ocasiao-urgente-actions">
        <a
          class="btn primary"
          id="urgentWhatsapp"
          href="${whatsappLink(buildWhatsappMessage(urgente.mensagem))}"
          target="_blank"
          rel="noopener"
        >${urgente.botao || "Falar no WhatsApp"}</a>
        <button class="btn secondary" type="button" data-ocasiao="${urgente.id}">
          Ver opções
        </button>
      </div>
    `;
    urgentBox.classList.remove("hidden");
  }

  section.addEventListener("click", (event) => {
    const trigger = event.target.closest("button[data-ocasiao]");
    if (trigger) selectOcasiao(trigger.dataset.ocasiao, { scroll: true });
  });

  $("#intentClear").addEventListener("click", () => selectOcasiao(null));

  const fromUrl = new URLSearchParams(window.location.search).get("ocasiao");
  if (fromUrl && OCASIOES.some((item) => item.id === fromUrl)) {
    selectOcasiao(fromUrl, { scroll: true });
  }
}

// Rola até uma seção descontando o header fixo. A conta usa a altura ATUAL
// do header: se ele encolher no caminho (a faixa de fotos some ao sair do
// hero), o conteúdo sobe exatamente essa diferença e a seção para logo
// abaixo do header compacto. Um scroll-margin fixo no CSS não acerta os
// dois casos (header cheio x já compacto).
function scrollToSection(target) {
  const header = document.querySelector(".site-header");
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function setupAnchorScroll() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    const id = link.getAttribute("href").slice(1);
    const target = id && document.getElementById(id);
    // Alvo oculto (ex.: página institucional aberta): comportamento padrão
    if (!target || target.offsetParent === null) return;

    event.preventDefault();
    // "#id" relativo mantém a query (gclid/UTM/ocasiao) na URL
    history.replaceState(null, "", `#${id}`);
    scrollToSection(target);
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
setupOcasioes();
setupMenu();
setupAnchorScroll();
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
