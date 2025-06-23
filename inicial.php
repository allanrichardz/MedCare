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
</head>
<body>
    <div> <!-- NAVBAR -->
        <table>
            <tr>
                <td>
                    <img src="imagens/logo.png" alt="MedCare">
                </td>
                <td>
                    <p href="wa.me/61982654316">
                        Contato-nos!
                    </p>
                </td>
                <td>
                    <h2>Olá, !</h2>
                </td>
            </tr>
        </table>
    </div>
    <a href= "consultar_agendamento.php"> Consultar agendamentos</a>
    <a href= "agendamento.php"> Agendar especialista</a>
</body>
</html>