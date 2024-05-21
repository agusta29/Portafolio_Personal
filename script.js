const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.querySelector(".desktop-menu");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("show-menu");
});
