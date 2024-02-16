<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "usuario";

$conexion = new mysqli($servername, $username, $password, $dbname);

if ($conexion->connect_error){
    die("Conexion fallida: ".$conexion->connect_error);
}

print_r($conexion);

echo json_encode($conexion);
?>