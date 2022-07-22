import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  data: Array<any>;
  dataUpComing: Array<any>;
}

const initialState: CounterState = {
  data: [],
  dataUpComing: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setDataUpComingResponse: (state, action) => {
      state.dataUpComing = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setData, setDataUpComingResponse} = counterSlice.actions;

export default counterSlice.reducer;
