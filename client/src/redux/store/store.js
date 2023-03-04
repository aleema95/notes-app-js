import { configureStore } from '@reduxjs/toolkit'
import errorsSlice from '../slices/errorsSlice'
import notesSlice from '../slices/notesSlice'
import userSlice from '../slices/userSlice'

export const store = configureStore({
  reducer: {
    errors: errorsSlice,
    notes: notesSlice,
    user: userSlice
  },
})