// 1. Definimos la función con un parámetro (cadena)
function analizarTexto(cadena) {
    // Caso 1: Comparamos la cadena original con su versión en MAYÚSCULAS
    if (cadena === cadena.toUpperCase()) {
        return "La cadena está formada solo por MAYÚSCULAS.";
    } 
    // Caso 2: Comparamos la cadena original con su versión en minúsculas
    else if (cadena === cadena.toLowerCase()) {
        return "La cadena está formada solo por minúsculas.";
    } 
    // Caso 3: Si no es ninguna de las anteriores, es mezcla
    else {
        return "La cadena es una mezcla de mayúsculas y minúsculas.";
    }
}

// 2. Pedimos el texto al usuario
let textoUsuario = prompt("Ingresá una frase para analizar:");

// 3. Ejecutamos la función y mostramos el resultado
if (textoUsuario) { // Validamos que no esté vacío
    let resultado = analizarTexto(textoUsuario);
    document.writeln("<h2>Resultado del análisis:</h2>");
    document.writeln("<p>Texto ingresado: <strong>" + textoUsuario + "</strong></p>");
    document.writeln("<p>" + resultado + "</p>");
} else {
    document.writeln("<p>No ingresaste ningún texto.</p>");
}