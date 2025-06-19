
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listar Agendamentos - MedCare</title>
</head>
<body>
    <a href="agendamento.php">Voltar</a><br>
    <?php
    session_start();

    if (!isset($_SESSION['usuario_id'])) {
        header("Location: login.php");
        exit;
    }
    ?>

    <?php
    $usuario_id = $_SESSION['usuario_id'];


    $sql = "SELECT * FROM agendamentos WHERE usuario_id = $usuario_id";
    $resultado = mysqli_query($conexao, $sql);


    if (mysqli_num_rows($resultado) > 0) {
        echo "<h1>Seus Agendamentos</h1>";
        while ($agendamento = mysqli_fetch_assoc($resultado)) {
            echo "<p><strong>Especialidade:</strong> " . htmlspecialchars($agendamento['especialidade']) . "<br>";
            echo "<strong>Data:</strong> " . $agendamento['data'] . "<br>";
            echo "<strong>Hora:</strong> " . $agendamento['hora'] . "</p><hr>";
        }
    } else {
        echo "<p>Você ainda não possui agendamentos.</p>";
    }
    ?>
</body>
</html>