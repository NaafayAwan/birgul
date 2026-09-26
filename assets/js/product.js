document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = BirgulUI.getProductById(productId);
  const container = document.getElementById('product-detail-root');

  if (!container) return;

  if (!product) {
    container.innerHTML = '<p>Product not found. Please return to the collection page.</p>';
    BirgulUI.renderInstagramLinks();
    BirgulUI.initMobileNav();
    BirgulUI.initFooterYear();
    return;
  }

  container.innerHTML = `
    <section class="product-detail">
      <div>
        <figure class="gallery-main">
          <img id="main-product-image" src="${product.images[0]}" alt="${product.name} placeholder image">
        </figure>
        <div class="gallery-thumbs" id="product-thumbs">
          ${product.images
            .map(
              (image, index) =>
                `<button type="button" data-image="${image}" aria-label="Show image ${index + 1} for ${product.name}"><img src="${image}" alt="${product.name} placeholder thumbnail ${index + 1}"></button>`
            )
            .join('')}
        </div>
      </div>
      <article class="product-meta">
        <h1>${product.name}</h1>
        <span class="price">${BirgulUI.formatPrice(product.price)}</span>
        <p class="description">${product.description}</p>
        <ul class="meta-list">
          <li><strong>Available Sizes:</strong> ${product.sizes.join(', ')}</li>
          ${product.color ? `<li><strong>Color:</strong> ${product.color}</li>` : ''}
        </ul>
        ${BirgulUI.createWhatsAppButton(product.name)}
      </article>
    </section>
  `;

  const mainImage = document.getElementById('main-product-image');
  const thumbs = document.getElementById('product-thumbs');
  if (mainImage && thumbs) {
    thumbs.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-image]');
      if (!button) return;
      mainImage.src = button.dataset.image;
    });
  }

  BirgulUI.renderInstagramLinks();
  BirgulUI.initMobileNav();
  BirgulUI.initFooterYear();
});
