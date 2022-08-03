import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  data: Array<any>;
  loadingData: boolean;
  dataUpComing: Array<any>;
  dataTopRated: Array<any>;
  count: number;
}

const initialState: CounterState = {
  data: [],
  loadingData: false,
  dataUpComing: [],
  dataTopRated: [],
  count: 0,
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
    setLoadingData: (state, action) => {
      state.loadingData = action.payload;
    },
    setDataTopRated: (state, action) => {
      state.dataTopRated = action.payload;
    },
    setCount: state => {
      state.count = state.count + 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setData,
  setDataUpComingResponse,
  setLoadingData,
  setDataTopRated,
  setCount,
} = counterSlice.actions;

export default counterSlice.reducer;
