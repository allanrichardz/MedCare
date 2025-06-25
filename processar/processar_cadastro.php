<?php
include 'db.php';

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];

$sql = "INSERT INTO usuarios (
    nome, email, senha
)
VALUES (
    '$nome', '$email', '$senha'
)";

if (mysqli_query($conn, $sql)) {
    header('Location: ../login.php');
} else {
    echo "Erro ao cadastrar: " . mysqli_error($conn);
}
?>