import { createSlice } from '@reduxjs/toolkit'

export interface SessionState {
  isAuth: boolean
}

const initialState: SessionState = {
  isAuth: false,
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true
    },
    logout: (state) => {
      state.isAuth = false
    }
  },
})

export const { login, logout } = sessionSlice.actions

export default sessionSlice.reducer