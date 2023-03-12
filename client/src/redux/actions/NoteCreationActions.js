import axios from 'axios'

export function createNote(note_data) {
  axios.post('/note/create', note_data)
}