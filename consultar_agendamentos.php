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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listar Agendamentos - MedCare</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div> <!-- NAVBAR -->
        <table>
            <tr>
                <td>
                    <img src="imagens/logo.png" alt="MedCare" href="inicial.php">
                </td>
                <td>
                    <p>
                        <a href="https://wa.me/61982654316" target="_blank">Contato</a>
                    </p>
                </td>
                <td>
                    <p>
                        <a href="processar/logout.php">Sair</a>
                    </p>
                </td>
                <td>
                    <h2>Olá, <?php echo htmlspecialchars($_SESSION['usuario_nome']); ?>!</h2>
                </td>
            </tr>
        </table>
    </div>
    <a href="inicial.php">Voltar</a><br>


    <?php
    $usuario_id = $_SESSION['usuario_id'];

    $conn = mysqli_connect("localhost", "root", "", "medcare");
    if (!$conn) {
        die("Erro de conexão: " . mysqli_connect_error());
    }

    $sql = "SELECT * FROM agendamentos WHERE usuario_id = $usuario_id";
    $resultado = mysqli_query($conn, $sql);

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

    mysqli_close($conn);
    ?>
    <script src="js/script.js"></script>
</body>
</html>
