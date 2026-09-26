(function () {
  const config = window.BIRGUL_CONFIG;
  const products = window.BIRGUL_PRODUCTS || [];

  const currencyFormatter = new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: config.currencyCode,
    maximumFractionDigits: 0
  });

  function formatPrice(price) {
    return currencyFormatter.format(price);
  }

  function getProductById(productId) {
    return products.find((item) => item.id === productId);
  }

  function buildWhatsAppUrl(productName) {
    const message = encodeURIComponent(`${config.whatsappMessagePrefix} \"${productName}\" from Birgul.`);
    return `https://wa.me/${config.whatsappNumber}?text=${message}`;
  }

  function createWhatsAppButton(productName, label = 'Order on WhatsApp') {
    return `<a class=\"btn btn-whatsapp\" href=\"${buildWhatsAppUrl(productName)}\" target=\"_blank\" rel=\"noopener noreferrer\">${label}</a>`;
  }

  function productCardTemplate(product) {
    return `
      <article class="product-card fade-in">
        <a href="product.html?id=${product.id}" aria-label="View details for ${product.name}">
          <img src="${product.images[0]}" alt="${product.name} placeholder image">
        </a>
        <div class="product-card-content">
          <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
          <span class="price">${formatPrice(product.price)}</span>
          <p>${product.shortDescription}</p>
        </div>
      </article>
    `;
  }

  function renderProductGrid(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = items.map(productCardTemplate).join('');
  }

  function renderFeaturedProducts(containerId) {
    const featured = products.filter((product) => product.featured);
    renderProductGrid(containerId, featured);
  }

  function initMobileNav() {
    const toggle = document.querySelector('[data-nav-toggle]');
    const header = document.querySelector('.site-header');
    if (!toggle || !header) return;
    toggle.addEventListener('click', () => {
      const open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  function initFooterYear() {
    const node = document.querySelector('[data-year]');
    if (node) node.textContent = String(new Date().getFullYear());
  }

  window.BirgulUI = {
    products,
    formatPrice,
    getProductById,
    renderProductGrid,
    renderFeaturedProducts,
    createWhatsAppButton,
    initMobileNav,
    initFooterYear
  };
})();
