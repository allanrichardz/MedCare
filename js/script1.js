// Animação suave ao carregar elementos com classe .fade-in
window.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 100);
    });
});

// Efeito de botão clicável
const buttons = document.querySelectorAll('button, input[type="submit"]');
buttons.forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.95)';
    });
    btn.addEventListener('mouseup', () => {
        btn.style.transform = 'scale(1)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});

// Feedback visual em campos obrigatórios
const inputs = document.querySelectorAll('input[required], select[required]');
inputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (!input.value.trim()) {
            input.style.borderColor = '#e53e3e';
        } else {
            input.style.borderColor = '#319795';
        }
    });
});

// Scroll suave para âncoras internas
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});