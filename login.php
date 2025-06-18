<?php
session_start(); // Inicia a sessão para poder usar variáveis de sessão (como $_SESSION['logado'])

include 'db.php'; // Inclui o arquivo de conexão com o banco de dados


if ($_SERVER['REQUEST_METHOD'] === 'POST') { // Verifica se o formulário foi enviado usando o método POST

    // Protege contra SQL Injection escapando os dados digitados no formulário
    // A função mysqli_real_escape_string() escapa caracteres especiais como aspas simples ' e duplas ", impedindo que o SQL seja corrompido ou modificado.
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $senha = mysqli_real_escape_string($conn, $_POST['senha']);

    
    $sql = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND senha = '$senha'"; // Monta a consulta SQL para verificar se existe um usuário com esse nome e senha

   
    $result = mysqli_query($conn, $sql);  // Executa a consulta no banco de dados

   
    if (mysqli_num_rows($result) == 1) {  // Verifica se foi encontrado exatamente um usuário com os dados informados
    
        $_SESSION['logado'] = true;  // Login bem-sucedido: define uma variável de sessão indicando que o usuário está logado

     
        header("Location: index.php");  // Redireciona para a página principal (index.php)

        // Encerra a execução do script após o redirecionamento
        exit;
    } else {
        // Caso não encontre usuário, define uma mensagem de erro
        $erro = "Usuário ou senha incorretos.";
    }
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
    <h1>Login - MedCare</h1>

    <!-- Exibe a mensagem de erro, se houver -->
    <?php if (isset($erro)) echo "<p style='color:red;'>$erro</p>"; ?>

    <!-- Formulário de login -->
    <form method="post">
        <label for="usuario">Email:</label><br>
        <input type="text" name="usuario" id="usuario" required><br><br>

        <label for="senha">Senha:</label><br>
        <input type="password" name="senha" id="senha" required><br><br>

        <input type="submit" value="Entrar">
    </form>
</body>
</html>