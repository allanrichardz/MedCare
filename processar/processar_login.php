<?php
session_start();

$conn = mysqli_connect("localhost", "root", "", "medcare");
if (!$conn) {
    die("Erro de conexão: " . mysqli_connect_error());
}

$erro = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $senha = mysqli_real_escape_string($conn, $_POST['senha']);

    $sql = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) === 1) {
        $usuario = mysqli_fetch_assoc($result);
        $_SESSION['usuario_id'] = $usuario['id']; // SALVA O ID REAL DO USUÁRIO
        $_SESSION['usuario_nome'] = $usuario['nome'];
        header("Location: ../inicial.php");
        exit;
    } else {
        $erro = "Email ou senha incorretos.";
    }
}

mysqli_close($conn);
?>