/* 
 * Descripción: Función que cuenta la cantidad de veces que aparece la letra "o" en una frase,
 *              las vocales que aparecen en la frase y la cantidad de veces que aparece cada vocal.
 * Desarrollador: Jose Carlos Peña 
 * Fecha: 2024-04-21
 * Cambios: Ninguno
 */

// Función para contar la cantidad de veces que aparece la letra "o" en una frase
function contarLetraO(frase) {
    return frase.toLowerCase().split('o').length - 1; // Convertir la frase a minúsculas y dividirla por 'o'
                                                     // Luego contar cuántas partes se crearon, menos 1
}

// Función para obtener un array con las vocales que aparecen en una frase
function obtenerVocales(frase) {
    return frase.match(/[aeiou]/gi) || []; // Buscar todas las vocales (mayúsculas y minúsculas) en la frase y devolverlas en un array
}

// Función para contar la cantidad de veces que aparece cada vocal en una frase
function contarVocalesIndividuales(frase) {
    const vocales = obtenerVocales(frase); // Obtener todas las vocales de la frase
    const contadorVocales = {}; // Objeto para almacenar el contador de cada vocal
    vocales.forEach(vocal => {
        contadorVocales[vocal] = (contadorVocales[vocal] || 0) + 1; // Incrementar el contador de la vocal correspondiente
    });
    return contadorVocales; // Devolver el objeto con la cantidad de veces que aparece cada vocal
}

// Función principal que solicita una frase al usuario y realiza las operaciones requeridas
function analizarFrase() {
    const frase = prompt("Ingrese una frase:"); // Solicitar al usuario que ingrese una frase
    if (frase) { // Verificar si se ingresó una frase
        const cantidadLetraO = contarLetraO(frase); // Contar la cantidad de veces que aparece la letra "o"
        console.log(`La letra "o" aparece ${cantidadLetraO} veces en la frase.`);
        
        const vocales = obtenerVocales(frase); // Obtener un array con las vocales que aparecen en la frase
        console.log(`Las vocales que aparecen en la frase son: ${vocales.join(", ")}.`);
        
        const contadorVocales = contarVocalesIndividuales(frase); // Contar la cantidad de veces que aparece cada vocal
        console.log("Cantidad de veces que aparece cada vocal:");
        for (const vocal in contadorVocales) {
            console.log(`${vocal}: ${contadorVocales[vocal]}`); // Mostrar cada vocal y su contador
        }
    } else { // Si no se ingresó una frase
        console.log("No se ingresó una frase.");
    }
}

// Llamar a la función principal para ejecutar el programa
analizarFrase();
