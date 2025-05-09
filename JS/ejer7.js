function calcular() {
    let numero = parseInt(document.getElementById("numero").value);
    
    if (numero < 10 || numero > 99) {
        document.getElementById("resultado").innerText = "Por favor, ingresa un número de dos dígitos.";
        return;
    }

    let decenas = Math.floor(numero / 10);
    let unidades = numero % 10;

    document.getElementById("resultado").innerText = `Decenas: ${decenas} | Unidades: ${unidades}`;
}