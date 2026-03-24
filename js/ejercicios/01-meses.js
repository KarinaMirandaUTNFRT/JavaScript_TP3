// Creamos el array llamado 'meses' con los 12 meses del año
const meses = [
    "Enero", 
    "Febrero", 
    "Marzo", 
    "Abril", 
    "Mayo", 
    "Junio", 
    "Julio", 
    "Agosto", 
    "Septiembre", 
    "Octubre", 
    "Noviembre", 
    "Diciembre"
];
document.writeln("<h1>Lista de Meses</h1>");
document.writeln("<ul>"); // Empezamos una lista desordenada
// Usamos un bucle for para recorrer el arreglo
for (let i = 0; i < meses.length; i++) {
    document.writeln("<li>" + meses[i] + "</li>");
}
document.writeln("</ul>"); // Cerramos la lista