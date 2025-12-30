// modal.js
const modal = document.getElementById('noteModal');

export function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        modal.querySelector('.modal-content')
            .classList.add('scale-100', 'opacity-100');
    }, 10);
}

export function closeModal() {
    modal.querySelector('.modal-content')
        .classList.remove('scale-100', 'opacity-100');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);
}

export function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    document.getElementById('darkModeIcon').className = isDark ? 'fas fa-sun text-xl' : 'fas fa-moon text-xl';
}