import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
// import scheduleOverviewSlice from '../features/scheduleOverview/scheduleOverviewSlice';
import counterSlice from '../features/discover/discoverSlice';
import MovieSlice from '../features/MovieDetail/MovieSlice';

export const store = configureStore({
  reducer: {
    counterSlice: counterSlice,
    MovieSlice:MovieSlice
    // scheduleOverviewSlice: scheduleOverviewSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
