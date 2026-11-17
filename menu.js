// Menu burger (mobile) commun à toutes les pages
const burgerButton = document.getElementById("burgerButton");
const navLinks = document.getElementById("navLinks");

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  burgerButton.setAttribute("aria-expanded", String(open));
  burgerButton.textContent = open ? "✕" : "☰";
  burgerButton.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
}

burgerButton.addEventListener("click", (e) => {
  e.stopPropagation();
  setMenu(!navLinks.classList.contains("open"));
});

// Ferme le menu au clic ailleurs ou avec la touche Échap
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-links")) setMenu(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});
