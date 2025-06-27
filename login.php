<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Login - MedCare</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="imagens/logo_azul.png" type="image/png">
</head>
<body>
    <h1>Login - MedCare</h1>

    <?php if (isset($erro)) : ?>
        <div class="alert alert-error fade-in">
            <?php echo htmlspecialchars($erro); ?>
        </div>
    <?php endif; ?>

    <form action="processar/processar_login.php" method="post">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" required>

        <label for="senha">Senha:</label>
        <input type="password" name="senha" id="senha" required>

        <input type="submit" value="Entrar">

        Ainda não tem seu acesso? <a href="cadastro.php"> Cadastre-se!</a>
    </form>

    <script src="js/script.js"></script>
</body>
</html>