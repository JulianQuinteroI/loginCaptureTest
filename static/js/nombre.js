

function validar_formulario() {
    let nombre = document.getElementById("name").value
    let usuario = document.getElementById("user").value
    let esFemenino = document.getElementById("F").checked
    let esMasculino = document.getElementById("M").checked
    let correo = document.getElementById("email").value
    let pass = document.getElementById("pass").value
    let datos = document.getElementById("datos").checked


    let sw = true

    if (usuario.length < 1) {
        alert("ey el usuario esta vacio")
        sw = false
    } else if (usuario.length < 8) {
        alert("ey el usuario no tiene los 8 caracteres")
        sw = false
    }


    if (correo.length < 1) {
        alert("ey el correo esta vacio")
        sw = false
    } else {
        if (correo.includes("@")) {
            let separador = correo.split("@")
            let usuario = separador[0]
            if (usuario.length < 1) {
                alert("ey el correo no tiene el usuario")
                sw = false
            } else {
                let nombreDominio = separador[1]
                if (nombreDominio.includes(".")) {
                    separador = nombreDominio.split(".")
                    let dominio = separador[0]
                    let extension = separador[1]
                    if (dominio.length < 1) {
                        alert("ey el correo no tiene dominio")
                        sw = false
                    }

                    if (extension.length < 1) {
                        alert("ey el correo no tiene extension")
                        sw = false
                    }
                } else {
                    alert("ey el correo no tiene el .")
                    sw = false
                }
            }
        } else {
            alert("ey el correo no tiene el @")
            sw = false
        }
    }

    if (pass.length < 1) {
        alert("ey la clave esta vacio")
        sw = false
    } else if (pass.length < 8) {
        alert("ey la clave no tiene los 8 caracteres")
        sw = false
    }
    
    return sw
}

let imgOjo = document.querySelector("section form div img")
imgOjo.addEventListener("mouseover", mostrarPassword)
imgOjo.addEventListener("mouseout", ocultarPassword)

function mostrarPassword() {
    let inputPass = document.querySelector("#pass")
    inputPass.type = "text"
}

function ocultarPassword() {
    let inputPass = document.querySelector("#pass")
    inputPass.type = "password"
}