console.log("Hola mundo");
// elemento

const elemento = document.getElementsByClassName("opcion_menu");

// evento
const evento = document.addEventListener("click", function (e) {
  console.log(e.target);
  document.body.classList.add("close-menu");
});
