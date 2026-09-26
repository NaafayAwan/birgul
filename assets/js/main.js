document.addEventListener('DOMContentLoaded', function () {
  BirgulUI.renderFeaturedProducts('featured-products');
  document.querySelectorAll('[data-whatsapp-product]').forEach((node) => {
    const product = node.getAttribute('data-whatsapp-product');
    const label = node.getAttribute('data-whatsapp-label') || 'Order on WhatsApp';
    const button = document.createElement('a');
    button.className = 'btn btn-whatsapp';
    button.href = BirgulUI.buildWhatsAppUrl(product);
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.textContent = label;
    node.replaceChildren(button);
  });
  BirgulUI.initMobileNav();
  BirgulUI.initFooterYear();
});
