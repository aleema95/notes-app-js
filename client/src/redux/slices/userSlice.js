import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{},
  access_token:'',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setAccessToken: (state, action) => {
      state.access_token = action.payload
    },
  },
})

export const { setUser, setAccessToken } = userSlice.actions

export default userSlice.reducer