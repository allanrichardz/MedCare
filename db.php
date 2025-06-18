<?php
// Define as variáveis de conexão com o banco de dados
$host = 'localhost';    // Endereço do servidor do banco de dados (geralmente 'localhost' em ambientes locais)
$user = 'root';         // Nome de usuário do banco de dados (padrão é 'root' no XAMPP)
$pass = '';             // Senha do banco de dados (em muitos casos está vazia no XAMPP)
$dbname = 'medcare';   // Nome do banco de dados que será utilizado

// Cria a conexão com o banco de dados usando mysqli
$conn = mysqli_connect($host, $user, $pass, $dbname);

// Verifica se a conexão falhou
if (!$conn) {
    // Exibe mensagem de erro e interrompe o script se a conexão não for bem-sucedida
    die('Erro ao conectar ao banco de dados: ' . mysqli_connect_error());
}
?>