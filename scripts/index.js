// elemento
const elemento = document.querySelector("input[type='checkbox'] ");
const menuDesp = document.getElementById("closem");
// evento
elemento.addEventListener("click", openMenu);
//ejecucion
function openMenu(event) {
  menuDesp.classList.add("open-menu");
}
//elemento
const opcionCerrar = document.getElementById("closem");
// evento
opcionCerrar.addEventListener("click", closeMenu);
//ejecucion
function closeMenu(event) {
  menuDesp.classList.remove("open-menu");
  menuDesp.classList.add("close-menu");
  menuDesp.classList.remove("close-menu");
}
