<?php
session_start();

if (!isset($_SESSION['usuario_id'])) {
    die("Usuário não autenticado.");
}

$usuario_id    = $_SESSION['usuario_id'];
$especialidade = $_POST['especialidade'];
$data          = $_POST['data'];
$hora          = $_POST['hora'];

$conn = mysqli_connect("localhost", "root", "", "medcare");
if (!$conn) {
    die("Erro de conexão: " . mysqli_connect_error());
}

$especialidade = mysqli_real_escape_string($conn, $especialidade);
$data          = mysqli_real_escape_string($conn, $data);
$hora          = mysqli_real_escape_string($conn, $hora);

$sql = "INSERT INTO agendamentos (usuario_id, especialidade, data, hora)
        VALUES ('$usuario_id', '$especialidade', '$data', '$hora')";

if (mysqli_query($conn, $sql)) {
    echo "Agendamento realizado com sucesso!";
    header('Location: ../consultar_agendamentos.php');
} else {
    echo "Erro ao agendar: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
