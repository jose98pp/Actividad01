/* 
 * Descripción: Función que solicita un usuario y contraseña y valida los datos.
 * Desarrollador: Jose Carlos Peña 
 * Fecha: 2024-04-21
 * Cambios: Ninguno
 */
function validarUsuarioContraseña() {
    // Solicitar al usuario que ingrese su nombre de usuario
    let usuario = prompt("Ingrese su usuario:");
    // Solicitar al usuario que ingrese su contraseña
    let contraseña = prompt("Ingrese su contraseña:");
    // Nombres de usuarios válidos
    let nombresValidos = ["juan", "pedro", "maria", "raul"];
    // Contraseña válida
    let contraseñaValida = "D153n0W3b2";

    // Verificar si el nombre de usuario está en la lista de nombres válidos y si la contraseña es correcta
    if (nombresValidos.includes(usuario.toLowerCase()) && contraseña === contraseñaValida) {
        // Si las credenciales son válidas, mostrar mensaje de acceso concedido
        console.log("Acceso concedido");
    } else {
        // Si las credenciales son inválidas, mostrar mensaje de acceso denegado
        console.log("Acceso denegado");
    }
}

// Llamar a la función de validación de usuario y contraseña
validarUsuarioContraseña();
