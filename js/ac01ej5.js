/* 
 * Descripción: Función que combina nombres y apellidos de forma aleatoria y los formatea.
 * Fecha: 2024-04-21
 * Cambios: Ninguno
 */

// Arrays de nombres y apellidos
let nombres = ["juan", "pedro", "maria", "raul", "carlos", "luis", "ana", "javier", "elena", "david"];
let apellidos = ["gomez", "rodriguez", "martinez", "lopez", "perez", "sanchez", "fernandez", "gonzalez", "diaz", "rojas"];

// Solicitar al usuario la cantidad de nombres completos a generar
let cantidadNombresCompletos = parseInt(prompt("Ingrese la cantidad de nombres completos a generar:"));

// Función para capitalizar la primera letra de una palabra y convertir el resto en minúsculas
function capitalizarPrimeraLetra(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
}

// Función para generar nombres completos aleatorios
function generarNombresCompletosAleatorios(cantidad) {
    let nombresCompletos = [];
    for (let i = 0; i < cantidad; i++) {
        let nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
        let apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
        let nombreFormateado = capitalizarPrimeraLetra(nombreAleatorio);
        let apellidoFormateado = capitalizarPrimeraLetra(apellidoAleatorio);
        let nombreCompleto = `${nombreFormateado} ${apellidoFormateado}`;
        nombresCompletos.push(nombreCompleto);
    }
    return nombresCompletos;
}

// Generar nombres completos aleatorios y mostrarlos por consola
let nombresCompletosGenerados = generarNombresCompletosAleatorios(cantidadNombresCompletos);
console.log(`Nombres completos generados (${nombresCompletosGenerados.length}):`);
console.log(nombresCompletosGenerados.join("\n"));
