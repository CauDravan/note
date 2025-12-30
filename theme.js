// theme.js
export function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const icon = document.getElementById('darkModeIcon');
    icon.className = document.documentElement.classList.contains('dark')
        ? 'fas fa-sun text-xl'
        : 'fas fa-moon text-xl';
}

export function setActiveFilter(button) {
    document.querySelectorAll('.filter-btn').forEach(btn =>
        btn.classList.remove('ring-2', 'ring-purple-500')
    );
    button.classList.add('ring-2', 'ring-purple-500');
}