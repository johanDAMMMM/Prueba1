function Registro(){
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("contenedor-registro");
        const message = document.getElementById("message");
        
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const nombre = document.getElementById("nombre").value;
            const apellido = document.getElementById("apellido").value;
            const cedula = document.getElementById("cedula").value;
            const telefono = document.getElementById("telefono").value;
            const usuario = document.getElementById("usuario").value;
            const contraseña = document.getElementById("contraseña").value;
            const confirmcontraseña = document.getElementById("email").value;
            const rol = document.getElementById("rol").value;
            
        if (contraseña === contraseña) {
            message.textContent = "Registro exitoso!";
            message.style.color = "green";

        }else{
            message.textContent = "Las contraseñas no coinciden.";
            message.style.color = "red";
        }
    });
});

xhr.onerror = function() {
    console.error("Error en la solicitud AJAX");
}

xhr.open("GET", "ruta/a/tu/conexion.php", true)

}
