<?php
    $conexion = mysqli_connect("loaclhost", "root", "", "usuario");

    if (!$conexion) {
        die("Error al conectar la base de datos: ".mysqli_connect_error());
    }

    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $correo = $_POST["correo"];
    $contraseña = $_POST["contraseña"];
    
    $nombre = mysqli_real_escape_string($conexion, $nombre);
    $apellido = mysqli_real_escape_string($conexion, $apellido);
    $correo = mysqli_real_escape_string($conexion, $correo);
    $contraseña = mysqli_real_escape_string($conexion, $contraseña);
    

    $sql = "INSERT INTO usuario (nombre, apellido, correo, contraseña) VALUES ($nombre, $apellido, $correo, $contraseña)";
    $resultado = mysqli_query($conexion, $sql);

    if ($resultado) {
        echo "<p>Usuario registrado correctamente.</p>";
    } else{
        echo "<p>Error al registrar al usuario.</p>". mysqli_error($conexion) ."</p>";
    }

    mysqli_close($conexion);
?>