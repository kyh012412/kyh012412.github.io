import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import CounterSlice from './CounterSlice';
import secretSlice from './secretSlice';

const Store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    secret: secretSlice.reducer,
  },
});

export default Store;
