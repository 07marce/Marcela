function convertirTiempo() {
    let horas = parseInt(document.getElementById("horas").value);
    let minutos = parseInt(document.getElementById("minutos").value);

    if (isNaN(horas) || isNaN(minutos) || horas < 0 || minutos < 0) {
        document.getElementById("resultado").innerText = "Por favor, introduce valores válidos.";
    } else {
        let segundos = (horas * 60 * 60) + (minutos * 60);
        document.getElementById("resultado").innerText = "El tiempo en segundos es: " + segundos + " s";
    }
}