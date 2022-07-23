import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
// import scheduleOverviewSlice from '../features/scheduleOverview/scheduleOverviewSlice';
import counterSlice from '../features/discover/discoverSlice';
import MovieSlice from '../features/MovieDetail/MovieSlice';
import popupVideoSlice from '../features/popup-video/popupVideoSlice';

export const store = configureStore({
  reducer: {
    counterSlice: counterSlice,
    MovieSlice: MovieSlice,
    popupVideoSlice,
    // scheduleOverviewSlice: scheduleOverviewSlice,
  },


import {persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // debug: true,
  // whitelist: ['fetchedMemeSlice', 'loadMemesSlice'],
  // timeout: 20000,
};

const reducers = combineReducers({
  counterSlice: counterSlice,
  popupVideoSlice,
});
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
