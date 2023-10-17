// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null, // Initial state is null
  reducers: {
    setUser: (state, action) => {
      return action.payload; // Set the user object
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
