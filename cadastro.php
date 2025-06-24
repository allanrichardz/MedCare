<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Cadastro de Usuário - MedCare</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>Cadastro de Usuário</h1>

  <form action="processar/processar_cadastro.php" method="post">
    <label for="nome">Nome:</label><br>
    <input type="text" id="nome" name="nome" required><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <label for="senha">Senha:</label><br>
    <input type="password" id="senha" name="senha" required><br><br>

    <button type="submit">Cadastrar</button>
  </form>
  <script src="js/script.js"></script>
</body>
</html>
