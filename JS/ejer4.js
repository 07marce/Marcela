function calcularMedia() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("resultado").innerText = "Por favor, introduce tres números válidos.";
    } else {
        let media = (num1 + num2 + num3) / 3;
        document.getElementById("resultado").innerText = "La media de los tres números es: " + media.toFixed(2);
    }
}