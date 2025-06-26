// ===== MEDCARE ANIMATIONS SCRIPT =====

// Função para inicializar todas as animações
function initAnimations() {
    // Inicialização das animações por página
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'login':
        case 'cadastro':
            initFormPageAnimations();
            break;
        case 'inicial':
            initHomepageAnimations();
            break;
        case 'agendamento':
            initAgendamentoAnimations();
            break;
        case 'consultar_agendamentos':
            initConsultarAgendamentosAnimations();
            break;
    }
    
    // Animações globais
    initGlobalAnimations();
}

// Função para detectar a página atual
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('login')) return 'login';
    if (path.includes('cadastro')) return 'cadastro';
    if (path.includes('inicial')) return 'inicial';
    if (path.includes('agendamento')) return 'agendamento';
    if (path.includes('consultar_agendamentos')) return 'consultar_agendamentos';
    return 'unknown';
}

// ===== ANIMAÇÕES GLOBAIS =====
function initGlobalAnimations() {
    // Animação da navbar
    animateNavbar();
    
    // Animação do título principal
    animateMainTitle();
    
    // Efeitos de hover nos links
    addLinkHoverEffects();
    
    // Animação de scroll suave
    addSmoothScrolling();
    
    // Animação de entrada para alertas
    animateAlerts();
}

// Animação da navbar
function animateNavbar() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.opacity = '0';
        
        setTimeout(() => {
            navbar.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            navbar.style.transform = 'translateY(0)';
            navbar.style.opacity = '1';
        }, 100);
        
        // Animação da logo
        const logo = navbar.querySelector('.logo');
        if (logo) {
            logo.addEventListener('mouseenter', () => {
                logo.style.transform = 'scale(1.05) rotate(2deg)';
            });
            
            logo.addEventListener('mouseleave', () => {
                logo.style.transform = 'scale(1) rotate(0deg)';
            });
        }
        
        // Animação do logout
        const logoutLink = navbar.querySelector('.logout-link');
        if (logoutLink) {
            logoutLink.addEventListener('mouseenter', () => {
                logoutLink.style.transform = 'rotate(10deg) scale(1.1)';
            });
            
            logoutLink.addEventListener('mouseleave', () => {
                logoutLink.style.transform = 'rotate(0deg) scale(1)';
            });
        }
    }
}

// Animação do título principal
function animateMainTitle() {
    const title = document.querySelector('h1');
    if (title) {
        title.style.opacity = '0';
        title.style.transform = 'translateY(50px) scale(0.8)';
        
        setTimeout(() => {
            title.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0) scale(1)';
        }, 300);
        
        // Efeito de flutuação no título
        setInterval(() => {
            if (!title.matches(':hover')) {
                title.style.transform = 'translateY(-5px) scale(1.02)';
                setTimeout(() => {
                    title.style.transform = 'translateY(0) scale(1)';
                }, 2000);
            }
        }, 4000);
    }
}

// Efeitos de hover nos links
function addLinkHoverEffects() {
    const links = document.querySelectorAll('a:not(.navbar a):not(.logout-link)');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });
}

// Scroll suave
function addSmoothScrolling() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Animação de alertas
function animateAlerts() {
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach((alert, index) => {
        alert.style.opacity = '0';
        alert.style.transform = 'translateX(-50px)';
        
        setTimeout(() => {
            alert.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            alert.style.opacity = '1';
            alert.style.transform = 'translateX(0)';
        }, index * 200);
        
        // Auto-hide após 5 segundos
        setTimeout(() => {
            alert.style.opacity = '0';
            alert.style.transform = 'translateX(50px)';
            setTimeout(() => {
                alert.style.display = 'none';
            }, 500);
        }, 5000);
    });
}

// ===== ANIMAÇÕES ESPECÍFICAS POR PÁGINA =====

// Animações para páginas de formulário (login/cadastro)
function initFormPageAnimations() {
    const form = document.querySelector('form');
    if (form) {
        // Animação de entrada do formulário
        form.style.opacity = '0';
        form.style.transform = 'translateY(50px) scale(0.95)';
        
        setTimeout(() => {
            form.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            form.style.opacity = '1';
            form.style.transform = 'translateY(0) scale(1)';
        }, 500);
        
        // Animação dos campos do formulário
        const inputs = form.querySelectorAll('input, select');
        inputs.forEach((input, index) => {
            input.style.opacity = '0';
            input.style.transform = 'translateX(-30px)';
            
            setTimeout(() => {
                input.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                input.style.opacity = '1';
                input.style.transform = 'translateX(0)';
            }, 700 + (index * 100));
            
            // Efeitos de foco
            addInputFocusEffects(input);
        });
        
        // Animação do botão de submit
        const submitBtn = form.querySelector('input[type="submit"]');
        if (submitBtn) {
            addSubmitButtonEffects(submitBtn);
        }
    }
}

// Animações para a página inicial
function initHomepageAnimations() {
    const homeButtons = document.querySelector('.home-buttons');
    if (homeButtons) {
        const buttons = homeButtons.querySelectorAll('button');
        
        buttons.forEach((button, index) => {
            button.style.opacity = '0';
            button.style.transform = 'translateY(50px) scale(0.8)';
            
            setTimeout(() => {
                button.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                button.style.opacity = '1';
                button.style.transform = 'translateY(0) scale(1)';
            }, 800 + (index * 200));
            
            // Efeito de hover personalizado
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-10px) scale(1.05)';
                button.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0) scale(1)';
                button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            });
            
            // Efeito de clique
            button.addEventListener('click', (e) => {
                const ripple = createRippleEffect(e, button);
                setTimeout(() => {
                    button.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        button.style.transform = 'scale(1)';
                    }, 150);
                }, 100);
            });
        });
        
        // Animação de flutuação contínua
        setInterval(() => {
            buttons.forEach((button, index) => {
                if (!button.matches(':hover')) {
                    setTimeout(() => {
                        button.style.transform = 'translateY(-5px) scale(1.02)';
                        setTimeout(() => {
                            button.style.transform = 'translateY(0) scale(1)';
                        }, 1000);
                    }, index * 500);
                }
            });
        }, 6000);
    }
}

// Animações para a página de agendamento
function initAgendamentoAnimations() {
    const form = document.querySelector('form');
    if (form) {
        // Animação de entrada escalonada dos campos
        const fields = form.querySelectorAll('label, input, select');
        fields.forEach((field, index) => {
            field.style.opacity = '0';
            field.style.transform = 'translateX(-30px)';
            
            setTimeout(() => {
                field.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                field.style.opacity = '1';
                field.style.transform = 'translateX(0)';
            }, 600 + (index * 100));
        });
        
        // Efeitos especiais para o select de especialidade
        const especialidadeSelect = form.querySelector('#especialidade');
        if (especialidadeSelect) {
            especialidadeSelect.addEventListener('change', () => {
                especialidadeSelect.style.transform = 'scale(1.05)';
                especialidadeSelect.style.borderColor = '#38b2ac';
                setTimeout(() => {
                    especialidadeSelect.style.transform = 'scale(1)';
                }, 200);
            });
        }
        
        // Animação para campos de data e hora
        const dateInput = form.querySelector('#data');
        const timeInput = form.querySelector('#hora');
        
        [dateInput, timeInput].forEach(input => {
            if (input) {
                input.addEventListener('change', () => {
                    input.style.background = 'linear-gradient(135deg, #ebf8ff, #ffffff)';
                    input.style.transform = 'scale(1.02)';
                    setTimeout(() => {
                        input.style.transform = 'scale(1)';
                    }, 300);
                });
            }
        });
        
        // Animação do botão de agendar
        const submitBtn = form.querySelector('input[type="submit"]');
        if (submitBtn) {
            addSubmitButtonEffects(submitBtn);
            
            // Efeito especial de confirmação
            submitBtn.addEventListener('click', (e) => {
                submitBtn.style.background = 'linear-gradient(135deg, #48bb78, #38b2ac)';
                submitBtn.value = 'Agendando...';
                
                // Adicionar spinner
                const spinner = document.createElement('div');
                spinner.className = 'loading';
                spinner.style.marginLeft = '10px';
                spinner.style.display = 'inline-block';
                submitBtn.parentNode.appendChild(spinner);
            });
        }
    }
}

// Animações para a página de consultar agendamentos
function initConsultarAgendamentosAnimations() {
    const agendamentoItems = document.querySelectorAll('.agendamento-item');
    
    if (agendamentoItems.length > 0) {
        agendamentoItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 600 + (index * 150));
            
            // Efeito de hover
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-8px) translateX(10px)';
                item.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) translateX(0)';
                item.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            });
            
            // Animação de destaque periódica
            setTimeout(() => {
                setInterval(() => {
                    if (!item.matches(':hover')) {
                        item.style.borderColor = '#38b2ac';
                        setTimeout(() => {
                            item.style.borderColor = '#e2e8f0';
                        }, 1000);
                    }
                }, 5000 + (index * 1000));
            }, 2000);
        });
    } else {
        // Animação para quando não há agendamentos
        const emptyMessage = document.querySelector('p');
        if (emptyMessage && emptyMessage.textContent.includes('não possui agendamentos')) {
            emptyMessage.style.opacity = '0';
            emptyMessage.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                emptyMessage.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                emptyMessage.style.opacity = '1';
                emptyMessage.style.transform = 'scale(1)';
            }, 800);
            
            // Efeito de pulsação suave
            setInterval(() => {
                emptyMessage.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    emptyMessage.style.transform = 'scale(1)';
                }, 1000);
            }, 3000);
        }
    }
}

// ===== FUNÇÕES AUXILIARES =====

// Efeitos de foco para inputs
function addInputFocusEffects(input) {
    input.addEventListener('focus', () => {
        input.style.transform = 'translateY(-3px) scale(1.02)';
        input.style.boxShadow = '0 8px 25px rgba(66, 153, 225, 0.15)';
        
        // Efeito de typing
        input.addEventListener('input', () => {
            input.style.borderColor = '#38b2ac';
        });
    });
    
    input.addEventListener('blur', () => {
        input.style.transform = 'translateY(0) scale(1)';
        if (input.value) {
            input.style.borderColor = '#48bb78';
        } else {
            input.style.borderColor = '#e2e8f0';
        }
    });
    
    // Efeito de shake para campos inválidos
    input.addEventListener('invalid', () => {
        input.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            input.style.animation = '';
        }, 500);
    });
}

// Efeitos para botões de submit
function addSubmitButtonEffects(button) {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px) scale(1.02)';
        button.style.boxShadow = '0 15px 35px rgba(44, 82, 130, 0.3)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
        button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
    
    button.addEventListener('click', (e) => {
        const ripple = createRippleEffect(e, button);
        button.style.transform = 'scale(0.98)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    });
}

// Criar efeito ripple
function createRippleEffect(e, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.pointerEvents = 'none';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
    
    return ripple;
}

// Adicionar keyframes para ripple
function addRippleKeyframes() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Função para criar partículas flutuantes (efeito decorativo)
function createFloatingParticles() {
    const particleCount = 6;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = 'rgba(56, 178, 172, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        
        document.body.appendChild(particle);
        particles.push(particle);
        
        animateParticle(particle);
    }
    
    return particles;
}

// Animar partícula individual
function animateParticle(particle) {
    const duration = 15000 + Math.random() * 10000;
    const startX = parseFloat(particle.style.left);
    const startY = parseFloat(particle.style.top);
    const endX = Math.random() * window.innerWidth;
    const endY = Math.random() * window.innerHeight;
    
    particle.animate([
        { transform: `translate(0, 0)`, opacity: 0.3 },
        { transform: `translate(${endX - startX}px, ${endY - startY}px)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'linear'
    }).onfinish = () => {
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        animateParticle(particle);
    };
}

// Função para tema escuro (bonus)
function initDarkModeToggle() {
    // Detectar preferência do sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
    
    // Escutar mudanças na preferência
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (e.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
}

// ===== INICIALIZAÇÃO =====

// Executar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    addRippleKeyframes();
    
    // Criar partículas flutuantes apenas na página inicial
    if (getCurrentPage() === 'inicial') {
        setTimeout(() => {
            createFloatingParticles();
        }, 2000);
    }
    
    // Inicializar tema escuro
    initDarkModeToggle();
});

// Executar animações de entrada após o carregamento completo
window.addEventListener('load', () => {
    // Animação final de entrada da página
    document.body.style.opacity = '0';
    document.body.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
        document.body.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        document.body.style.opacity = '1';
        document.body.style.transform = 'scale(1)';
    }, 100);
});

// Limpar animações em caso de mudança de página
window.addEventListener('beforeunload', () => {
    // Fade out suave
    document.body.style.transition = 'opacity 0.3s ease-out';
    document.body.style.opacity = '0';
});