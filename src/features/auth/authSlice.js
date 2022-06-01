import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from '../../services/AuthService';

const initialState = {
  user: null,
  isFetching: false,
  error: null,
};


export const loginAsync = createAsyncThunk(
  'auth/login',
  async (payload) => {
    try {
      const response = await AuthService.login(payload.email,payload.password);
      localStorage.setItem('accessToken', response.data.accessToken);
      return response.data;
    } catch (error) {
      throw new Error("something went wrong");
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.isFetching = false;
      state.error = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        console.log(action.payload)
        state.isFetching = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isFetching = false;
        state.user = null;
        state.error = action.error.message;
      });
  },
});

export const { loginFailure,loginSuccess } = authSlice.actions;


export default authSlice.reducer;