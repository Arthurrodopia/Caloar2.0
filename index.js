// Seleciona o botão e o menu
const menuToggle = document.createElement("button");
menuToggle.id = "menu-toggle";
menuToggle.innerText = "☰";

const menu = document.querySelector(".menu");
menu.appendChild(menuToggle);

const navMenu = document.querySelector("nav");

// Adiciona um evento de clique para abrir/fechar o menu no celular
menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});
