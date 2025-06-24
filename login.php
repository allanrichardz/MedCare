
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Login - MedCare</h1>

    <?php if (isset($erro)) echo "<p style='color:red;'>$erro</p>"; ?>

    <form action="processar/processar_login.php" method="post">
        <label for="email">Email:</label><br>
        <input type="text" name="email" id="email" required><br><br>

        <label for="senha">Senha:</label><br>
        <input type="password" name="senha" id="senha" required><br><br>

        <input type="submit" value="Entrar">
    </form>
    <script src="js/script.js"></script>
</body>
</html>