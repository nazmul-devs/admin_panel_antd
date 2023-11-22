// src/features/auth/authSlice.ts

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface User {
  username: string;
  token: string;
  userid: number;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      localStorage.removeItem('user_id');
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;

export const selectUser = (state: RootState) => state;
