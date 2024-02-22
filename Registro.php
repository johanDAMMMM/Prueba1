<?php
    include "conexion.php";

    $conexion = mysqli_connect("localhost", "root", "", "usuario");

    if (!$conexion) {
        $response = array("success" => false, "message" => "Error en la conexion a la base de datos: ".mysqli_connect_error());
        echo json_encode($response);
        exit; 
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
        $response = array("success" => true, "message" => "Usuario registrado correctamente.");
        echo json_encode($response);
    } else{
        $response = array("success" => true, "message" => "Error al registrar el usuario: ".mysqli_error($conexion));
        echo json_encode($response);
    }

    mysqli_close($conexion);
?>