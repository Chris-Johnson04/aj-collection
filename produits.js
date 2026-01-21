// ===== FILTRE =====
function filter(category) {
  const products = document.querySelectorAll(".product-card");
  products.forEach(p => {
    if (category === "all" || p.classList.contains(category)) {
      p.style.display = "flex";
    } else {
      p.style.display = "none";
    }
  });
}

// ===== PANIER =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Article ajouté au panier");
}

// ===== PAIEMENT DIRECT =====
function payNow(name, price) {
  alert(`Paiement simulé\n\nProduit : ${name}\nPrix : ${price} XAF`);
}

// OUVRIR IMAGE
document.querySelectorAll('.product-image img').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').style.display = 'flex';
  });
});

// FERMER
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
