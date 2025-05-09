function verificar() {
    let numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero)) {
        document.getElementById("resultado").innerText = "Por favor, ingresa un número válido.";
        return;
    }

    // Evaluación sin condicionales
    let esPar = !(numero % 2); // Devuelve true si es par, false si es impar

    document.getElementById("resultado").innerText = esPar;
}