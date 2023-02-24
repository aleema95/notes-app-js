import { configureStore } from '@reduxjs/toolkit'
import errorsSlice from '../slices/errorsSlice'
import notesSlice from '../slices/notesSlice'

export const store = configureStore({
  reducer: {
    errors: errorsSlice,
    notes: notesSlice
  },
})