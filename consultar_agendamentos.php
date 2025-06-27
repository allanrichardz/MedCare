<?php
session_start();
if (!isset($_SESSION['usuario_id'])) {
    header("Location: login.php");
    exit;
}
require 'processar/db.php';
$usuario_id = $_SESSION['usuario_id'];
$sql = "SELECT * FROM agendamentos WHERE usuario_id = $usuario_id";
$resultado = mysqli_query($conn, $sql);
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Meus Agendamentos - MedCare</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="imagens/logo_azul.png" type="image/png">
</head>
<body>
<?php include 'navbar.php'; ?>
<h1>Meus Agendamentos</h1>
<?php
    if (mysqli_num_rows($resultado) > 0) {
        while ($agendamento = mysqli_fetch_assoc($resultado)) {
            // Formatação da data
            $data_formatada = date('d/m/Y', strtotime($agendamento['data']));
            // Formatação da hora
            $hora_formatada = date('H:i', strtotime($agendamento['hora']));
        
            echo "<div class='agendamento-item fade-in'>";
            echo "<strong>Especialidade:</strong> " . htmlspecialchars($agendamento['especialidade']) . "<br>";
            echo "<strong>Data:</strong> " . $data_formatada . "<br>";
            echo "<strong>Hora:</strong> " . $hora_formatada;
            echo "</div>";
        }    
    } else {
        echo "<p>Você ainda não possui agendamentos.</p>";
    }
?>
<script src="js/script.js"></script>
</body>
</html>