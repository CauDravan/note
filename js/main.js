// main.js
import { renderNotes } from './ui.js';
import { openModal, closeModal } from './modal.js';
import { toggleDarkMode } from './theme.js';
import { searchNotes, filterByCategory } from './filter.js';
import { showToast } from './toast.js';

document.addEventListener('DOMContentLoaded', () => {
    renderNotes();

    document.getElementById('searchInput')
        ?.addEventListener('input', e => searchNotes(e.target.value));

    document.getElementById('searchInputMobile')
        ?.addEventListener('input', e => searchNotes(e.target.value));
});

// expose for inline HTML
window.openModal = openModal;
window.closeModal = closeModal;
window.toggleDarkMode = toggleDarkMode;
window.filterByCategory = filterByCategory;
window.showToast = showToast;