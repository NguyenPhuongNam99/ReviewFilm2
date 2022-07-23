import {createSlice} from '@reduxjs/toolkit';

export interface PopupVideoSlice {
  visiable: boolean;
  dataClick: any;
}

const initialState: PopupVideoSlice = {
  visiable: false,
  dataClick: {},
};

export const popupVideoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setVisiable: (state, action) => {
      state.visiable = action.payload;
    },
    setDataClick: (state, action) => {
      state.dataClick = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setVisiable, setDataClick} = popupVideoSlice.actions;

export default popupVideoSlice.reducer;
