import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  form_errors: {},
}

export const errorsSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setErrors: (state, action) => {
      state.form_errors = action.payload
    },
  },
})

export const { setErrors } = errorsSlice.actions

export default errorsSlice.reducer