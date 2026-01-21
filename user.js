const userArea = document.getElementById("user-area");
const user = JSON.parse(localStorage.getItem("loggedUser"));

if (user) {
  userArea.innerHTML = `
    <span>👋 ${user.name}</span>
    <button onclick="logout()">Déconnexion</button>
  `;
}

function logout() {
  localStorage.removeItem("loggedUser");
  location.href = "login.html";
}
