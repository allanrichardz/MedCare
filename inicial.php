<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Agendamento de Consulta - MedCare</title>
</head>
<body>
  <h1>Agendamento de Consulta</h1>

  <form action="#" method="post">
    <label for="especialidade">Especialidade:</label><br>
    <select id="especialidade" name="especialidade" required>
      <option value="">Selecione...</option>
      <option value="clinico">Clínico Geral</option>
      <option value="clinico">Endócrino</option>
      <option value="clinico">Fisioteria</option>
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
</body>
</html>
