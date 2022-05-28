console.log("Hola mundo");
// elemento

const elemento = document.querySelector("input[type='checkbox'] ");
const menuDesp = document.getElementById("closem");
// evento
elemento.addEventListener("click", openMenu);

//ejecucion
function openMenu(event) {
  console.log(menuDesp);
  console.log("Abrir menu");
  menuDesp.classList.add("open-menu");
}

//elemento
//const cerrarOption = document.getElementsByClassName("opcion_menu")[0];
const prueba = document.getElementById("closem");

// evento
//cerrarOption.addEventListener("click", closeMenu);
prueba.addEventListener("click", closeMenu);

//ejecucion
function closeMenu(event) {
  console.log("cerrar");
  console.log(event);
  menuDesp.classList.remove("open-menu");
  menuDesp.classList.add("close-menu");
  menuDesp.classList.remove("close-menu");
}
