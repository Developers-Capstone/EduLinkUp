// ============================================
// GOOGLE STUDENT AMBASSADOR CERTIFICATE CHALLENGE
// Enhanced with Google Sign-In and Bug Fixes
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // CONFIGURATION
    // ============================================
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzh-gs3WtqCIGG5iUfvRpEa4Xwpt9NzXmqHB0pgR22WPhgL-EnBKkqJ5OqwBZGkUsG6/exec';
    const USER_ID_KEY = 'gsa_challenge_userId';
    const USER_EMAIL_KEY = 'gsa_challenge_geminiEmail';
    const SESSION_ACTIVE_KEY = 'gsa_session_active';
    const TEMP_GOOGLE_NAME = 'gsa_temp_google_name';
    const TEMP_GOOGLE_EMAIL = 'gsa_temp_google_email';

    // ============================================
    // DOM ELEMENTS
    // ============================================
    const sections = {
        registration: document.getElementById('registration-section'),
        prompts: document.getElementById('prompts-section'),
        certificate: document.getElementById('certificate-section')
    };

    const elements = {
        fullscreenLoader: document.getElementById('fullscreen-loader'),
        loaderText: document.getElementById('loader-text'),
        signinCard: document.getElementById('signin-card'),
        studentEmailForm: document.getElementById('student-email-form'),
        registerBtn: document.getElementById('register-btn'),
        errorMessage: document.getElementById('error-message'),
        userNameSpan: document.getElementById('user-name'),
        promptList: document.getElementById('prompt-list'),
        progressPreview: document.getElementById('progress-preview'),
        progressFill: document.getElementById('progress-fill'),
        progressCount: document.getElementById('progress-count'),
        generateCertBtn: document.getElementById('generate-certificate-btn'),
        confettiContainer: document.getElementById('confetti-container'),
        logoutContainer: document.getElementById('logout-container'),
        logoutBtn: document.getElementById('logout-btn'),
        homeBtnPrompts: document.getElementById('home-btn-prompts'),
        homeBtnCert: document.getElementById('home-btn-cert'),
        certificateActionArea: document.getElementById('certificate-action-area'),
        signedInEmail: document.getElementById('signed-in-email'),
        studentEmailInput: document.getElementById('student-email')
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
    // LOADER FUNCTIONS
    // ============================================
    function showLoader(text = 'Processing...') {
        elements.loaderText.textContent = text;
        elements.fullscreenLoader.classList.remove('hidden');
    }

    function hideLoader() {
        elements.fullscreenLoader.classList.add('hidden');
    }

    // ============================================
    // GOOGLE SIGN-IN HANDLER
    // ============================================
    window.handleCredentialResponse = async (response) => {
        try {
            showLoader('Authenticating with Google...');
            
            // Decode JWT token to get user info
            const credential = response.credential;
            const payload = JSON.parse(atob(credential.split('.')[1]));
            
            const name = payload.name;
            const email = payload.email;
            
            console.log('✅ Google Sign-In successful:', { name, email });
            
            // Store temporarily
            sessionStorage.setItem(TEMP_GOOGLE_NAME, name);
            sessionStorage.setItem(TEMP_GOOGLE_EMAIL, email);
            
            // Update loader text
            showLoader('Checking user status...');
            
            // Check if user already exists in database
            const existingUser = await getUserByEmail(email);
            
            if (existingUser) {
                // EXISTING USER - Log them in and route to appropriate section
                console.log('✅ Existing user found:', existingUser);
                showLoader('Loading your progress...');
                
                localStorage.setItem(USER_ID_KEY, existingUser.UserID);
                localStorage.setItem(USER_EMAIL_KEY, existingUser.GeminiEmail);
                localStorage.setItem(SESSION_ACTIVE_KEY, 'true');
                
                // Clear temporary data
                sessionStorage.removeItem(TEMP_GOOGLE_NAME);
                sessionStorage.removeItem(TEMP_GOOGLE_EMAIL);
                
                // Initialize page (will route to correct section based on progress)
                await initializePage();
                hideLoader();
            } else {
                // NEW USER - Show student email form
                console.log('ℹ️ New user - showing student email form');
                
                hideLoader();
                
                // Hide sign-in card and show student email form
                elements.signinCard.style.display = 'none';
                elements.signedInEmail.textContent = email;
                elements.studentEmailForm.classList.remove('hidden');
                
                // Scroll to the form
                setTimeout(() => {
                    elements.studentEmailForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
            
        } catch (error) {
            hideLoader();
            showError('Google Sign-In failed. Please try again.');
            console.error('❌ Sign-in error:', error);
        }
    };

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
        const sectionName = section === sections.registration ? 'registration' : 
                          section === sections.prompts ? 'prompts' : 'certificate';
        console.log('📍 Showing section:', sectionName);
        
        Object.values(sections).forEach(s => s.classList.remove('active'));
        section.classList.add('active');
        
        if (section === sections.prompts) {
            elements.progressPreview.classList.remove('hidden');
        }
        
        if (section === sections.certificate) {
            setTimeout(createConfetti, 300);
        }
        
        // Show logout button when user is logged in
        const sessionActive = localStorage.getItem(SESSION_ACTIVE_KEY);
        if (sessionActive === 'true' && section === sections.registration) {
            elements.logoutContainer.classList.remove('hidden');
        } else {
            elements.logoutContainer.classList.add('hidden');
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
            
            card.innerHTML = `
                <div class="prompt-content">
                    <div class="prompt-icon-container">
                        <span class="prompt-emoji">${prompt.emoji}</span>
                        <span class="completed-icon">✓</span>
                    </div>
                    <span class="prompt-title">${prompt.title}</span>
                </div>
                <svg class="prompt-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            `;
            
            elements.promptList.appendChild(card);
        });
        
        updateProgress(completedCount, prompts.length);
        return completedCount;
    }

    function checkCompletion(userData) {
        if (!userData) return false;
        const allComplete = prompts.every(p => userData[`Prompt${p.id}_Clicked`]);
        return allComplete;
    }

    function showError(message) {
        elements.errorMessage.textContent = message;
        elements.errorMessage.style.animation = 'shake 0.5s';
        setTimeout(() => { elements.errorMessage.style.animation = ''; }, 500);
    }

    function clearSession() {
        localStorage.removeItem(USER_ID_KEY);
        localStorage.removeItem(USER_EMAIL_KEY);
        localStorage.removeItem(SESSION_ACTIVE_KEY);
        sessionStorage.removeItem(TEMP_GOOGLE_NAME);
        sessionStorage.removeItem(TEMP_GOOGLE_EMAIL);
    }

    // ============================================
    // API FUNCTIONS
    // ============================================
    async function registerUser(name, studentEmail, geminiEmail) {
        console.log('🔄 Registering user:', { name, studentEmail, geminiEmail });
        
        try {
            const params = new URLSearchParams({ 
                action: 'register', 
                name, 
                studentEmail, 
                geminiEmail 
            });
            
            const response = await fetch(`${WEB_APP_URL}?${params.toString()}`);
            const result = await response.json();
            
            console.log('📥 Registration response:', result);
            
            if (result.error) throw new Error(result.error);
            
            // Store user data
            localStorage.setItem(USER_ID_KEY, result.UserID);
            localStorage.setItem(USER_EMAIL_KEY, result.GeminiEmail);
            localStorage.setItem(SESSION_ACTIVE_KEY, 'true');
            
            // Clear temporary data
            sessionStorage.removeItem(TEMP_GOOGLE_NAME);
            sessionStorage.removeItem(TEMP_GOOGLE_EMAIL);
            
            console.log('✅ User registered successfully, initializing page...');
            
            // Initialize page to show prompts
            await initializePage();
            
        } catch (error) {
            console.error('❌ Registration error:', error);
            showError(error.message);
            throw error;
        }
    }

    async function getUserByEmail(geminiEmail) {
        try {
            const params = new URLSearchParams({ 
                action: 'get_user_by_email', 
                geminiEmail 
            });
            
            const response = await fetch(`${WEB_APP_URL}?${params.toString()}`);
            const result = await response.json();
            
            return result.error ? null : result;
        } catch (error) {
            console.error('❌ Error fetching user by email:', error);
            return null;
        }
    }

    async function getUserById(userId) {
        try {
            if (!userId) return null;
            
            const params = new URLSearchParams({ 
                action: 'get_user_by_id', 
                userId 
            });
            
            const response = await fetch(`${WEB_APP_URL}?${params.toString()}`);
            
            if (!response.ok) {
                throw new Error(`Server responded with status: ${response.status}`);
            }
            
            const result = await response.json();
            
            if (result.error && result.error === "User not found.") {
                clearSession();
                return null;
            }
            
            if (result.error) {
                throw new Error(result.error);
            }
            
            return result;
        } catch (error) {
            console.error('❌ Failed to get user data:', error);
            clearSession();
            return null;
        }
    }

    async function updatePromptProgress(userId, promptId) {
        try {
            const params = new URLSearchParams({ 
                action: 'update_progress', 
                userId, 
                promptId 
            });
            
            await fetch(`${WEB_APP_URL}?${params.toString()}`);
        } catch (error) {
            console.error('❌ Failed to update progress:', error);
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
        certButton.querySelector('.cert-text').textContent = 'Generating Certificate...';
        certButton.querySelector('.cert-icon').textContent = '⏳';
        
        try {
            const params = new URLSearchParams({ 
                action: 'generate_certificate', 
                userId: userId 
            });
            
            const response = await fetch(`${WEB_APP_URL}?${params.toString()}`);
            const result = await response.json();
            
            if (result.error) {
                throw new Error(result.error);
            }
            
            // Replace the entire certificate action area with success message and download button
            elements.certificateActionArea.innerHTML = `
                <div class="certificate-success">
                    <div class="success-icon">✅</div>
                    <h3 class="success-title">Certificate Generated Successfully!</h3>
                    <p class="success-description">Your certificate is ready. Click below to download it.</p>
                    <a href="${result.certificateUrl}" 
                       target="_blank" 
                       download
                       class="certificate-btn download-btn">
                        <span class="cert-btn-content">
                            <span class="cert-icon">📥</span>
                            <span class="cert-text">Download My Certificate</span>
                            <span class="cert-sparkle">🎉</span>
                        </span>
                        <div class="cert-btn-glow"></div>
                    </a>
                    <a href="${result.certificateUrl}" 
                       target="_blank" 
                       class="view-certificate-link">
                        👁️ View in Browser
                    </a>
                </div>
            `;
            
            // Add success animation
            setTimeout(() => {
                const successIcon = document.querySelector('.success-icon');
                if (successIcon) {
                    successIcon.style.animation = 'success-pop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                }
            }, 100);
            
        } catch (error) {
            alert('An error occurred while generating your certificate. Please try again later.');
            certButton.disabled = false;
            certButton.querySelector('.cert-text').textContent = 'Generate My Certificate';
            certButton.querySelector('.cert-icon').textContent = '📜';
            console.error('❌ Certificate generation error:', error);
        }
    }

    // ============================================
    // EVENT HANDLERS
    // ============================================
    elements.studentEmailForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = sessionStorage.getItem(TEMP_GOOGLE_NAME);
        const geminiEmail = sessionStorage.getItem(TEMP_GOOGLE_EMAIL);
        const studentEmail = elements.studentEmailInput.value.trim();
        
        console.log('📝 Form submitted:', { name, geminiEmail, studentEmail });
        
        if (!name || !geminiEmail) {
            showError('Please sign in with Google first.');
            return;
        }
        
        if (!studentEmail) {
            showError('Please enter your student email.');
            return;
        }
        
        toggleLoading(true);
        showLoader('Registering your account...');
        
        try {
            await registerUser(name, studentEmail, geminiEmail);
            hideLoader();
        } catch (error) {
            hideLoader();
            toggleLoading(false);
        }
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
            await updatePromptProgress(userId, promptId);
            
            const userData = await getUserById(userId);
            if (userData) {
                renderPrompts(userData);
                if (checkCompletion(userData)) {
                    setTimeout(() => {
                        showSection(sections.certificate);
                    }, 500);
                }
            }
        }
    });

    elements.generateCertBtn.addEventListener('click', generateCertificate);

    // Logout button handler
    elements.logoutBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to sign out and start fresh?')) {
            clearSession();
            location.reload();
        }
    });

    // Home button handlers
    elements.homeBtnPrompts.addEventListener('click', () => {
        if (confirm('Return to home? Your progress is saved.')) {
            clearSession();
            location.reload();
        }
    });

    elements.homeBtnCert.addEventListener('click', () => {
        if (confirm('Return to home? You can always come back to download your certificate.')) {
            clearSession();
            location.reload();
        }
    });

    // ============================================
    // INITIALIZATION
    // ============================================
    async function initializePage() {
        console.log('🔄 Initializing page...');
        
        const sessionActive = localStorage.getItem(SESSION_ACTIVE_KEY);
        const userId = localStorage.getItem(USER_ID_KEY);
        
        console.log('📊 Session status:', { sessionActive, userId });
        
        // If no active session, show registration
        if (sessionActive !== 'true' || !userId) {
            console.log('ℹ️ No active session - showing registration');
            showSection(sections.registration);
            return;
        }
        
        // Fetch user data
        console.log('🔍 Fetching user data for userId:', userId);
        const userData = await getUserById(userId);
        
        if (!userData) {
            console.log('❌ User data not found - showing registration');
            showSection(sections.registration);
            return;
        }
        
        console.log('✅ User data loaded:', userData);
        
        // Set user name
        elements.userNameSpan.textContent = userData.Name;
        
        // Check completion status
        const isComplete = checkCompletion(userData);
        const completedCount = renderPrompts(userData);
        
        console.log('📈 Progress status:', { completedCount, total: 5, isComplete });
        
        // Route to appropriate section based on progress
        if (isComplete) {
            console.log('🎉 All prompts complete - showing certificate');
            showSection(sections.certificate);
        } else {
            console.log('📝 Prompts incomplete - showing prompts section');
            showSection(sections.prompts);
        }
    }

    // ============================================
    // START APPLICATION
    // ============================================
    createParticles();
    initializePage();
});

// Add success animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    @keyframes success-pop {
        0% { transform: scale(0) rotate(0deg); }
        50% { transform: scale(1.2) rotate(180deg); }
        100% { transform: scale(1) rotate(360deg); }
    }
`;
document.head.appendChild(style);