document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contenedor-registro");
    const message = document.getElementById("message");
})

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
            const apellido = document.getElementById("apellido").value;
            const usuario = document.getElementById("usuario").value;
            const contraseña = document.getElementById("contraseña").value;
            const confirmcontraseña = document.getElementById("correo").value;
})

const formData = new FormData();
formData.append("nombre", nombre);
formData.append("apellido", apellido);
formData.append("usuario", usuario);
formData.append("contraseña", contraseña);
formData.append("correo", correo);

fetch("ruta/a/tu/Registro.php", {
    method: "POST",
    body: formData
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        message.textContent = "Registro exitoso!"
    } else{
        message.textContent = "Error en el registro: "+data.message;
    }
})
.catch(error => {
    console.error("Error en la solicitud AJAX", error)
})
