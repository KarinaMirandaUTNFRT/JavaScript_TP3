function calcularPerimetro(ladoA, ladoB) {
    let perimetro = 2 * (ladoA + ladoB);
    return perimetro;
}
let base = parseFloat(prompt("Ingresá la base  del rectángulo:"));
let altura = parseFloat(prompt("Ingresá la altura  del rectángulo:"));

//Validamos que los datos ingresados sean números válidos
if (!isNaN(base) && !isNaN(altura)) {
    // Llamamos a la función
    let resultado = calcularPerimetro(base, altura);
    
    // Mostramos el resultado
    document.writeln("<h2>Cálculo del Perímetro</h2>");
    document.writeln("<p>Para un rectángulo de " + base + "x" + altura + ":</p>");
    document.writeln("<p>El perímetro es: " + resultado + "</p>");
} else {
    document.writeln("<p>Los valores ingresados no son validos</p>");
}