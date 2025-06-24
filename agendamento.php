<?php
session_start();
if (!isset($_SESSION['usuario_id'])) {
    header("Location: login.php");
    exit;
}
?>



<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Agendamento de Consulta - MedCare</title>
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
  <h1>Agendamento de Consulta</h1>

  <a href="consultar_agendamentos.php">Visualizar Agendamentos</a><br><br>

  <form action="processar/processar_agendamento.php" method="post">
    <label for="especialidade">Especialidade:</label><br>
    <select id="especialidade" name="especialidade" required>
      <option value="">Selecione...</option>
      <option value="clinico_geral">Clínico Geral</option>
      <option value="endocrino">Endócrino</option>
      <option value="fisioterapia">Fisioterapia</option>
      <option value="cardiologia">Cardiologia</option>
      <option value="dermatologia">Dermatologia</option>
      <option value="pediatria">Pediatria</option>
      <option value="ortopedia">Ortopedia</option>
    </select><br><br>

    <label for="data">Data da Consulta:</label><br>
    <input type="date" id="data" name="data" required><br><br>

    <label for="hora">Horário:</label><br>
    <input type="time" id="hora" name="hora" required><br><br>

    <button type="submit">Agendar</button>
  </form>
  <script src="js/script.js"></script>
</body>
</html>
