<?php
$host = 'localhost';    
$user = 'root';         
$pass = '';             
$dbname = 'medcare';  

$conn = mysqli_connect($host, $user, $pass, $dbname);

if (!$conn) {
    die('Erro ao conectar ao banco de dados: ' . mysqli_connect_error());
}
?>