'use strict'

const Notepad = function Notepad(notes = []) {

  const [id, title, body, priority] = notes;
  
  this.id = id;
  this.title = title;
  this.body = body;
  this.priority = priority;
  
  // console.log(this);
  
  this.getNotes = function getNotes() {
    return notes;
  }
  this.saveNote = function saveNote (note) {
    notes.push(note)
  }
  this.findNoteById = function findNoteById (id) {
    for (const note of notes) {
      if (note.id === id) {
        return note;
      }
    }
  }
  this.updateNotePriority = function updateNotePriority (id, priority) {
    const note = this.findNoteById(id)
    if(!note) return;
    note.priority = priority;
  }
  this.filterNotesByQuery = function filterNotesByQuery (query) {
    const filtredNotes = [];
    for (const note of notes) {
      const noteContent = `${note.title} ${note.body}`;
      const hasQwery = noteContent.toLowerCase().includes(query.toLowerCase());

      if (hasQwery) {
        filtredNotes.push(note);
      }
    }
    return filtredNotes;
  }
  this.filterNotesByPriority = function filterNotesByPriority (priority) {
    const filtredNotes = [];
    for (let i = 0; i < notes.length; i += 1) {
      if (notes[i].priority === priority) {
        filtredNotes.push(notes[i])
      }
    }
    return filtredNotes;
  }
  this.updateNoteContent = function updateNoteContent (id, updatedContent) {
    const note = this.findNoteById(id);
    if(!note) return;
    console.log(updatedContent);
    note[updatedContent.name] = updatedContent.value;
  }
  this.deleteNote = function deleteNote(id) {
    for (let i = 0; i < notes.length; i += 1) {
      const note = notes[i];
      if (note.id === id) {
        notes.splice(i, 1);
        return;
      }
    }
  }
}
    Notepad.Priority = {
      LOW: 0,
      NORMAL: 1,
      HIGH: 2,
    };
  
const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: Notepad.Priority.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: Notepad.Priority.NORMAL,
  },
];

const notepad = new Notepad(initialNotes);

/*
 * Смотрю что у меня в заметках после инициализации
 */
console.log('Все текущие заметки: ', notepad.getNotes());

notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Notepad.Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Notepad.Priority.LOW,
});

console.log('Все текущие заметки: ', notepad.getNotes());
/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);

console.log(
  'Заметки после обновления приоритета для id-4: ',
  notepad.getNotes(),
);
/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', Notepad.Priority.LOW);

console.log(
  'Заметки после обновления приоритета для id-3: ',
  notepad.getNotes(),
);
/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery('html'),
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);
/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
  'Отфильтровали заметки по нормальному приоритету: ',
  notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
);
/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent('id-3', {
  title: 'Get comfy with React.js or Vue.js',
});

console.log(
  'Заметки после обновления контента заметки с id-3: ',
  notepad.getNotes(),
);
/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.getNotes());




