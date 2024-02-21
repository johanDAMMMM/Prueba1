<?php
    include "conexion.php";
    
    $correo = $_POST["Correo"];
    $contraseña = $_POST["Contraseña"];


    $sql = "SELECT * FROM usuario WHERE correo = $correo AND contraseña = $contraseña";
    $resultado = mysqli_query($conexion, $sql);

    if (mysqli_num_rows($resultado) === 1) {
        session_start();
        $_SESSION["usuario_id"] = mysqli_fetch_assoc($resultado)["id_usuario"];
        header("Location: inicio.html");
    } else{
        echo "<p>Correo o contraseña incorrecta.</p>";
    }
?>