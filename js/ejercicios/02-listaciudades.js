let ciudades = []; //array vacio
while (true) {  // ingresa nombres de ciudades hasta que el usuario cancele
  let entrada = prompt(
    "Ingresá el nombre de una ciudad (o presioná Cancelar para terminar):",
  );
  // Si el usuario presiona cancelar, el prompt devuelve null
  if (entrada === null) {
    break;
  }
  ciudades.push(entrada);
}
// 3. Mostrar el arreglo generado y su longitud
document.writeln(
  "<p>El arreglo de ciudades tiene " + ciudades.length + " elementos.</p>",
);
// Recordá: la posición 1 es el índice 0
document.writeln("<ul>");
document.writeln(
  "<li>Elemento 1ra posición: " + (ciudades[0] || "No existe") + "</li>", 
)
document.writeln(
  "<li>Elemento 3ra posición: " + (ciudades[2] || "No existe") + "</li>", 
);
document.writeln(  //length te devuelve la cantidad total de datos que se van guardando al ir ingresando
  "<li>Elemento última posición: " +
    (ciudades[ciudades.length - 1] || "No existe") +
    "</li>",
);
document.writeln("</ul>");

// Añadir "París" en la última posición
ciudades.push("París");  //agrega un elemento nuevo al final de un arreglo.

// Escribir el elemento que ocupa la segunda posición (índice 1)
document.writeln(
  "<p> Elemento en la segunda posición original: " +
    (ciudades[1] || "No existe") +
    "</p>",
);

//Sustituir la segunda posición por "Barcelona"
if (ciudades.length >= 2) {
  ciudades[1] = "Barcelona";
}

// Mostramos cómo quedó el arreglo final
document.writeln("<h2>Arreglo de Ciudades:</h2>");
document.writeln("<ul>");
for (let i = 0; i < ciudades.length; i++) {
  document.writeln("<li> Elemento:" + ciudades[i] + "</li>");
}
document.writeln("</ul>");
