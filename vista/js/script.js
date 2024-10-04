function validarDatos(){
    let correo = document.getElementById("correo")
    let direccion = document.getElementById("direccion")
    let nombre = document.getElementById("nombre")
    let apellido = document.getElementById("apellido")
    let numero = document.getElementById("numero")
    let clave = document.getElementById("contrasena")
    let clave2 = document.getElementById("contrasena2")
    let datosAdicionales= document.getElementById("adicionales")

    if (!correo.value) {
        alert("ingresar correo");
        return false;
    }

    if (!direccion.value) {
        alert("ingresar dirección");
        return false;
    }

    if (!nombre.value) {
        alert("ingresar apellido");
        return false;
    }

    if (!apellido.value) {
        alert("ingresar apellido");
        return false;
    }

    if (!datosAdicionales.value) {
        alert("ingresar apellido");
        return false;
    }

    if (!numero.value || numero.value.length !== 10) {
        alert("ingresar numero y sus 10 digitos");
        return false;
    }

    if (!clave.value) {
        alert("ingresar contraseña");
        return false;
    }

    if (clave.value.length < 6 ) {
        alert("contraseña demasiado corta");
        return false;
    }

    if (clave.value !== clave2.value ) {
        alert("contraseñas diferentes");
        return false;
    }

    alert("bienvenido a higglers");
    return true;

}