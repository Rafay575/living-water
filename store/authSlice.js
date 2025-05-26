import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

// Try to read existing token from cookie
const initialToken = Cookies.get('token') || null;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: initialToken,
  },
  reducers: {
    setCredentials(state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout(state) {
      state.user = {};
      state.token = null;
      Cookies.remove('token');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
