// filter.js
import { mockNotes } from './data.js';
import { renderNotes } from './ui.js';

export function searchNotes(query) {
    const filtered = mockNotes.filter(note =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
    );
    renderNotes(filtered);
}

export function filterByCategory(category) {
    if (category === 'all') return renderNotes(mockNotes);
    renderNotes(mockNotes.filter(n => n.category === category));
}
