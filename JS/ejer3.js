// script.js
function saludar() {
    let nombre = prompt("Escribe tu nombre:");
    if (nombre) {
        document.getElementById("mensaje").innerText = `Hola, ${nombre}!`;
    } else {
        document.getElementById("mensaje").innerText = "Hola, desconocido!";
    }
}