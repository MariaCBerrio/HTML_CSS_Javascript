//*Modificar** el primer "¡Hola Mundo!" para que diga "Adiós"
const primero = document.querySelector("#rojo");
primero.textContent = "Adiós mundo";

//**Cambiar** el color de fuente de un encabezado a naranja
const naranja = document.querySelector("#naranja");
naranja.style.color = "orange";

//**Añadir** un encabezado en el que se pueda hacer clic y que cambie el color de fuente a marrón
const clicable = document.querySelector("#clicable");
clicable.addEventListener("click", function() {
    clicable.style.color = "brown";
});
