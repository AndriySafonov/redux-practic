import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: { users: [] },
  reducers: {
    addUsers(state, { payload }) {
      state.users.push(payload);
    },
    deleteUser(state, { payload }) {
      state.users = state.users.filter(user => payload !== user.id);
    },
  },
});

export const { addUsers, deleteUser } = userSlice.actions;
export const usersReducer = userSlice.reducer;
