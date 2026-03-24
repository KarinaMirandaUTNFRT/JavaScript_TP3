// 1. Array para guardar cada una de las 50 sumas (el historial)
let historialSumas = [];

// 2. Array de contadores (lo que ya teníamos)
let apariciones = new Array(13).fill(0);

// 3. Realizamos los 50 lanzamientos
for (let i = 0; i < 50; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;

    // Guardamos la suma en el historial
    historialSumas.push(suma);
    
    // Contamos la aparición
    apariciones[suma]++;
}

// 4. MOSTRAR LOS 50 LANZAMIENTOS (Antes del conteo)
document.writeln("<h2> 50 lanzamientos aleatorios:</h2>");
document.writeln("<p>" + historialSumas.join(" - ") + "</p>"); 



// 5. MOSTRAR EL CONTEO FINAL
document.writeln("<h2>Frecuencia de las sumas:</h2>");
document.writeln("<ul>");
for (let j = 2; j <= 12; j++) {
    document.writeln("<li>La suma " + j + " salió " + apariciones[j] + " veces.</li>");
}
document.writeln("</ul>");