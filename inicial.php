<?php
session_start();
if (!isset($_SESSION['usuario_id'])) {
    header("Location: login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>MedCare - Página Inicial</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="imagens/logo_azul.png" type="image/png">
</head>
<body>
<?php include 'navbar.php'; ?>
<h1>Bem-vindo ao MedCare</h1>
<div class="home-buttons">
    <button onclick="window.location.href='agendamento.php'">Agendar Consulta</button>
    <button onclick="window.location.href='consultar_agendamentos.php'">Meus Agendamentos</button>
    <br>
    <a href="https://sabin.com.br/"><img src="imagens/sabin.png"></a>
</div>
<script src="js/script.js"></script>
</body>
</html>