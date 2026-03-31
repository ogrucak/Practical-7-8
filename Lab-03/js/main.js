document.addEventListener('DOMContentLoaded', init);

function init() {
    initActiveNav();
}

function initActiveNav() {
    const links = document.querySelectorAll('.nav-list a');

    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    initActiveNav();
    initBackToTop();
    initThemeToggle();
    initContactForm();
}

function initActiveNav() {
    const links = document.querySelectorAll('.nav-list a');

    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
}

function initBackToTop() {
    const btn = document.getElementById('topBtn');
    if (!btn) return;

    btn.style.display = "none";

    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initThemeToggle() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
        document.body.classList.toggle('theme-dark');

        localStorage.setItem('theme', document.body.classList.contains('theme-dark'));
    });

    const saved = localStorage.getItem('theme');
    if (saved === 'true') {
        document.body.classList.add('theme-dark');
    }
}