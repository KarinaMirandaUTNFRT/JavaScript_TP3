function analizarTexto(cadena) {
  if (cadena === cadena.toUpperCase()) {
    // Caso 1: Buscamos si tiene todas mayusculas
    return "La cadena está formada solo por MAYÚSCULAS.";
  } else if (cadena === cadena.toLowerCase()) {
    // Caso 2: Buscamos si tiene todas minusculas
    return "La cadena está formada solo por minúsculas.";
  } else {
    return "La cadena es una mezcla de mayúsculas y minúsculas.";
  }
}
 let textoUsuario = prompt("Ingresá una frase para analizar:");
if (textoUsuario) {
  // Validamos que no esté vacío
  let resultado = analizarTexto(textoUsuario);
  document.writeln("<h2>Resultado del análisis:</h2>");
  document.writeln(
    "<p>Texto ingresado:" + textoUsuario + "</p>",
  );
  document.writeln("<p>" + resultado + "</p>");
} else {
  document.writeln("<p>No ingresaste ningún texto.</p>");
}

