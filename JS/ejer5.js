function calcularConsumo() {
    let kilometros = parseFloat(document.getElementById("kilometros").value);
    let litros = parseFloat(document.getElementById("litros").value);

    if (isNaN(kilometros) || isNaN(litros) || kilometros <= 0 || litros <= 0) {
        document.getElementById("resultado").innerText = "Por favor, introduce valores válidos.";
    } else {
        let consumo = litros / kilometros;
        document.getElementById("resultado").innerText = "El consumo de combustible por kilómetro es: " + consumo.toFixed(2) + " L/km";
    }
}