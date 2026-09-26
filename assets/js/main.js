document.addEventListener('DOMContentLoaded', function () {
  BirgulUI.renderFeaturedProducts('featured-products');
  document.querySelectorAll('[data-whatsapp-product]').forEach((node) => {
    const product = node.getAttribute('data-whatsapp-product');
    const label = node.getAttribute('data-whatsapp-label') || 'Order on WhatsApp';
    node.innerHTML = BirgulUI.createWhatsAppButton(product, label);
  });
  BirgulUI.initMobileNav();
  BirgulUI.initFooterYear();
});
