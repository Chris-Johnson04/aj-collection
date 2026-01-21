function filterAccessories(type) {
  const items = document.querySelectorAll(".product-card");

  items.forEach(item => {
    if (type === "all" || item.classList.contains(type)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
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