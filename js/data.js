// Seleccionamos el span donde se mostrará el dato
const dataSpan = document.getElementById("data");

// Obtenemos el valor del localStorage
const datoGuardado = localStorage.getItem("datoUsuario");

// Mostramos el valor en la página
if (datoGuardado !== null) {
    dataSpan.textContent = datoGuardado;
} else {
    dataSpan.textContent = "No hay dato guardado";
}
