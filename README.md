# Birgul Website

A static, responsive, multi-page website for **Birgul** (premium stitched formal women's clothing), built with:

- HTML
- CSS
- Vanilla JavaScript

## Pages

- `index.html` (Home)
- `collection.html` (Collection/Shop)
- `product.html` (Product detail structure)
- `about.html`
- `contact.html`

## Product & WhatsApp Configuration

- Product data is centralized in: `assets/js/products.js`
- WhatsApp number is centralized in: `assets/js/config.js`

Update these files to add real products and your official WhatsApp number.

## Run Locally

From repository root:

```bash
python3 -m http.server 8080
```

Then open:

- `http://localhost:8080/index.html`

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or your default branch), folder `/ (root)`
4. Save and wait for deployment.
5. Your site will be live at your GitHub Pages URL.
