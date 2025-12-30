// ui.js
import { mockNotes } from './data.js';

export function renderNotes(notes = mockNotes) {
    const container = document.getElementById('notesGrid');
    const emptyState = document.getElementById('emptyState');

    if (!notes.length) {
        container.innerHTML = "<div class='col-span-full text-center py-12'><p class='text-gray-500 dark:text-gray-400'>No notes found.</p></div>";
        emptyState.classList.remove('hidden');
        return;
    }

    container.innerHTML = notes.map(note => `
        <div class="relative note-card bg-${note.color}-50 dark:bg-${note.color}-900/30 
            rounded-2xl p-6 shadow-xl hover:shadow-2xl 
            transform hover:-translate-y-2 transition-all duration-300 
            cursor-pointer group animate-slide-in">

            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-black/5 dark:bg-white/5 
                        opacity-0 group-hover:opacity-100 
                        transition-all duration-300 rounded-2xl"></div>

            <div class="relative z-10">
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                        <i class="fas fa-bookmark text-${note.color}-500"></i>
                        ${note.title}
                    </h3>
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                        <button data-edit="${note.id}" class="edit-btn p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button data-delete="${note.id}" class="delete-btn p-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>

                <p class="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    ${note.content}
                </p>

                <div class="flex justify-between items-center text-sm">
                    <span class="px-4 py-2 bg-white dark:bg-gray-800 rounded-full font-semibold text-${note.color}-600">
                        <i class="fas fa-tag mr-1"></i>${note.category}
                    </span>
                    <span class="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <i class="fas fa-calendar"></i>${note.date}
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}
