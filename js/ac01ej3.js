/* 
 * Descripción: Función que genera y muestra N números primos menores que 110.
 * Desarrollador: Jose Carlos Peña 
 * Fecha: 2024-04-21
 * Cambios: Ninguno
 */

// Función para verificar si un número es primo
function esPrimo(numero) {
    // Iterar desde 2 hasta la raíz cuadrada del número
    for (let i = 2, raizCuadrada = Math.sqrt(numero); i <= raizCuadrada; i++) {
        // Si el número es divisible entre algún número dentro de este rango, no es primo
        if (numero % i === 0) {
            return false;
        }
    }
    // Si no se encontró ningún divisor dentro del rango, el número es primo
    return numero > 1;
}

// Función para generar números primos menores que 110
function generarPrimos(cantidad) {
    // Array para almacenar los números primos generados
    const numerosPrimos = [];
    let numero = 2; // Comenzar desde el primer número primo
    // Generar números primos hasta alcanzar la cantidad deseada o el límite de 110
    while (numerosPrimos.length < cantidad && numero < 110) {
        // Si el número actual es primo, agregarlo al array de números primos
        if (esPrimo(numero)) {
            numerosPrimos.push(numero);
        }
        // Pasar al siguiente número
        numero++;
    }
    return numerosPrimos; // Devolver los números primos generados
}

// Función principal
function imprimirNumerosPrimos() {
    // Solicitar al usuario la cantidad de números primos a generar
    const cantidad = parseInt(prompt("Ingrese la cantidad de números primos que desea generar:"));
    // Verificar si la cantidad ingresada es válida
    if (isNaN(cantidad) || cantidad <= 0) {
        console.log("La cantidad ingresada no es válida.");
        return;
    }
    
    // Generar y almacenar los números primos
    const numerosPrimos = generarPrimos(cantidad);
    
    // Mostrar los números primos generados
    console.log(`Los ${cantidad} números primos menores que 110 son:`);
    console.log(numerosPrimos.join(", ")); // Mostrar los números primos separados por comas
}

// Llamar a la función principal para ejecutar el programa
imprimirNumerosPrimos();
