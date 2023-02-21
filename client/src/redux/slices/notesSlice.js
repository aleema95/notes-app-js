import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notes: [],
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload.notes
    },
  },
})

export const { setNotes } = notesSlice.actions

export default notesSlice.reducer