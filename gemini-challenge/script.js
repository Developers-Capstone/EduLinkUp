// ============================================
// GOOGLE STUDENT AMBASSADOR CERTIFICATE CHALLENGE
// Final Bug-Fixed and Automated Version
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // CONFIGURATION
    // ============================================
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzh-gs3WtqCIGG5iUfvRpEa4Xwpt9NzXmqHB0pgR22WPhgL-EnBKkqJ5OqwBZGkUsG6/exec'; // 👈 PASTE YOUR URL
    const USER_ID_KEY = 'gsa_challenge_userId';
    const USER_EMAIL_KEY = 'gsa_challenge_geminiEmail';

    // ============================================
    // DOM ELEMENTS
    // ============================================
    const sections = {
        registration: document.getElementById('registration-section'),
        prompts: document.getElementById('prompts-section'),
        certificate: document.getElementById('certificate-section')
    };

    const elements = {
        registrationForm: document.getElementById('registration-form'),
        registerBtn: document.getElementById('register-btn'),
        errorMessage: document.getElementById('error-message'),
        userNameSpan: document.getElementById('user-name'),
        promptList: document.getElementById('prompt-list'),
        progressPreview: document.getElementById('progress-preview'),
        progressFill: document.getElementById('progress-fill'),
        progressCount: document.getElementById('progress-count'),
        generateCertBtn: document.getElementById('generate-certificate-btn'),
        confettiContainer: document.getElementById('confetti-container')
    };

    // ============================================
    // PROMPTS DATA
    // ============================================
    const prompts = [
        { id: 1, title: 'Explain a local festival to a friend', emoji: '🎉', url: 'https://aiskillshouse.com/student/qr-mediator.html?uid=7631&promptId=22' },
        { id: 2, title: 'Gamify your spending habits', emoji: '🎮', url: 'https://aiskillshouse.com/student/qr-mediator.html?uid=7631&promptId=21' },
        { id: 3, title: 'Brainstorm ideas for your college fest', emoji: '🎪', url: 'https://aiskillshouse.com/student/qr-mediator.html?uid=7631&promptId=20' },
        { id: 4, title: 'Get unique podcast concepts for students', emoji: '🎙️', url: 'https://aiskillshouse.com/student/qr-mediator.html?uid=7631&promptId=19' },
        { id: 5, title: 'Create a 7-day study plan for finals', emoji: '📚', url: 'https://aiskillshouse.com/student/qr-mediator.html?uid=7631&promptId=18' }
    ];

    // ============================================
    // VISUAL EFFECTS
    // ============================================

    function createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const startX = Math.random() * 100, startY = Math.random() * 100;
            const endX = Math.random() * 200 - 100, endY = Math.random() * 200 - 100;
            particle.style.left = `${startX}%`;
            particle.style.top = `${startY}%`;
            particle.style.setProperty('--tx', `${endX}px`);
            particle.style.setProperty('--ty', `${endY}px`);
            particle.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(particle);
        }
    }

    function createConfetti() {
        if (!elements.confettiContainer) return;
        const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#9B72F3'];
        const confettiCount = 50;
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = `${Math.random() * 0.5}s`;
            confetti.style.animationDuration = `${2 + Math.random() * 2}s`;
            elements.confettiContainer.appendChild(confetti);
        }
        setTimeout(() => { elements.confettiContainer.innerHTML = ''; }, 4000);
    }

    // ============================================
    // UI FUNCTIONS
    // ============================================

    function showSection(section) {
        Object.values(sections).forEach(s => s.classList.remove('active'));
        section.classList.add('active');
        if (section === sections.prompts) {
            elements.progressPreview.classList.remove('hidden');
        }
        if (section === sections.certificate) {
            setTimeout(createConfetti, 300);
        }
    }

    function toggleLoading(isLoading) {
        elements.registerBtn.disabled = isLoading;
        elements.registerBtn.classList.toggle('loading', isLoading);
    }

    function updateProgress(completed, total) {
        const percentage = (completed / total) * 100;
        elements.progressFill.style.width = `${percentage}%`;
        elements.progressCount.textContent = completed;
        if (completed > 0) {
            elements.progressFill.style.animation = 'none';
            setTimeout(() => { elements.progressFill.style.animation = ''; }, 10);
        }
    }

    function renderPrompts(userData) {
        elements.promptList.innerHTML = '';
        let completedCount = 0;
        prompts.forEach((prompt, index) => {
            const isCompleted = userData[`Prompt${prompt.id}_Clicked`];
            if (isCompleted) completedCount++;
            const card = document.createElement('a');
            card.href = prompt.url;
            card.target = '_blank';
            card.className = `prompt-card ${isCompleted ? 'completed' : ''}`;
            card.dataset.promptId = prompt.id;
            card.style.animationDelay = `${index * 0.1}s`;
            card.innerHTML = `<div class="prompt-content"><div class="prompt-icon-container"><span class="prompt-emoji">${prompt.emoji}</span><span class="completed-icon">✓</span></div><span class="prompt-title">${prompt.title}</span></div><svg class="prompt-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`;
            elements.promptList.appendChild(card);
        });
        updateProgress(completedCount, prompts.length);
    }

    function checkCompletion(userData) {
        if (!userData) return;
        const allComplete = prompts.every(p => userData[`Prompt${p.id}_Clicked`]);
        if (allComplete) {
            setTimeout(() => { showSection(sections.certificate); }, 500);
        }
    }

    function showError(message) {
        elements.errorMessage.textContent = message;
        elements.errorMessage.style.animation = 'shake 0.5s';
        setTimeout(() => { elements.errorMessage.style.animation = ''; }, 500);
    }

    // ============================================
    // API FUNCTIONS
    // ============================================

    async function registerUser(name, studentEmail, geminiEmail) {
        toggleLoading(true);
        elements.errorMessage.textContent = '';
        try {
            const params = new URLSearchParams({ action: 'register', name, studentEmail, geminiEmail });
            const response = await fetch(`${WEB_APP_URL}?${params.toString()}`);
            const result = await response.json();
            if (result.error) throw new Error(result.error);
            localStorage.setItem(USER_ID_KEY, result.UserID);
            localStorage.setItem(USER_EMAIL_KEY, result.GeminiEmail);
            await initializePage();
        } catch (error) {
            showError(error.message);
        } finally {
            toggleLoading(false);
        }
    }

    async function getUserByEmail(geminiEmail) {
        try {
            const params = new URLSearchParams({ action: 'get_user_by_email', geminiEmail });
            const response = await fetch(`${WEB_APP_URL}?${params.toString()}`);
            const result = await response.json();
            return result.error ? null : result;
        } catch (error) { return null; }
    }

    async function getUserById(userId) {
        try {
            if (!userId) return null;
            const params = new URLSearchParams({ action: 'get_user_by_id', userId });
            const response = await fetch(`${WEB_APP_URL}?${params.toString()}`);
            if (!response.ok) { throw new Error(`Server responded with status: ${response.status}`); }
            const result = await response.json();
            if (result.error && result.error === "User not found.") {
                localStorage.removeItem(USER_ID_KEY);
                localStorage.removeItem(USER_EMAIL_KEY);
                return null;
            }
            if (result.error) { throw new Error(result.error); }
            return result;
        } catch (error) {
            console.error('Failed to get user data:', error);
            localStorage.removeItem(USER_ID_KEY);
            localStorage.removeItem(USER_EMAIL_KEY);
            return null;
        }
    }

    async function updateProgress(userId, promptId) {
        try {
            const params = new URLSearchParams({ action: 'update_progress', userId, promptId });
            await fetch(`${WEB_APP_URL}?${params.toString()}`);
        } catch (error) {
            console.error('Failed to update progress:', error);
        }
    }

    async function generateCertificate() {
        const userId = localStorage.getItem(USER_ID_KEY);
        if (!userId) {
            alert('Error: User not found. Please register again.');
            return;
        }
        const certButton = elements.generateCertBtn;
        certButton.disabled = true;
        certButton.querySelector('.cert-text').textContent = 'Generating...';
        try {
            const params = new URLSearchParams({ action: 'generate_certificate', userId: userId });
            const response = await fetch(`${WEB_APP_URL}?${params.toString()}`);
            const result = await response.json();
            if (result.error) { throw new Error(result.error); }
            certButton.outerHTML = `<a href="${result.certificateUrl}" target="_blank" class="certificate-btn download-btn" style="background: linear-gradient(135deg, var(--google-purple), #6a11cb);"><span class="cert-btn-content"><span class="cert-icon">📂</span><span class="cert-text">Download Certificate</span></span></a>`;
        } catch (error) {
            alert('An error occurred while generating your certificate. Please try again later.');
            certButton.disabled = false;
            certButton.querySelector('.cert-text').textContent = 'Generate My Certificate';
            console.error('Certificate generation error:', error);
        }
    }

    // ============================================
    // EVENT HANDLERS
    // ============================================

    elements.registrationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        toggleLoading(true);
        const name = document.getElementById('name').value.trim();
        const studentEmail = document.getElementById('student-email').value.trim();
        const geminiEmail = document.getElementById('gemini-email').value.trim();
        const existingUser = await getUserByEmail(geminiEmail);
        if (existingUser) {
            localStorage.setItem(USER_ID_KEY, existingUser.UserID);
            localStorage.setItem(USER_EMAIL_KEY, existingUser.GeminiEmail);
            await initializePage();
        } else {
            await registerUser(name, studentEmail, geminiEmail);
        }
        toggleLoading(false);
    });

    elements.promptList.addEventListener('click', async (e) => {
        const card = e.target.closest('.prompt-card');
        if (!card || card.classList.contains('completed')) return;
        e.preventDefault();
        window.open(card.href, '_blank');
        const promptId = card.dataset.promptId;
        const userId = localStorage.getItem(USER_ID_KEY);
        if (userId) {
            card.classList.add('completed');
            await updateProgress(userId, promptId);
            const userData = await getUserById(userId);
            if (userData) {
                renderPrompts(userData);
                checkCompletion(userData);
            }
        }
    });

    elements.generateCertBtn.addEventListener('click', generateCertificate);

    // ============================================
    // INITIALIZATION
    // ============================================

    async function initializePage() {
        const userId = localStorage.getItem(USER_ID_KEY);
        if (!userId) {
            showSection(sections.registration);
            return;
        }
        const userData = await getUserById(userId);
        if (userData) {
            elements.userNameSpan.textContent = userData.Name;
            showSection(sections.prompts);
            renderPrompts(userData);
            checkCompletion(userData);
        } else {
            showSection(sections.registration);
        }
    }

    // ============================================
    // START APPLICATION
    // ============================================
    createParticles();
    initializePage();
});