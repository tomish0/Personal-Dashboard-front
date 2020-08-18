import { configureStore } from '@reduxjs/toolkit';
import  homeSlice  from '../features/Home/homeSlice';

export default configureStore({
  reducer: {
    home: homeSlice,
  },
});
