// Seleccionamos los elementos del DOM
const input = document.getElementById("inputText");
const button = document.getElementById("buttonText");

// Guardo el dato en localStorage
button.addEventListener("click", () => {
    const value = input.value.trim(); 
    if (value) {
        localStorage.setItem("datoUsuario", value); // Guardamos en localStorage
        input.value = ""; 
    }
});
