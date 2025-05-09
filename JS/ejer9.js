function intercambiar() {
    let var1 = parseInt(document.getElementById("var1").value);
    let var2 = parseInt(document.getElementById("var2").value);

    if (isNaN(var1) || isNaN(var2)) {
        document.getElementById("resultado").innerText = "Por favor, ingresa valores numéricos.";
        return;
    }

    // Intercambio usando una variable temporal
    let temp = var1;
    var1 = var2;
    var2 = temp;

    document.getElementById("resultado").innerText = `Nuevo valor de la primera variable: ${var1}, Nuevo valor de la segunda variable: ${var2}`;
}