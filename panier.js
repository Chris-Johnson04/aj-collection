/* ===== CHARGEMENT PANIER ===== */
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cart-items");
const totalEl = document.getElementById("total");
let total = 0;

if (cart.length === 0) {
  container.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cart.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.name} — ${item.price} XAF`;
    container.appendChild(div);
    total += item.price;
  });
}

totalEl.textContent = "Total : " + total + " XAF";

/* ===== ACTIONS ===== */
function payAll() {
  if (cart.length === 0) {
    alert("The cart is empty.");
    return;
  }

  alert("Simulated payment\n\nTotal : " + total + " XAF");
  localStorage.removeItem("cart");
  location.reload();
}

function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}

function orderWhatsApp() {
  if (cart.length === 0) {
    alert("The cart is empty.");
    return;
  }

  let message = "Hello, I would like to order :%0A";
  cart.forEach(item => {
    message += `- ${item.name} (${item.price} XAF)%0A`;
  });
  message += `%0ATotal : ${total} XAF`;

  const phone = "242064557344";
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, "_blank");
}


