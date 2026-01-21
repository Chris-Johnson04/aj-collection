const cart = JSON.parse(localStorage.getItem("aj_cart")) || [];
const amountEl = document.getElementById("amount");

let total = 0;
cart.forEach(item => {
  total += item.price * item.quantity;
});

amountEl.textContent = total.toLocaleString();

function pay(method) {
  alert(`Paiement par ${method} confirmé ✔`);
  localStorage.removeItem("aj_cart");
  window.location.href = "index.html";
}
