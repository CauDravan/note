// toast.js
export function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    const toastIcon = document.getElementById('toastIcon');

    toastMessage.textContent = message;
    toastIcon.className = type === 'success'
        ? 'fas fa-check-circle text-2xl text-green-500'
        : 'fas fa-exclamation-circle text-2xl text-red-500';

    toast.classList.remove('hidden', 'translate-x-full');
    toast.classList.add('translate-x-0');

    setTimeout(() => {
        toast.classList.remove('translate-x-0');
        toast.classList.add('translate-x-full');
    }, 3000);
}
