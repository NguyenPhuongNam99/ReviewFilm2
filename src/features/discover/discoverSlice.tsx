import {createSlice} from '@reduxjs/toolkit';
import _ from 'lodash';

interface DataSearchType {
  id: string;
  resultType: string;
  image: string;
  title: string;
  description: string;
}
export interface CounterState {
  data: Array<any>;
  loadingData: boolean;
  dataUpComing: Array<any>;
  dataSearch: DataSearchType[];
}

const initialState: CounterState = {
  data: [],
  loadingData: false,
  dataUpComing: [],
  dataSearch: [],
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
    setDataSearch: (state, action) => {
      state.dataSearch = action.payload;
    },
    searchApi: (state, action) => {
      const response = state.dataSearch.filter(item => {
        const text = action.payload.toLowerCase();
        const itemData = item.title.toLowerCase();
        return itemData.indexOf(text) > -1;
      });
      state.dataSearch = response;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setData,
  setDataUpComingResponse,
  setLoadingData,
  setDataSearch,
  searchApi,
} = counterSlice.actions;

export default counterSlice.reducer;
