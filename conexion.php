<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "usuario";

$conexion = mysqli_connect($servername, $username, $password, $dbname);

if (!$conexion) {
    die("Error al conectar la base de datos: ".mysqli_connect_error());
}
?>