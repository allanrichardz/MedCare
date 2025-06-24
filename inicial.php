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
    <title>Página Inicial - MedCare</title>
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
    <button><a href="consultar_agendamentos.php">Consultar agendamentos></a></button> <br>
    <button><a href="agendamento.php">Agendar especialista</a></button>
    <script src="js/script.js"></script>
</body>
</html>