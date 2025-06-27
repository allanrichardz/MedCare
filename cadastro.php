<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Cadastro - MedCare</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="imagens/logo_azul.png" type="image/png">
</head>
<body>
<h1>Cadastro - MedCare</h1>
<form action="processar/processar_cadastro.php" method="post">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="senha">Senha:</label>
    <input type="password" id="senha" name="senha" required>

    <input type="submit" value="Cadastrar">
</form>
<script src="js/script.js"></script>
</body>
</html>