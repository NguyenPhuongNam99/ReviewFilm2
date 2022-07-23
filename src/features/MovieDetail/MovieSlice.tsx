import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  data: Array<any>;
}

const initialState: CounterState = {
  data: [],
};

export const MovieSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    SaveMovie: (state, action) => {
      const movie = action.payload
      let _data = state.data
      if(_data.length === 0){
        state.data=[movie]
      }
      else{
      const check = _data.some(item=>item.id === movie.id)
      if(!check){
        _data = _data.concat(movie)
        state.data = _data
      }
      else{
        _data = _data.filter(item=>item.id!== movie.id)
        state.data = _data
      }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {SaveMovie} = MovieSlice.actions;

export default MovieSlice.reducer;
