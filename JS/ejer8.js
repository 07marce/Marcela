function calcular() {
    let personas = parseInt(document.getElementById("personas").value);
    
    if (personas <= 0 || isNaN(personas)) {
        document.getElementById("resultado").innerText = "Por favor, ingresa un número válido de personas.";
        return;
    }

    let papa = personas * 200; // 200g de papa por persona
    let huevos = (papa / 1000) * 5; // 5 huevos por cada kilo de papa
    let cebolla = (papa / 1000) * 300; // 300g de cebolla por cada kilo de papa

    document.getElementById("resultado").innerText = 
        `Para ${personas} personas necesitas: 
        ${papa}g de papa, 
        ${Math.ceil(huevos)} huevos, 
        ${Math.ceil(cebolla)}g de cebolla.`;
}