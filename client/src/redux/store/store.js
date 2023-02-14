import { configureStore } from '@reduxjs/toolkit'
import errorsSlice from '../slices/errorsSlice'

export const store = configureStore({
  reducer: {
    errors: errorsSlice
  },
})