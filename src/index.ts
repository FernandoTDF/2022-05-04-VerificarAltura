rotulo.innerHTML = "Indique la altura de la persona: ";
let alturaPermitida: number = 1.3;

let btnEvn = document.getElementById("boton");

btnEvn.addEventListener("click", () => {
  let alturaPersona: number = Number(dato.value);
  if (alturaPersona <= alturaPermitida) {
    console.log("La persona no puede subir al juego");
  } else {
    console.log("La persona puede subir al juego");
  }
});
