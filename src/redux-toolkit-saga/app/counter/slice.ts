import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICounterRequest } from '../../../types/counter';
import { prefix } from './constants';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};
export const incrementAct = createAction<ICounterRequest>(
  `${prefix}/increment`
);
export const decrementAct = createAction<ICounterRequest>(
  `${prefix}/decrement`
);
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state: CounterState, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;