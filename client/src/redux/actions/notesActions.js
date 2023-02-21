import axios from 'axios'
import { setNotes } from '../slices/notesSlice';

export const get_notes = () => (dispatch) => {
	axios
  .get(`http://localhost:3010/notes`)
  .then((res) => {
			dispatch(setNotes(res.data));
		})
		.catch((e) => console.log(e));
};