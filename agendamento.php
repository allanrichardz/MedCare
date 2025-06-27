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
    <title>Agendar Consulta - MedCare</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="imagens/logo_azul.png" type="image/png">
</head>
<body>
<?php include 'navbar.php'; ?>
<h1>Agendar Consulta</h1>
<form action="processar/processar_agendamento.php" method="post">
    <label for="especialidade">Especialidade:</label>
    <select id="especialidade" name="especialidade" required>
        <option value="">Selecione...</option>
        <option value="Clínico">Clínico Geral</option>
        <option value="Endócrino">Endocrinologia</option>
        <option value="Fisioterapia">Fisioterapia</option>
        <option value="Cardiologia">Cardiologia</option>
        <option value="Dermatologia">Dermatologia</option>
        <option value="Pediatria">Pediatria</option>
        <option value="Ortopedia">Ortopedia</option>
    </select>

    <label for="data">Data:</label>
    <input type="date" id="data" name="data" required>

    <label for="hora">Horário:</label>
    <input type="time" id="hora" name="hora" required>

    <input type="submit" value="Agendar">
</form>
<script src="js/script.js"></script>
</body>
</html>