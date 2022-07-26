import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  data: Array<any>;
  loadingData: boolean;
  dataUpComing: Array<any>;
  dataTopRated: Array<any>;
}

const initialState: CounterState = {
  data: [],
  loadingData: false,
  dataUpComing: [],
  dataTopRated: [],
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
  },
});

// Action creators are generated for each case reducer function
export const {
  setData,
  setDataUpComingResponse,
  setLoadingData,
  setDataTopRated,
} = counterSlice.actions;

export default counterSlice.reducer;
