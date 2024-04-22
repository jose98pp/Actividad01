/* 
 * Descripción: Función que da la bienvenida y muestra el navegador actual
 * Desarrollador: Jose Carlos Peña 
 * Fecha: 2024-04-21
 * Cambios: Ninguno
 */
function bienvenida() {
    // Detectar el navegador actual
    const navegador = detectarNavegador();
    // Mostrar mensaje de bienvenida en consola
    console.log("¡Bienvenido!");
    // Mostrar el navegador utilizado en consola
    console.log("Estás utilizando el navegador:", navegador);
}

// Función para detectar el navegador actual
function detectarNavegador() {
    // Obtener el agente de usuario del navegador
    const agenteUsuario = navigator.userAgent;
    // Verificar si el agente de usuario incluye la cadena "Chrome"
    if (agenteUsuario.includes("Chrome")) {
        return "Google Chrome";
    // Verificar si el agente de usuario incluye la cadena "Firefox"
    } else if (agenteUsuario.includes("Firefox")) {
        return "Mozilla Firefox";
    // Verificar si el agente de usuario incluye la cadena "Safari"
    } else if (agenteUsuario.includes("Safari")) {
        return "Safari";
    // Si no coincide con ninguno de los navegadores conocidos, devolver "Navegador desconocido"
    } else {
        return "Navegador desconocido";
    }
}

// Llamar a la función de bienvenida
bienvenida();
