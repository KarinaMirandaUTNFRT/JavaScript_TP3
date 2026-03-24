function paridad(numero) {
        if (numero % 2 === 0) { 
        return "El número " + numero + " es par.";
    } else {
        return "El número " + numero + " es impar.";
    }
}
let input = parseInt(prompt("Ingresá un número entero para saber si es par o impar:"));
let resultado = paridad(input); //Llamamos a la función y guardamos el resultado ingresado
document.writeln("<h2>Resultado de la Función:</h2>");
document.writeln("<p>" + resultado + "</p>");