import { createSlice } from '@reduxjs/toolkit';

const secretSlice = createSlice({
  name: 'secret',
  initialState: Date.now(),
  reducers: {
    up: (state) => {
      state += 1;
    },
    down: (state) => {
      state -= 1;
    },
  },
});

export const { up, down } = secretSlice.actions;

export default secretSlice;
