/**
 * MedCare - Sistema de Agendamento Médico
 * JavaScript para funcionalidades avançadas e UX refinada
 */

// ===== CONFIGURAÇÕES GLOBAIS =====
const MedCare = {
    // Configurações de animação
    animation: {
        duration: 300,
        easing: 'ease-out'
    },
    
    // Mensagens do sistema
    messages: {
        loading: 'Processando...',
        success: 'Operação realizada com sucesso!',
        error: 'Ocorreu um erro. Tente novamente.',
        validation: {
            email: 'Por favor, insira um email válido.',
            password: 'A senha deve ter pelo menos 6 caracteres.',
            required: 'Este campo é obrigatório.',
            date: 'Por favor, selecione uma data futura.',
            time: 'Por favor, selecione um horário válido.'
        }
    }
};

// ===== INICIALIZAÇÃO DO SISTEMA =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Aplicar animações de entrada
    addFadeInAnimation();
    
    // Inicializar validações de formulário
    initializeFormValidation();
    
    // Configurar melhorias de UX
    setupUXEnhancements();
    
    // Inicializar funcionalidades específicas da página
    initializePageSpecific();
    
    // Configurar acessibilidade
    setupAccessibility();
    
    console.log('MedCare System Initialized Successfully');
}

// ===== ANIMAÇÕES E TRANSIÇÕES =====
function addFadeInAnimation() {
    const elements = document.querySelectorAll('form, .agendamento-item, h1, h2');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => observer.observe(el));
}

// ===== VALIDAÇÃO DE FORMULÁRIOS =====
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Validação em tempo real
        setupRealTimeValidation(form);
        
        // Validação no submit
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
                showValidationErrors();
            } else {
                showLoadingState(this);
            }
        });
    });
}

function setupRealTimeValidation(form) {
    const inputs = form.querySelectorAll('input, select');
    
    inputs.forEach(input => {
        // Validação ao sair do campo
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        // Remover erro ao digitar
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
        
        // Melhorar UX dos campos de data e hora
        if (input.type === 'date') {
            setupDateField(input);
        }
        
        if (input.type === 'time') {
            setupTimeField(input);
        }
    });
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    const fieldName = field.name;
    
    // Limpar erros anteriores
    clearFieldError(field);
    
    // Validação de campo obrigatório
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, MedCare.messages.validation.required);
        return false;
    }
    
    // Validações específicas por tipo
    switch (fieldType) {
        case 'email':
            if (value && !isValidEmail(value)) {
                showFieldError(field, MedCare.messages.validation.email);
                return false;
            }
            break;
            
        case 'password':
            if (value && value.length < 6) {
                showFieldError(field, MedCare.messages.validation.password);
                return false;
            }
            break;
            
        case 'date':
            if (value && !isValidDate(value)) {
                showFieldError(field, MedCare.messages.validation.date);
                return false;
            }
            break;
            
        case 'time':
            if (value && !isValidTime(value)) {
                showFieldError(field, MedCare.messages.validation.time);
                return false;
            }
            break;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidDate(dateString) {
    const selectedDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return selectedDate >= today;
}

function isValidTime(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    
    // Horário comercial: 7h às 18h
    if (hours < 7 || hours > 18) {
        return false;
    }
    
    // Intervalos de 30 minutos
    if (minutes !== 0 && minutes !== 30) {
        return false;
    }
    
    return true;
}

function showFieldError(field, message) {
    field.classList.add('error');
    field.style.borderColor = '#e53e3e';
    
    // Remover erro anterior se existir
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Criar mensagem de erro
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        color: #e53e3e;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: block;
        animation: fadeIn 0.3s ease-out;
    `;
    errorDiv.textContent = message;
    
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function clearFieldError(field) {
    field.classList.remove('error');
    field.style.borderColor = '';
    
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function showValidationErrors() {
    const firstError = document.querySelector('.error');
    if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
    }
}

// ===== MELHORIAS DE UX =====
function setupUXEnhancements() {
    // Efeito hover suave para botões
    enhanceButtons();
    
    // Melhorar campos de seleção
    enhanceSelectFields();
    
    // Adicionar indicadores de carregamento
    setupLoadingIndicators();
    
    // Configurar navegação suave
    setupSmoothNavigation();
}

function enhanceButtons() {
    const buttons = document.querySelectorAll('button, input[type="submit"]');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('loading')) {
                this.style.transform = '';
            }
        });
        
        // Efeito ripple ao clicar
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
}

function createRippleEffect(event, element) {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function enhanceSelectFields() {
    const selects = document.querySelectorAll('select');
    
    selects.forEach(select => {
        select.addEventListener('change', function() {
            if (this.value) {
                this.style.color = '#2d3748';
            } else {
                this.style.color = '#718096';
            }
        });
        
        // Cor inicial
        if (!select.value) {
            select.style.color = '#718096';
        }
    });
}

function setupLoadingIndicators() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            if (validateForm(this)) {
                showLoadingState(this);
            }
        });
    });
}

function showLoadingState(form) {
    const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
    
    if (submitButton) {
        submitButton.classList.add('loading');
        submitButton.disabled = true;
        
        const originalText = submitButton.textContent || submitButton.value;
        submitButton.textContent = MedCare.messages.loading;
        
        // Simular tempo de processamento (remover em produção)
        setTimeout(() => {
            hideLoadingState(form, originalText);
        }, 2000);
    }
}

function hideLoadingState(form, originalText) {
    const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
    
    if (submitButton) {
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
}

function setupSmoothNavigation() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== FUNCIONALIDADES ESPECÍFICAS =====
function initializePageSpecific() {
    const currentPage = getCurrentPage();
    
    switch (currentPage) {
        case 'agendamento':
            setupAgendamentoPage();
            break;
        case 'consultar_agendamentos':
            setupConsultarAgendamentosPage();
            break;
        case 'login':
            setupLoginPage();
            break;
        case 'cadastro':
            setupCadastroPage();
            break;
        case 'inicial':
            setupInicialPage();
            break;
    }
}

function getCurrentPage() {
    const path = window.location.pathname;
    const fileName = path.split('/').pop().split('.')[0];
    return fileName || 'inicial';
}

function setupAgendamentoPage() {
    const especialidadeSelect = document.getElementById('especialidade');
    const dataInput = document.getElementById('data');
    const horaInput = document.getElementById('hora');
    
    if (especialidadeSelect) {
        setupEspecialidadeField(especialidadeSelect);
    }
    
    if (dataInput) {
        setupDateField(dataInput);
    }
    
    if (horaInput) {
        setupTimeField(horaInput);
    }
}

function setupEspecialidadeField(select) {
    // Adicionar ícones para especialidades (pode ser expandido)
    const especialidadeIcons = {
        'clinico_geral': '🩺',
        'endocrino': '⚕️',
        'fisioterapia': '🏃‍♂️',
        'cardiologia': '❤️',
        'dermatologia': '🧴',
        'pediatria': '👶',
        'ortopedia': '🦴'
    };
    
    select.addEventListener('change', function() {
        const icon = especialidadeIcons[this.value];
        if (icon) {
            console.log(`Especialidade selecionada: ${icon} ${this.options[this.selectedIndex].text}`);
        }
    });
}

function setupDateField(input) {
    // Definir data mínima como hoje
    const today = new Date().toISOString().split('T')[0];
    input.min = today;
    
    // Definir data máxima (3 meses à frente)
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    input.max = maxDate.toISOString().split('T')[0];
}

function setupTimeField(input) {
    // Sugerir horários disponíveis
    input.addEventListener('focus', function() {
        showTimeHelp(this);
    });
}

function showTimeHelp(input) {
    const helpText = document.createElement('div');
    helpText.className = 'time-help';
    helpText.style.cssText = `
        font-size: 0.875rem;
        color: #718096;
        margin-top: 0.25rem;
        font-style: italic;
    `;
    helpText.textContent = 'Horários disponíveis: 07:00 às 18:00 (intervalos de 30 min)';
    
    // Remover help anterior se existir
    const existingHelp = input.parentNode.querySelector('.time-help');
    if (existingHelp) {
        existingHelp.remove();
    }
    
    input.parentNode.insertBefore(helpText, input.nextSibling);
    
    // Remover help após alguns segundos
    setTimeout(() => {
        if (helpText.parentNode) {
            helpText.remove();
        }
    }, 5000);
}

function setupConsultarAgendamentosPage() {
    const agendamentos = document.querySelectorAll('p');
    
    agendamentos.forEach((agendamento, index) => {
        if (agendamento.innerHTML.includes('<strong>Especialidade:</strong>')) {
            // Adicionar classe para estilização
            agendamento.classList.add('agendamento-item');
            
            // Adicionar animação com delay
            setTimeout(() => {
                agendamento.classList.add('fade-in');
            }, index * 100);
            
            // Adicionar funcionalidade de hover
            agendamento.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(10px)';
                this.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
            });
            
            agendamento.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
                this.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            });
        }
    });
    
    // Adicionar funcionalidade de filtro/busca
    addAgendamentosFilter();
}

function addAgendamentosFilter() {
    const container = document.querySelector('body');
    const agendamentos = document.querySelectorAll('.agendamento-item');
    
    if (agendamentos.length > 3) {
        const filterInput = document.createElement('input');
        filterInput.type = 'text';
        filterInput.placeholder = 'Filtrar agendamentos...';
        filterInput.style.cssText = `
            width: 100%;
            max-width: 400px;
            margin: 20px auto;
            display: block;
            padding: 12px;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            font-size: 1rem;
        `;
        
        // Inserir após o título
        const titulo = document.querySelector('h1');
        if (titulo) {
            titulo.parentNode.insertBefore(filterInput, titulo.nextSibling);
        }
        
        filterInput.addEventListener('input', function() {
            const filterText = this.value.toLowerCase();
            
            agendamentos.forEach(agendamento => {
                const text = agendamento.textContent.toLowerCase();
                const shouldShow = text.includes(filterText);
                
                agendamento.style.display = shouldShow ? 'block' : 'none';
                
                if (shouldShow) {
                    agendamento.style.animation = 'fadeIn 0.3s ease-out';
                }
            });
        });
    }
}

function setupLoginPage() {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[name="email"]');
    const senhaInput = document.querySelector('input[name="senha"]');
    
    if (emailInput) {
        // Auto-focus no campo email
        emailInput.focus();
        
        // Adicionar funcionalidade "Lembrar-me"
        addRememberMe(form);
    }
    
    if (senhaInput) {
        // Adicionar botão mostrar/ocultar senha
        addPasswordToggle(senhaInput);
    }
    
    // Adicionar link para cadastro se não existir
    addCadastroLink(form);
}

function addRememberMe(form) {
    const rememberDiv = document.createElement('div');
    rememberDiv.style.cssText = `
        display: flex;
        align-items: center;
        margin: 15px 0;
        gap: 8px;
    `;
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'remember-me';
    checkbox.name = 'remember';
    
    const label = document.createElement('label');
    label.htmlFor = 'remember-me';
    label.textContent = 'Lembrar-me';
    label.style.cssText = `
        font-size: 0.9rem;
        cursor: pointer;
        margin: 0;
    `;
    
    rememberDiv.appendChild(checkbox);
    rememberDiv.appendChild(label);
    
    const submitButton = form.querySelector('input[type="submit"]');
    form.insertBefore(rememberDiv, submitButton);
}

function addPasswordToggle(passwordInput) {
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    
    passwordInput.parentNode.insertBefore(wrapper, passwordInput);
    wrapper.appendChild(passwordInput);
    
    const toggleButton = document.createElement('button');
    toggleButton.type = 'button';
    toggleButton.innerHTML = '👁️';
    toggleButton.style.cssText = `
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        padding: 0;
        margin: 0;
        z-index: 1;
    `;
    
    wrapper.appendChild(toggleButton);
    
    toggleButton.addEventListener('click', function() {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        this.innerHTML = type === 'password' ? '👁️' : '🙈';
    });
}

function addCadastroLink(form) {
    const linkDiv = document.createElement('div');
    linkDiv.style.cssText = `
        text-align: center;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #e2e8f0;
    `;
    
    linkDiv.innerHTML = `
        <p style="margin: 0; color: #718096;">
            Não tem uma conta? 
            <a href="cadastro.php" style="color: #3182ce; font-weight: 600;">Cadastre-se aqui</a>
        </p>
    `;
    
    form.parentNode.insertBefore(linkDiv, form.nextSibling);
}

function setupCadastroPage() {
    const form = document.querySelector('form');
    const nomeInput = document.querySelector('input[name="nome"]');
    const emailInput = document.querySelector('input[name="email"]');
    const senhaInput = document.querySelector('input[name="senha"]');
    
    if (nomeInput) {
        nomeInput.focus();
        
        // Validação de nome (só letras e espaços)
        nomeInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
        });
    }
    
    if (senhaInput) {
        addPasswordToggle(senhaInput);
        addPasswordStrengthIndicator(senhaInput);
    }
    
    // Adicionar link para login
    addLoginLink(form);
}

function addPasswordStrengthIndicator(passwordInput) {
    const strengthDiv = document.createElement('div');
    strengthDiv.className = 'password-strength';
    strengthDiv.style.cssText = `
        margin-top: 5px;
        height: 4px;
        background: #e2e8f0;
        border-radius: 2px;
        overflow: hidden;
    `;
    
    const strengthBar = document.createElement('div');
    strengthBar.style.cssText = `
        height: 100%;
        width: 0%;
        transition: all 0.3s ease;
        border-radius: 2px;
    `;
    
    strengthDiv.appendChild(strengthBar);
    passwordInput.parentNode.appendChild(strengthDiv);
    
    const strengthText = document.createElement('div');
    strengthText.style.cssText = `
        font-size: 0.8rem;
        margin-top: 5px;
        height: 1rem;
    `;
    passwordInput.parentNode.appendChild(strengthText);
    
    passwordInput.addEventListener('input', function() {
        const strength = calculatePasswordStrength(this.value);
        updatePasswordStrengthUI(strengthBar, strengthText, strength);
    });
}

function calculatePasswordStrength(password) {
    let score = 0;
    const checks = {
        length: password.length >= 8,
        lowercase: /[a-z]/.test(password),
        uppercase: /[A-Z]/.test(password),
        numbers: /\d/.test(password),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    
    score = Object.values(checks).filter(Boolean).length;
    
    if (password.length === 0) return { score: 0, text: '', color: '#e2e8f0' };
    if (score <= 2) return { score: score * 20, text: 'Fraca', color: '#e53e3e' };
    if (score <= 3) return { score: score * 20, text: 'Média', color: '#ed8936' };
    if (score <= 4) return { score: score * 20, text: 'Forte', color: '#38a169' };
    return { score: 100, text: 'Muito Forte', color: '#319795' };
}

function updatePasswordStrengthUI(bar, text, strength) {
    bar.style.width = strength.score + '%';
    bar.style.backgroundColor = strength.color;
    text.textContent = strength.text;
    text.style.color = strength.color;
}

function addLoginLink(form) {
    const linkDiv = document.createElement('div');
    linkDiv.style.cssText = `
        text-align: center;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #e2e8f0;
    `;
    
    linkDiv.innerHTML = `
        <p style="margin: 0; color: #718096;">
            Já tem uma conta? 
            <a href="login.php" style="color: #3182ce; font-weight: 600;">Faça login aqui</a>
        </p>
    `;
    
    form.parentNode.insertBefore(linkDiv, form.nextSibling);
}

function setupInicialPage() {
    const buttons = document.querySelectorAll('button');
    
    // Reorganizar botões com classes específicas
    buttons.forEach(button => {
        button.classList.add('home-button');
    });
    
    // Criar container para botões se não existir
    if (buttons.length > 0) {
        const container = document.createElement('div');
        container.className = 'home-buttons';
        
        const firstButton = buttons[0];
        firstButton.parentNode.insertBefore(container, firstButton);
        
        buttons.forEach(button => {
            container.appendChild(button);
        });
    }
    
    // Adicionar estatísticas ou informações úteis
    addWelcomeInfo();
}

function addWelcomeInfo() {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        margin: 30px auto;
        max-width: 600px;
        text-align: center;
        border-top: 4px solid #319795;
    `;
    
    welcomeDiv.innerHTML = `
        <h3 style="color: #2c5282; margin-bottom: 15px; font-size: 1.5rem;">
            🏥 Bem-vindo ao MedCare
        </h3>
        <p style="color: #718096; line-height: 1.6; margin-bottom: 20px;">
            Seu centro médico de confiança. Agende consultas com nossos especialistas 
            e tenha acesso aos melhores cuidados de saúde.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; margin-top: 20px;">
            <div style="text-align: center;">
                <div style="font-size: 2rem; color: #319795;">⏰</div>
                <div style="font-weight: 600; color: #2c5282;">Horário Flexível</div>
                <div style="font-size: 0.9rem; color: #718096;">7h às 18h</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 2rem; color: #319795;">👨‍⚕️</div>
                <div style="font-weight: 600; color: #2c5282;">7 Especialidades</div>
                <div style="font-size: 0.9rem; color: #718096;">Médicos qualificados</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 2rem; color: #319795;">📱</div>
                <div style="font-weight: 600; color: #2c5282;">Fácil Agendamento</div>
                <div style="font-size: 0.9rem; color: #718096;">Online 24/7</div>
            </div>
        </div>
    `;
    
    const homeButtons = document.querySelector('.home-buttons');
    if (homeButtons) {
        homeButtons.parentNode.insertBefore(welcomeDiv, homeButtons);
    }
}

// ===== ACESSIBILIDADE =====
function setupAccessibility() {
    // Adicionar atalhos de teclado
    document.addEventListener('keydown', function(e) {
        // Alt + 1: Ir para conteúdo principal
        if (e.altKey && e.key === '1') {
            const mainContent = document.querySelector('h1') || document.querySelector('main');
            if (mainContent) {
                mainContent.scrollIntoView({ behavior: 'smooth' });
                mainContent.focus();
            }
        }
        
        // Esc: Fechar modais ou limpar formulários
        if (e.key === 'Escape') {
            clearAllErrors();
        }
    });
    
    // Melhorar navegação por teclado
    enhanceKeyboardNavigation();
    
    // Adicionar landmarks ARIA
    addAriaLandmarks();
}

function enhanceKeyboardNavigation() {
    const focusableElements = document.querySelectorAll(
        'input, select, textarea, button, a[href], [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach((element, index) => {
        element.addEventListener('keydown', function(e) {
            // Enter em links e botões
            if (e.key === 'Enter' && (this.tagName === 'A' || this.tagName === 'BUTTON')) {
                this.click();
            }
            
            // Navegação com setas em selects customizados
            if (this.tagName === 'SELECT' && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
                e.preventDefault();
                const options = Array.from(this.options);
                const currentIndex = this.selectedIndex;
                
                if (e.key === 'ArrowUp' && currentIndex > 0) {
                    this.selectedIndex = currentIndex - 1;
                } else if (e.key === 'ArrowDown' && currentIndex < options.length - 1) {
                    this.selectedIndex = currentIndex + 1;
                }
                
                this.dispatchEvent(new Event('change'));
            }
        });
    });
}

function addAriaLandmarks() {
    // Adicionar role de navegação para navbar
    const navbar = document.querySelector('div:first-child');
    if (navbar) {
        navbar.setAttribute('role', 'navigation');
        navbar.setAttribute('aria-label', 'Navegação principal');
    }
    
    // Adicionar role main para conteúdo principal
    const mainContent = document.querySelector('form') || document.querySelector('h1');
    if (mainContent && mainContent.parentNode) {
        const main = document.createElement('main');
        main.setAttribute('role', 'main');
        main.setAttribute('aria-label', 'Conteúdo principal');
        
        // Mover conteúdo para dentro do main
        const parent = mainContent.parentNode;
        parent.insertBefore(main, mainContent);
        
        // Mover todos os elementos relevantes para dentro do main
        let nextElement = mainContent;
        while (nextElement && nextElement !== navbar) {
            const current = nextElement;
            nextElement = nextElement.nextElementSibling;
            if (current.tagName !== 'SCRIPT') {
                main.appendChild(current);
            }
        }
    }
}

// ===== UTILITÁRIOS =====
function clearAllErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const errorFields = document.querySelectorAll('.error');
    
    errorMessages.forEach(msg => msg.remove());
    errorFields.forEach(field => {
        field.classList.remove('error');
        field.style.borderColor = '';
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    // Cores por tipo
    const colors = {
        success: '#38a169',
        error: '#e53e3e',
        warning: '#ed8936',
        info: '#3182ce'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto-remover após 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
    
    // Permitir fechar ao clicar
    notification.addEventListener('click', function() {
        this.remove();
    });
}

// ===== ANIMAÇÕES CSS DINÂMICAS =====
function addDynamicAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        @keyframes ripple {
            from {
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
            }
            to {
                transform: translate(-50%, -50%) scale(2);
                opacity: 0;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Inicializar animações dinâmicas
addDynamicAnimations();

// ===== PERFORMANCE E OTIMIZAÇÃO =====
function optimizePerformance() {
    // Lazy loading para imagens
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
    
    // Debounce para eventos de input
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Aplicar debounce aos campos de filtro
    const filterInputs = document.querySelectorAll('input[type="text"]');
    filterInputs.forEach(input => {
        if (input.placeholder && input.placeholder.includes('Filtrar')) {
            const originalHandler = input.oninput;
            input.oninput = debounce(originalHandler, 300);
        }
    });
}

// Executar otimizações após carregamento
window.addEventListener('load', optimizePerformance);

console.log('🏥 MedCare JavaScript System Loaded Successfully!');