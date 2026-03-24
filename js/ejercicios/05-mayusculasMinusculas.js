function analizarTexto(cadena) {
  if (cadena === cadena.toUpperCase()) {
    // Caso 1: Buscamos las mayusculas
    return "La cadena está formada solo por MAYÚSCULAS.";
  } else if (cadena === cadena.toLowerCase()) {
    // Caso 2: Buscamos las minusculas
    return "La cadena está formada solo por minúsculas.";
  } else {
    return "La cadena es una mezcla de mayúsculas y minúsculas.";
  }
}
// Ingreso del texto
let textoUsuario = prompt("Ingresá una frase para analizar:");

// Ejecutamos la función y mostramos el resultado
if (textoUsuario) {
  // Validamos que no esté vacío
  let resultado = analizarTexto(textoUsuario);
  document.writeln("<h2>Resultado del análisis:</h2>");
  document.writeln(
    "<p>Texto ingresado: <strong>" + textoUsuario + "</strong></p>",
  );
  document.writeln("<p>" + resultado + "</p>");
} else {
  document.writeln("<p>No ingresaste ningún texto.</p>");
}

