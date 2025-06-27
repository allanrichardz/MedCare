<div class="navbar">
    <table style="width: 100%;">
        <tr>
            <td>
                <a href="inicial.php">
                    <img src="imagens/logo_branco.png" alt="MedCare" class="logo">
                </a>
            </td>
            <td>
                <p>Contato: <a href="https://wa.me/61982654316" target="_blank">(61) 98265-4316</a></p>
            </td>
            <td style="text-align: right; white-space: nowrap;">
                <h2 class="saudacao">
                    Olá, <?php echo htmlspecialchars($_SESSION['usuario_nome'] ?? 'Usuário'); ?>!
                </h2>
                <a href="processar/logout.php" class="logout-link" title="Sair">
                    <img src="imagens/logout.png" alt="Logout" class="logout-icon">
                </a>
            </td>
        </tr>
    </table>
</div>
