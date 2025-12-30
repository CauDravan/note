// Mock data
const mockNotes = [
    {
        id: 1,
        title: "Chăm sóc mèo cưng",
        content: "Nhớ cho mèo ăn, chơi đùa và dắt đi dạo công viên vào chiều nay. Mua thêm đồ ăn cho mèo.",
        category: "Pet",
        color: "green",
        date: "15/12/2025"
    },
    {
        id: 2,
        title: "Đổi mật khẩu",
        content: "Cần thay đổi mật khẩu cho tất cả các tài khoản sang mật khẩu mạnh hơn với ít nhất 12 ký tự.",
        category: "Security",
        color: "red",
        date: "14/12/2025"
    },
    {
        id: 3,
        title: "Họp team",
        content: "Meeting với team lúc 2PM để review dự án mới. Chuẩn bị slide và báo cáo tiến độ.",
        category: "Work",
        color: "blue",
        date: "13/12/2025"
    },
    {
        id: 4,
        title: "Mua sắm cuối tuần",
        content: "Danh sách: rau củ, trái cây, sữa, bánh mì, thịt gà. Ghé siêu thị lúc 5PM.",
        category: "Personal",
        color: "yellow",
        date: "12/12/2025"
    },
];

function renderNotes(notes = mockNotes) {
    const container = document.getElementById('notesGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (notes.length === 0) {
        container.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    container.innerHTML = notes.map(note => `
        <div class="note-card bg-${note.color}-50 dark:bg-${note.color}-900/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group animate-slide-in">
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                    <i class="fas fa-bookmark text-${note.color}-500"></i>
                    ${note.title}
                </h3>
                <div class="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                    <button onclick="editNote(${note.id})" class="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteNote(${note.id})" class="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            
            <p class="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                ${note.content}
            </p>
            
            <div class="flex justify-between items-center text-sm">
                <span class="px-4 py-2 bg-white dark:bg-gray-800 rounded-full font-semibold text-${note.color}-600 dark:text-${note.color}-400 shadow-sm">
                    <i class="fas fa-tag mr-1"></i>${note.category}
                </span>
                <span class="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <i class="fas fa-calendar"></i>${note.date}
                </span>
            </div>
        </div>
    `).join('');
}

const modal = document.getElementById('noteModal');

function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        modal.querySelector('.modal-content').classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeModal() {
    modal.querySelector('.modal-content').classList.remove('scale-100', 'opacity-100');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    document.getElementById('darkModeIcon').className = isDark ? 'fas fa-sun text-xl' : 'fas fa-moon text-xl';
}

function searchNotes(query) {
    const filtered = mockNotes.filter(note => 
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
    );
    renderNotes(filtered);
}

function filterByCategory(category) {
    if (category === 'all') {
        renderNotes(mockNotes);
    } else {
        const filtered = mockNotes.filter(note => note.category === category);
        renderNotes(filtered);
    }
}

function createNote() {
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;
    
    if (!title || !content) {
        showToast('Vui lòng điền đầy đủ thông tin!', 'error');
        return;
    }
    
    showToast('Ghi chú đã được tạo thành công!', 'success');
    closeModal();
}

function editNote(id) {
    const note = mockNotes.find(n => n.id === id);
    document.getElementById('noteTitle').value = note.title;
    document.getElementById('noteContent').value = note.content;
    openModal();
}

function deleteNote(id) {
    if (confirm('Bạn có chắc muốn xóa ghi chú này?')) {
        showToast('Ghi chú đã được xóa!', 'success');
    }
}

function showToast(message, type = 'success') {
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

document.addEventListener('DOMContentLoaded', () => {
    renderNotes();
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchNotes(e.target.value);
    });

    const searchInputMobile = document.getElementById('searchInputMobile');
    searchInputMobile.addEventListener('input', (e) => {
        searchNotes(e.target.value);
    });
});