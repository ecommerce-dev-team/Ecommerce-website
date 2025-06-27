import { configureStore} from '@reduxjs/toolkit';
import productSlice from './Producslice'

const  store = configureStore({reducer:{product:productSlice}});

export default store;