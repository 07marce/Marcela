// script.js
function calcular() {
    let lado = document.getElementById("lado").value;
    if (lado > 0) {
        let area = lado * lado;
        let perimetro = 4 * lado;
        document.getElementById("resultado").innerHTML = `Área: ${area} <br> Perímetro: ${perimetro}`;
    } else {
        document.getElementById("resultado").innerHTML = "Por favor ingrese un valor válido.";
    }
}