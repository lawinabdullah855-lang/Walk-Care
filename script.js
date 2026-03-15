: width 0.3s ease;
}

.nav-links a:hover {
color: var(--primary-color);
}

.nav-links a:hover::after {
width: 100%;
}

.mobile-menu-btn {
display: none;
flex-direction: column;
gap: 6px;
background: none;
border: none;
cursor: pointer;
padding: 8px;
}

.mobile-menu-btn span {
width: 25px;
height: 3px;
background: var(--text-dark);
transition: all 0.3s ease;
border-radius: 2px;
}

.hero {
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
padding: 140px 0 100px;
position: relative;
overflow: hidden;
}

.hero::before {
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
opacity: 0.9;
}

.hero-content {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 60px;
align-items: center;
position: relative;
z-index: 2;
}

.hero-text {
color: var(--white);
}

.hero-title {
font-size: 56px;
font-weight: 800;
line-height: 1.2;
margin-bottom: 24px;
animation: fadeInUp 0.8s ease;
}

.hero-description {
font-size: 20px;
margin-bottom: 40px;
opacity: 0.95;
animation: fadeInUp 0.8s ease 0.2s backwards;
}

.hero-buttons {
display: flex;
gap: 16px;
flex-wrap: wrap;
animation: fadeInUp 0.8s ease 0.4s backwards;
}

.btn {
display: inline-flex;
align-items: center;
gap: 10px;
padding: 16px 32px;
border-radius: 12px;
font-size: 16px;
font-weight: 600;
text-decoration: none;
transition: all 0.3s ease;
cursor: pointer;
border: none;
}

.btn-primary {
background: var(--white);
color: var(--primary-color);
box-shadow: var(--shadow-md);
}

.btn-primary:hover {
transform: translateY(-2px);
box-shadow: var(--shadow-lg);
}

.btn-secondary {
background: rgba(255, 255, 255, 0.2);
color: var(--white);
border: 2px solid var(--white);
backdrop-filter: blur(10px);
}

.btn-secondary:hover {
background: rgba(255, 255, 255, 0.3);
transform: translateY(-2px);
}

.hero-image {
display: flex;
justify-content: center;
animation: fadeInRight 1s ease;
}

.phone-mockup {
position: relative;
animation: float 3s ease-in-out infinite;
}

@keyframes float {
0%, 100% {
transform: translateY(0px);
}
50% {
transform: translateY(-20px);
}
}

.phone-frame {
width: 300px;
height: 600px;
background: #1a1a1a;
border-radius: 40px;
padding: 12px;
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
position: relative;
}

.phone-notch {
position: absolute;
top: 12px;
left: 50%;
transform: translateX(-50%);
width: 140px;
height: 28px;
background: #1a1a1a;
border-radius: 0 0 20px 20px;
z-index: 10;
}

.phone-screen {
width: 100%;
height: 100%;
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
border-radius: 32px;
overflow: hidden;
}

.app-ui {
padding: 50px 20px 20px;
height: 100%;
}

.app-header {
text-align: center;
margin-bottom: 30px;
}

.time {
color: var(--white);
font-weight: 600;
font-size: 14px;
}

.app-content {
background: var(--white);
border-radius: 24px;
padding: 24px;
height: calc(100% - 80px);
}

.app-logo-display {
text-align: center;
margin-bottom: 16px;
}

.app-logo-img {
width: 60px;
height: 60px;
object-fit: contain;
animation: pulse-logo 2s ease-in-out infinite;
}

@keyframes pulse-logo {
0%, 100% {
transform: scale(1);
}
50% {
transform: scale(1.05);
}
}

.welcome-text {
font-size: 24px;
font-weight: 700;
color: var(--primary-color);
margin-bottom: 24px;
text-align: center;
}

.medicine-card {
background: #f0f7ff;
border-radius: 16px;
padding: 16px;
margin-bottom: 12px;
display: flex;
align-items: center;
gap: 12px;
}

.pill-icon {
width: 40px;
height: 40px;
background: var(--primary-color);
border-radius: 12px;
flex-shrink: 0;
}

.medicine-info {
flex: 1;
}

.medicine-name {
font-weight: 600;
color: var(--text-dark);
font-size: 14px;
margin-bottom: 4px;
}

.medicine-time {
font-size: 12px;
color: var(--text-light);
}

.checkmark {
width: 24px;
height: 24px;
border: 2px solid var(--primary-color);
border-radius: 50%;
}

.sos-button {
background: var(--accent-color);
color: var(--white);
text-align: center;
padding: 16px;
border-radius: 12px;
font-weight: 700;
margin-top: 16px;
}

.hero-wave {
position: absolute;
bottom: 0;
left: 0;
right: 0;
z-index: 1;
}

.hero-wave svg {
display: block;
width: 100%;
height: auto;
}

.features {
padding: 100px 0;
background: var(--white);
}

.section-header {
text-align: center;
margin-bottom: 60px;
}

.section-title {
font-size: 42px;
font-weight: 800;
color: var(--text-dark);
margin-bottom: 16px;
}

.section-subtitle {
font-size: 18px;
color: var(--text-light);
}

.features-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
gap: 32px;
}

.feature-card {
background: var(--white);
border-radius: 20px;
padding: 40px 32px;
text-align: center;
transition: all 0.3s ease;
border: 2px solid #f0f0f0;
}

.feature-card:hover {
transform: translateY(-8px);
box-shadow: var(--shadow-lg);
border-color: var(--primary-color);
}

.feature-icon {
margin-bottom: 24px;
display: inline-block;
animation: iconBounce 2s ease-in-out infinite;
}

@keyframes iconBounce {
0%, 100% {
transform: translateY(0);
}
50% {
transform: translateY(-10px);
}
}

.feature-card:hover .feature-icon {
animation: iconSpin 0.6s ease;
}

@keyframes iconSpin {
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
}

.feature-title {
font-size: 22px;
font-weight: 700;
color: var(--text-dark);
margin-bottom: 12px;
}

.feature-description {
color: var(--text-light);
font-size: 15px;
}

.screenshots {
padding: 100px 0;
background: linear-gradient(180deg, var(--white) 0%, var(--bg-light) 100%);
}

.screenshots-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 48px;
justify-items: center;
}

.screenshot-item {
text-align: center;
}

.screenshot-phone {
transition: transform 0.3s ease;
margin-bottom: 20px;
}

.screenshot-phone:hover {
transform: scale(1.05) translateY(-10px);
}

.screenshot-frame {
width: 280px;
height: 560px;
background: #2a2a2a;
border-radius: 36px;
padding: 10px;
box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
position: relative;
}

.screenshot-notch {
position: absolute;
top: 10px;
left: 50%;
transform: translateX(-50%);
width: 120px;
height: 24px;
background: #2a2a2a;
border-radius: 0 0 16px 16px;
z-index: 10;
}

.screenshot-screen {
width: 100%;
height: 100%;
border-radius: 28px;
overflow: hidden;
background: var(--white);
}

.screenshot-ui {
height: 100%;
padding: 40px 20px 20px;
}

.ui-header {
margin-bottom: 24px;
}

.ui-title {
font-size: 24px;
font-weight: 700;
color: var(--text-dark);
text-align: center;
}

.reminder-screen {
background: linear-gradient(180deg, #f0f7ff 0%, var(--white) 100%);
}

.reminder-card {
background: var(--white);
border-radius: 16px;
padding: 16px;
margin-bottom: 12px;
display: flex;
align-items: center;
gap: 12px;
box-shadow: var(--shadow-sm);
}

.reminder-card.active {
border: 2px solid var(--primary-color);
}

.reminder-icon {
width: 44px;
height: 44px;
background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
border-radius: 12px;
}

.reminder-details {
flex: 1;
}

.reminder-name {
font-weight: 600;
color: var(--text-dark);
font-size: 15px;
margin-bottom: 4px;
}

.reminder-schedule {
font-size: 13px;
color: var(--text-light);
}

.reminder-check {
width: 24px;
height: 24px;
border: 2px solid #ddd;
border-radius: 50%;
}

.reminder-check.checked {
background: var(--primary-color);
border-color: var(--primary-color);
position: relative;
}

.reminder-check.checked::after {
content: '✓';
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: var(--white);
font-size: 14px;
}

.emergency-screen {
background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

.emergency-circle {
position: relative;
width: 200px;
height: 200px;
margin-bottom: 32px;
}

.emergency-pulse {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%;
height: 100%;
border: 3px solid rgba(255, 255, 255, 0.6);
border-radius: 50%;
animation: pulse 2s ease-out infinite;
}

.pulse-2 {
animation-delay: 1s;
}

@keyframes pulse {
0% {
transform: translate(-50%, -50%) scale(0.8);
opacity: 1;
}
100% {
transform: translate(-50%, -50%) scale(1.5);
opacity: 0;
}
}

.emergency-button {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 140px;
height: 140px;
background: var(--white);
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.sos-text {
font-size: 36px;
font-weight: 800;
color: var(--accent-color);
}

.emergency-text {
font-size: 18px;
font-weight: 600;
color: var(--white);
margin-bottom: 12px;
}

.emergency-info {
font-size: 14px;
color: rgba(255, 255, 255, 0.9);
}

.history-screen {
background: var(--bg-light);
}

.history-card {
background: var(--white);
border-radius: 16px;
padding: 16px;
margin-bottom: 16px;
box-shadow: var(--shadow-sm);
}

.history-date {
font-size: 13px;
font-weight: 700;
color: var(--text-light);
margin-bottom: 12px;
text-transform: uppercase;
}

.history-item {
display: flex;
align-items: center;
gap: 12px;
padding: 12px 0;
border-bottom: 1px solid #f0f0f0;
}

.history-item:last-child {
border-bottom: none;
}

.history-dot {
width: 12px;
height: 12px;
border-radius: 50%;
flex-shrink: 0;
}

.history-dot.taken {
background: #4caf50;
}

.history-dot.missed {
background: #ff9800;
}

.history-details {
flex: 1;
}

.history-med {
font-weight: 600;
color: var(--text-dark);
font-size: 14px;
margin-bottom: 2px;
}

.history-time {
font-size: 12px;
color: var(--text-light);
}

.screenshot-label {
font-size: 16px;
font-weight: 600;
color: var(--text-dark);
}

.how-it-works {
padding: 100px 0;
background: var(--white);
}

.steps-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 48px;
}

.step-item {
text-align: center;
position: relative;
}

.step-number {
width: 60px;
height: 60px;
background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
color: var(--white);
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size: 28px;
font-weight: 800;
margin: 0 auto 24px;
box-shadow: var(--shadow-md);
}

.step-illustration {
margin-bottom: 24px;
animation: float 3s ease-in-out infinite;
}

.step-illustration svg {
transition: transform 0.3s ease;
}

.step-item:hover .step-illustration svg {
transform: scale(1.1);
}

.step-title {
font-size: 22px;
font-weight: 700;
color: var(--text-dark);
margin-bottom: 12px;
}

.step-description {
color: var(--text-light);
font-size: 15px;
}

.why-walkcare {
padding: 100px 0;
background: var(--bg-light);
}

.why-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 32px;
}

.why-card {
background: var(--white);
border-radius: 20px;
padding: 40px;
text-align: center;
transition: all 0.3s ease;
box-shadow: var(--shadow-sm);
}

.why-card:hover {
transform: translateY(-8px);
box-shadow: var(--shadow-lg);
}

.why-icon {
margin-bottom: 24px;
display: inline-block;
}

.why-title {
font-size: 24px;
font-weight: 700;
color: var(--text-dark);
margin-bottom: 16px;
}

.why-description {
color: var(--text-light);
font-size: 16px;
line-height: 1.6;
}

.download {
padding: 100px 0;
background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
position: relative;
overflow: hidden;
}

.download::before {
content: '';
position: absolute;
top: -50%;
right: -10%;
width: 500px;
height: 500px;
background: rgba(255, 255, 255, 0.1);
border-radius: 50%;
}

.download-content {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 60px;
align-items: center;
position: relative;
z-index: 2;
}

.download-text {
color: var(--white);
}

.download-title {
font-size: 48px;
font-weight: 800;
line-height: 1.2;
margin-bottom: 24px;
}

.download-description {
font-size: 18px;
margin-bottom: 40px;
opacity: 0.95;
}

.download-buttons {
display: flex;
flex-direction: column;
gap: 16px;
}

.btn-download {
background: var(--white);
color: var(--primary-color);
justify-content: center;
font-size: 18px;
}

.btn-download:hover {
transform: translateX(8px);
box-shadow: var(--shadow-lg);
}

.btn-ios {
background: rgba(255, 255, 255, 0.2);
color: var(--white);
border: 2px solid var(--white);
backdrop-filter: blur(10px);
}

.btn-ios:hover {
background: rgba(255, 255, 255, 0.3);
}

.download-image {
display: flex;
justify-content: center;
}

.download-phone {
animation: float 3s ease-in-out infinite;
}

.download-frame {
width: 320px;
height: 640px;
background: #1a1a1a;
border-radius: 44px;
padding: 14px;
box-shadow: 0 24px 72px rgba(0, 0, 0, 0.4);
position: relative;
}

.download-notch {
position: absolute;
top: 14px;
left: 50%;
transform: translateX(-50%);
width: 150px;
height: 30px;
background: #1a1a1a;
border-radius: 0 0 22px 22px;
z-index: 10;
}

.download-screen {
width: 100%;
height: 100%;
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
border-radius: 34px;
overflow: hidden;
}

.download-ui {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
padding: 40px;
}

.download-logo {
margin-bottom: 32px;
animation: pulse-logo 2s ease-in-out infinite;
}

.download-logo-img {
width: 100px;
height: 100px;
object-fit: contain;
}

.download-app-name {
font-size: 36px;
font-weight: 800;
color: var(--white);
margin-bottom: 12px;
}

.download-tagline {
font-size: 18px;
color: rgba(255, 255, 255, 0.9);
}

.footer {
background: #1a1a2e;
color: var(--white);
padding: 60px 0 30px;
}

.footer-content {
display: grid;
grid-template-columns: 2fr 1fr 1fr;
gap: 48px;
margin-bottom: 40px;
}

.footer-brand {
max-width: 400px;
}

.footer-logo {
display: flex;
align-items: center;
gap: 12px;
font-size: 24px;
font-weight: 700;
margin-bottom: 16px;
}

.footer-logo-image {
width: 40px;
height: 40px;
object-fit: contain;
}

.footer-description {
color: rgba(255, 255, 255, 0.7);
font-size: 15px;
line-height: 1.6;
}

.footer-links h4,
.footer-contact h4 {
font-size: 18px;
font-weight: 700;
margin-bottom: 16px;
}

.footer-links ul {
list-style: none;
}

.footer-links li {
margin-bottom: 12px;
}

.footer-links a {
color: rgba(255, 255, 255, 0.7);
text-decoration: none;
transition: color 0.3s ease;
}

.footer-links a:hover {
color: var(--white);
}

.footer-contact p {
color: rgba(255, 255, 255, 0.7);
margin-bottom: 8px;
}

.footer-bottom {
text-align: center;
padding-top: 30px;
border-top: 1px solid rgba(255, 255, 255, 0.1);
color: rgba(255, 255, 255, 0.6);
}

@keyframes fadeInUp {
from {
opacity: 0;
transform: translateY(30px);
}
to {
opacity: 1;
transform: translateY(0);
}
}

@keyframes fadeInRight {
from {
opacity: 0;
transform: translateX(30px);
}
to {
opacity: 1;
transform: translateX(0);
}
}

@media (max-width: 968px) {
.nav-links {
position: fixed;
top: 80px;
left: -100%;
width: 100%;
background: var(--white);
flex-direction: column;
padding: 40px 20px;
box-shadow: var(--shadow-md);
transition: left 0.3s ease;
gap: 20px;
}

.nav-links.active {
    left: 0;
}

.mobile-menu-btn {
    display: flex;
}

.mobile-menu-btn.active span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
}

.mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -8px);
}

.hero-content {
    grid-template-columns: 1fr;
    text-align: center;
}

.hero-title {
    font-size: 40px;
}

.hero-buttons {
    justify-content: center;
}

.hero-image {
    order: -1;
}

.phone-frame {
    width: 260px;
    height: 520px;
}

.download-content {
    grid-template-columns: 1fr;
    text-align: center;
}

.download-title {
    font-size: 36px;
}

.download-buttons {
    align-items: center;
}

.footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
}
}

@media (max-width: 640px) {
.hero {
padding: 120px 0 80px;
}

.hero-title {
    font-size: 32px;
}

.hero-description {
    font-size: 16px;
}

.section-title {
    font-size: 32px;
}

.section-subtitle {
    font-size: 16px;
}

.features,
.screenshots,
.how-it-works,
.why-walkcare,
.download {
    padding: 60px 0;
}

.phone-frame {
    width: 240px;
    height: 480px;
}

.screenshot-frame {
    width: 240px;
    height: 480px;
}

.download-frame {
    width: 260px;
    height: 520px;
}

.btn {
    padding: 14px 24px;
    font-size: 14px;
}

.features-grid,
.why-grid,
.steps-grid {
    gap: 24px;
}
}


## **script.js**

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.feature-card, .screenshot-item, .step-item, .why-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--primary-color)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#f0f0f0';
        });
    });

    const downloadButtons = document.querySelectorAll('.btn-download');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.text
Content.includes('Coming Soon')) {
e.preventDefault();
alert('iOS version coming soon! Stay tuned.');
} else {
e.preventDefault();
alert('Thanks for your interest! The Android app will be available soon on Google Play Store.');
}
});
});

const parallaxElements = document.querySelectorAll('.hero-image, .download-image');
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    parallaxElements.forEach(el => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
    });
});

const cursorEffect = document.createElement('div');
cursorEffect.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary-color);
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.2s ease;
    transform: translate(-50%, -50%);
`;
document.body.appendChild(cursorEffect);

document.addEventListener('mousemove', function(e) {
    cursorEffect.style.left = e.clientX + 'px';
    cursorEffect.style.top = e.clientY + 'px';
});

const interactiveElements = document.querySelectorAll('a, button, .feature-card, .why-card, .screenshot-phone');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', function() {
        cursorEffect.style.opacity = '0.3';
        cursorEffect.style.transform = 'translate(-50%, -50%) scale(2)';
    });
    el.addEventListener('mouseleave', function() {
        cursorEffect.style.opacity = '0';
        cursorEffect.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

const statsCounters = document.querySelectorAll('.step-number');
const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalNumber = parseInt(target.textContent);
            let currentNumber = 0;
            const increment = finalNumber / 30;
            const timer = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= finalNumber) {
                    target.textContent = finalNumber;
                    clearInterval(timer);
                } else {
                    target.textContent = Math.floor(currentNumber);
                }
            }, 50);
            counterObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

statsCounters.forEach(counter => {
    counterObserver.observe(counter);
});

const screenshotPhones = document.querySelectorAll('.screenshot-phone');
screenshotPhones.forEach(phone => {
    phone.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateY(-10px) rotateY(5deg)';
    });
    phone.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0) rotateY(0deg)';
    });
});

const emergencyButton = document.querySelector('.emergency-button');
if (emergencyButton) {
    let isPressing = false;
    emergencyButton.addEventListener('mousedown', function() {
        isPressing = true;
        this.style.transform = 'translate(-50%, -50%) scale(0.9)';
    });
    emergencyButton.addEventListener('mouseup', function() {
        isPressing = false;
        this.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    emergencyButton.addEventListener('mouseleave', function() {
        if (isPressing) {
            this.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    });
}

const lazyLoadImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyLoadImages.forEach(img => {
    imageObserver.observe(img);
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${x}px;
        top: ${y}px;
        opacity: 1;
        transition: all 1s ease-out;
    `;
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0)`;
        particle.style.opacity = '0';
    }, 10);

    setTimeout(() => {
        particle.remove();
    }, 1000);
}

const ctaButtons = document.querySelectorAll('.btn-primary');
ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                createParticle(e.clientX, e.clientY);
            }, i * 50);
        }
    });
});

const heroWave = document.querySelector('.hero-wave svg path');
if (heroWave) {
    let offset = 0;
    setInterval(() => {
        offset += 0.5;
        const pathData = heroWave.getAttribute('d');
        heroWave.style.transform = `translateX(${Math.sin(offset * 0.1) * 2}px)`;
    }, 50);
}

window.addEventListener('scroll', function() {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.body.style.setProperty('--scroll-percentage', scrollPercentage + '%');
});

const phoneScreens = document.querySelectorAll('.phone-screen, .screenshot-screen, .download-screen');
phoneScreens.forEach(screen => {
    screen.style.transition = 'transform 0.1s ease-out';
});

document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    phoneScreens.forEach(screen => {
        const moveX = (mouseX - 0.5) * 10;
        const moveY = (mouseY - 0.5) * 10;
        if (screen.getBoundingClientRect().top < window.innerHeight && screen.getBoundingClientRect().bottom > 0) {
            screen.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
});

const pills = document.querySelectorAll('.pill-icon, .reminder-icon');
pills.forEach((pill, index) => {
    setInterval(() => {
        pill.style.transform = `rotate(${Math.sin(Date.now() / 1000 + index) * 5}deg)`;
    }, 50);
});

const medicineCards = document.querySelectorAll('.medicine-card, .reminder-card');
medicineCards.forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
}, false);

const sos = document.querySelector('.sos-button, .emergency-button');
if (sos) {
    sos.addEventListener('mouseenter', function() {
        const pulses = document.querySelectorAll('.emergency-pulse');
        pulses.forEach(pulse => {
            pulse.style.animationDuration = '1s';
        });
    });
    sos.addEventListener('mouseleave', function() {
        const pulses = document.querySelectorAll('.emergency-pulse');
        pulses.forEach(pulse => {
            pulse.style.animationDuration = '2s';
        });
    });
}

const footerLinks = document.querySelectorAll('.footer-links a');
footerLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

const featureIcons = document.querySelectorAll('.feature-icon, .why-icon');
featureIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        const circle = this.querySelector('circle');
        if (circle) {
            circle.style.transform = 'scale(1.1)';
            circle.style.transition = 'transform 0.3s ease';
        }
    });
    icon.addEventListener('mouseleave', function() {
        const circle = this.querySelector('circle');
        if (circle) {
            circle.style.transform = 'scale(1)';
        }
    });
});

console.log('%cWalkCare Website', 'color: #4A90E2; font-size: 24px; font-weight: bold;');
console.log('%cDeveloped with ❤️', 'color: #6C757D; font-size: 14px;');

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        console.log('Service Worker support detected');
    });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }
    }, 500);
});

const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.borderColor = 'var(--primary-color)';
    });
    input.addEventListener('blur', function() {
        this.parentElement.style.borderColor = '#ddd';
    });
});

const allButtons = document.querySelectorAll('button, .btn');
allButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});
});

window.addEventListener('resize', function() {
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', ${vh}px);
});

document.addEventListener('visibilitychange', function() {
if (document.hidden) {
document.title = 'Come back! - WalkCare';
} else {
document.title = 'WalkCare - Smart Health & Safety App';
}
});

