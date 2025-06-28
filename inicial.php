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
    <title>MedCare - Página Inicial</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/home-extra.css">
    <link rel="icon" href="imagens/logo_azul.png" type="image/png">
</head>
<body>
<?php include 'navbar.php'; ?>

<h1>Bem-vindo ao MedCare</h1>

<div class="home-buttons">
    <button onclick="window.location.href='agendamento.php'">Agendar Consulta</button>
    <button onclick="window.location.href='consultar_agendamentos.php'">Meus Agendamentos</button>
</div>

<section class="parceiros">
    <h2>Nossos Parceiros</h2>
    <div class="parceiros-grid">
        <a href="https://sabin.com.br/" target="_blank">
            <img src="imagens/sabin.png" alt="Sabin">
        </a>
        <a href="https://dasa.com.br/" target="_blank">
            <img src="imagens/dasa.png" alt="Dasa">
        </a>
        <a href="https://hapvida.com.br/" target="_blank">
            <img src="imagens/hapvida.png" alt="Hapvida">
        </a>
        <a href="https://www.fleury.com.br/" target="_blank">
            <img src="imagens/fleury.png" alt="Fleury">
        </a>
    </div>
</section>

<section class="noticias">
    <h2>Notícias em Saúde</h2>
    <ul>
        <li><a href="https://g1.globo.com/saude/noticia/2025/06/25/ministerio-da-saude-anuncia-novas-vacinas.ghtml" target="_blank">Brasil anuncia novas vacinas para doenças respiratórias</a></li>
        <li><a href="https://g1.globo.com/saude/noticia/2025/06/20/uso-de-inteligencia-artificial-na-diagnostico.ghtml" target="_blank">IA auxilia no diagnóstico precoce de doenças cardíacas</a></li>
        <li><a href="https://g1.globo.com/saude/noticia/2025/06/15/hospitais-iniciam-programa-de-atendimento-24h.ghtml" target="_blank">Hospitais parceiros oferecem atendimento 24h em todo o país</a></li>
    </ul>
</section>

<script src="js/script.js"></script>
</body>
</html>
