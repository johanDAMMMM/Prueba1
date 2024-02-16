<?php

    include "conexion.php";

    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $idNumero = $_POST["idNumero"];
    $celular = $_POST["celular"];
    $usuario = $_POST["usuario"];
    $contraseña = $_POST["contraseña"];
    $email = $_POST["email"];
    $rol = $_POST["rol"];

    $query = "INSERT INTO usuario(nombre, apellido, idNumero, celular, usuario, contraseña, email, rol)
              VALUES($nombre, $apellido, $idNumero, $celular, $usuario, $contraseña, $email, $rol )";

    $ejecutar = mysql_query($conexion);

    if($ejecutar){
        echo "Usuario guardado correctamente";
    }else{
        echo"!ERROR¡ Usuario guardado incorrectamente";
    }
?>